import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import panelReducer from "./panelSlice";

const rootReducer = combineReducers({
  user: userReducer,
  panel: panelReducer,
});

export default rootReducer;
