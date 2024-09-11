"use client";
import { UserMenu } from "./UserMenu";
import { mockUser } from "@/entities/user";
import { useDispatch } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";

export function UserMenuContainer() {
  const user = null;
  const dispatch = useDispatch();

  if (user) {
    return <UserMenu user={mockUser} />;
  } else {
    return (
      <button
        onClick={() => dispatch(openPanel({ type: PanelTypes.Auth }))}
        className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto"
      >
        Войти
      </button>
    );
  }
}
