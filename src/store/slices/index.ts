import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import panelReducer from "./panelSlice";
import currencyReducer from "./currencySlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  panel: panelReducer,
  currency: currencyReducer,
  cart: cartReducer
});

export default rootReducer;
