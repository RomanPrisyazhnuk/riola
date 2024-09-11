"use client";
import { useDispatch } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
import { FC, ReactNode } from "react";

interface AuthButtonProps {
  type: PanelTypes;
  buttonChild: ReactNode;
}

const AuthButton: FC<AuthButtonProps> = ({ type, buttonChild }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(openPanel({ type }))}
      className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto"
    >
      {buttonChild}
    </button>
  );
};

export default AuthButton;
