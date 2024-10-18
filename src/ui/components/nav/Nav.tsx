import { Suspense } from "react";
import AuthButtonWrap from "../auth/AuthButtonWrap";
import { CartNavItem } from "./components/CartNavItem";
import { СurrencySelect } from "../СurrencySelect";
import StoreProvider from "@/ui/atoms/StoreProvider";
import { PanelTypes } from "@/store/slices/panelSlice";
import Image from "next/image";

export const Nav = () => {
  return (
    <nav
      className="flex items-center gap-2 lg:gap-6 min-w-fit"
      aria-label="Main navigation"
    >
      {" "}
      <StoreProvider>
        <СurrencySelect />
        {/* <div className="hidden sm:flex items-center  gap-4 ">
          <Suspense fallback={<div className="w-8" />}>
            <AuthButtonWrap
              type={PanelTypes.Login}
              beforeAuthView={
                <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-cyan-400 w-full sm:w-auto">
                  Войти
                </button>
              }
              afterAuthView={
                <Image
                  title="Аккаунт"
                  src={"/icons/account-blue.svg"}
                  alt={"Войти"}
                  loading="lazy"
                  width={20}
                  height={20}
                  className="h-full object-contain object-center cursor-pointer"
                />
              }
            />
          </Suspense>
          <Suspense fallback={<div className="w-6" />}>
            <CartNavItem />
          </Suspense>
        </div> */}
      </StoreProvider>
    </nav>
  );
};
