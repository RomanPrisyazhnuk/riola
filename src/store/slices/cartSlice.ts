import { CartItem } from "@/entities/cartItem/cartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartState {
    cart: CartItem[];
}


const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state:CartState, action: PayloadAction<CartItem[]>) => {
      state.cart = action.payload;
    },
    addItemToCart:(state:CartState, action: PayloadAction<CartItem>) => {
        state.cart = [...state.cart, action.payload];
    },
    removeItemFromCart:(state:CartState, action: PayloadAction<CartItem>) => {
        state.cart = state.cart.filter((cartItem:CartItem) => cartItem.item.id ===action.payload.item.id);
    },
    clearCart: (state:CartState) => {
      state.cart = [];
    },
  },
});

export const getCart = (state: RootState): CartItem[] =>
  state.cart.cart;

export const { setCart, clearCart, addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
