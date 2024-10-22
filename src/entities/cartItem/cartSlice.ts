import {
  addCartItem,
  getAuthUserCart,
  removeCartItem,
  updateCartItem,
} from "@/entities/cartItem/actions";
import { CartItem, CartItemOption } from "@/entities/cartItem/cartItem";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

// Асинхронное действие для получения корзины пользователя
export const fetchUserCart = createAsyncThunk<CartItem[], void>(
  "cart/fetchUserCart",
  async (_, { rejectWithValue }) => {
    try {
      const cartData = await getAuthUserCart();
      return cartData as CartItem[];
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return rejectWithValue("Failed to fetchUserCart"); // Возвращаем ошибку
    }
  },
);

// -----------------------------------------------------------------------

export interface AddItemToCartData {
  product_id: number;
  address: string;
  starts_at: string;
  options: CartItemOption[];
  flight?: string;
  transfer_time?: string;
  contact: {
    full_name: string;
    email: string;
    phone: string;
    phone_type: "whatsapp";
    country_code: "th";
  };
}

// Асинхронное действие для добавления товара в корзину
export const addItemToCart = createAsyncThunk<CartItem, AddItemToCartData>(
  "cart/addItemToCart",
  //@ts-ignore
  async (data: AddItemToCartData, { rejectWithValue }) => {
    try {
      const cartData = await addCartItem(data);
      //@ts-ignore
      return cartData;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return rejectWithValue("Failed to addItemToCart");
    }
  },
);

// -----------------------------------------------------------------------

export interface UpdateItemCartData extends AddItemToCartData {}

// Асинхронное действие для обновления товара в корзине
export const updateItemCart = createAsyncThunk<CartItem, UpdateItemCartData>(
  "cart/updateItemCart",
  //@ts-ignore
  async (data: UpdateItemCartData, { rejectWithValue }) => {
    try {
      const cartData = await updateCartItem(data);
      //@ts-ignore
      return cartData.data;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return rejectWithValue("Failed to updateItemCart");
    }
  },
);

// -----------------------------------------------------------------------

export interface RemoveItemFromCartData {
  product_id: number;
}

// Асинхронное действие для удаления товара из корзины
export const removeItemFromCart = createAsyncThunk<
  number,
  RemoveItemFromCartData
>(
  "cart/removeItemFromCart",
  //@ts-ignore
  async (data: RemoveItemFromCartData, { rejectWithValue }) => {
    try {
      await removeCartItem(data);
      //@ts-ignore
      return data.product_id; // Возвращаем ID удаленного товара
    } catch (error) {
      console.error("Error removing item from cart:", error);
      return rejectWithValue("Failed to remove item from cart"); // Возвращаем ошибку
    }
  },
);

// -----------------------------------------------------------------------

interface CartState {
  cartData: CartItem[];
  isLoading: boolean;
}

const initialState: CartState = {
  cartData: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state: CartState, action: PayloadAction<CartItem[]>) => {
      state.cartData = action.payload;
    },
    clearCart: (state: CartState) => {
      state.cartData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Получение корзины
      .addCase(fetchUserCart.pending, (state: CartState) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUserCart.fulfilled,
        (state: CartState, action: PayloadAction<CartItem[]>) => {
          state.cartData = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchUserCart.rejected, (state: CartState) => {
        state.isLoading = false;
      })

      // Добавление товара в корзину
      .addCase(addItemToCart.pending, (state: CartState) => {
        state.isLoading = true;
      })
      .addCase(
        addItemToCart.fulfilled,
        (state: CartState, action: PayloadAction<CartItem>) => {
          action.payload && state.cartData.push(action.payload);
          state.isLoading = false;
        },
      )
      .addCase(addItemToCart.rejected, (state: CartState) => {
        state.isLoading = false;
      })

      // Обновление товара в корзине
      .addCase(updateItemCart.pending, (state: CartState) => {
        state.isLoading = true;
      })
      .addCase(
        updateItemCart.fulfilled,
        (state: CartState, action: PayloadAction<CartItem>) => {
          const index = state.cartData.findIndex(
            (item) => item.id === action.payload.id,
          );
          if (index !== -1) {
            state.cartData[index] = action.payload;
          }
          state.isLoading = false;
        },
      )
      .addCase(updateItemCart.rejected, (state: CartState) => {
        state.isLoading = false;
      })

      // Удаление товара из корзины
      .addCase(removeItemFromCart.pending, (state: CartState) => {
        state.isLoading = true;
      })
      .addCase(
        removeItemFromCart.fulfilled,
        (state: CartState, action: PayloadAction<number>) => {
          state.cartData = state.cartData.filter(
            (item) => item.id !== action.payload,
          );
          state.isLoading = false;
        },
      )
      .addCase(removeItemFromCart.rejected, (state: CartState) => {
        state.isLoading = false;
      });
  },
});

export const getCart = (state: RootState): CartItem[] => state.cart.cartData;

export const getCartItemsAmount = (state: RootState): number =>
  state.cart.cartData.length;

export const { setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
