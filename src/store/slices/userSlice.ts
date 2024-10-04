import { getAuthUserData } from "@/entities/user/actions";
import { User } from "@/entities/user/user";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchUserCart } from "../../entities/cartItem/cartSlice";
import { closePanel } from "./panelSlice";

interface UserState {
  userData: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  userData: null,
  isLoading: true,
};

export const fetchUser = createAsyncThunk<User, void>(
  "user/fetchUser",
  async (_, { dispatch }) => {
    try {
      const user = await getAuthUserData();
      if (user) {
        dispatch(closePanel());
        dispatch(fetchUserCart());
      }
      //@ts-ignore
      return user.data; // Возвращаем объект пользователя
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User | null>) => {
      state.userData = action.payload;
    },
    clearUser: (state: UserState) => {
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state: UserState) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchUser.fulfilled,
      (state: UserState, action: PayloadAction<User>) => {
        state.userData = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(fetchUser.rejected, (state: UserState) => {
      state.isLoading = false;
    });
  },
});

export const getUserData = (state: RootState): User | null =>
  state.user.userData;
export const isUserAuthorized = (state: RootState): boolean =>
  !!state.user.userData;
export const isUserLoading = (state: RootState): boolean =>
  state.user.isLoading;

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
