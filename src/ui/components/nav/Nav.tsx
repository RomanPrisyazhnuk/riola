import { Suspense } from "react";
import AuthButton from "../auth/AuthButton";
import { CartNavItem } from "./components/CartNavItem";
import { СurrencySelect } from "../СurrencySelect";
import StoreProvider from "@/ui/atoms/StoreProvider";
import { PanelTypes } from "@/store/slices/panelSlice";

export const Nav = () => {
  return (
    <nav
      className="flex items-center gap-2 lg:gap-6 min-w-fit"
      aria-label="Main navigation"
    >
      <СurrencySelect />
      <Suspense fallback={<div className="w-8" />}>
        <StoreProvider>
          <AuthButton type={PanelTypes.Login} buttonChild={"Войти"} />
        </StoreProvider>
      </Suspense>
      <Suspense fallback={<div className="w-6" />}>
        <CartNavItem />
      </Suspense>
    </nav>
  );
};
