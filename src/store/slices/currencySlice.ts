import { Currency } from "@/entities/currency/currency";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CurrencyState {
  current: Currency;
}

const defaultCurrency = {
  id: "USD",
  name: "\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410",
  symbol: "$",
  rate: 1,
};

const initialState: CurrencyState = {
  current: defaultCurrency,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.current = action.payload;
    },
    clearCurrency: (state) => {
      state.current = defaultCurrency;
    },
  },
});

export const getCurrentCurrency = (state: RootState): Currency =>
  state.currency.current;

export const { setCurrency, clearCurrency } = currencySlice.actions;
export default currencySlice.reducer;
