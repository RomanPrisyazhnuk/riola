import { Excursion } from "@/entities/excursion/excursion";
import { Transfer } from "@/entities/transfer/transfer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum PanelTypes {
  Login = "login",
  Register = "registration",
  PreExcursion = "pre-excursion",
  PreTransfer = "pre-transfer",
}

interface PanelData {
  type: PanelTypes;
  data?: Excursion | Transfer;
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
    openPanel: (state: PanelState, action: PayloadAction<PanelData>) => {
      state.panelData = action.payload;
    },
    closePanel: (state: PanelState) => {
      state.panelData = null;
    },
  },
});

export const getPanelData = (state: RootState): PanelData | null =>
  state.panel.panelData;
export const { openPanel, closePanel } = panelSlice.actions;
export default panelSlice.reducer;
