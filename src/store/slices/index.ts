import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import panelReducer from "./panelSlice";
import currencyReducer from "./currencySlice";

const rootReducer = combineReducers({
  user: userReducer,
  panel: panelReducer,
  currency: currencyReducer,
});

export default rootReducer;
