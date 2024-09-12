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
      <div className="hidden sm:flex items-center  gap-4 ">
        <StoreProvider>
          <Suspense fallback={<div className="w-8" />}>
            <AuthButton type={PanelTypes.Login} buttonChild={"Войти"} />
          </Suspense>
          <Suspense fallback={<div className="w-6" />}>
            <CartNavItem />
          </Suspense>
        </StoreProvider>
      </div>
    </nav>
  );
};
