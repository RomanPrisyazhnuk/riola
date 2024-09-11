import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Определение типов панелей с использованием перечисления
export enum PanelTypes {
  Login = "login",
  Register = "registration",
  Cart = "cart",
}

interface PanelData {
  type: PanelTypes;
}

interface PanelState {
  panelData: PanelData | null;
}

const initialState: PanelState = {
  panelData: null,
};

const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    openPanel: (state, action: PayloadAction<PanelData>) => {
      state.panelData = action.payload;
    },
    closePanel: (state) => {
      state.panelData = null;
    },
  },
});

// Селекторы
export const getPanelData = (state: RootState): PanelData | null =>
  state.panel.panelData;
export const { openPanel, closePanel } = panelSlice.actions;
export default panelSlice.reducer;
