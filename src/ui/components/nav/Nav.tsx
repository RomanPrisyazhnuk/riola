import { Suspense } from "react";
import { UserMenuContainer } from "./components/UserMenu/UserMenuContainer";
import { CartNavItem } from "./components/CartNavItem";
import { СurrencySelect } from "../СurrencySelect";
import StoreProvider from "@/ui/atoms/StoreProvider";

export const Nav = () => {
  return (
    <nav
      className="flex items-center gap-2 lg:gap-6 min-w-fit"
      aria-label="Main navigation"
    >
      <СurrencySelect />
      <Suspense fallback={<div className="w-8" />}>
        <StoreProvider>
          <UserMenuContainer />
        </StoreProvider>
      </Suspense>
      <Suspense fallback={<div className="w-6" />}>
        <CartNavItem />
      </Suspense>
    </nav>
  );
};
