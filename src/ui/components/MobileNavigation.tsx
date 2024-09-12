"use client";
import type { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
import Link from "next/link";

interface MobileNavigationProps {}

const MobileNavigation: FC<MobileNavigationProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className="text-[14px] sm:hidden rounded-lg px-6 fixed z-30 bottom-0 w-[calc(100%-1.5rem)] bg-cyan-500 h-[76px] mb-3 flex items-center justify-between">
      <Link
        href="/search"
        className="flex flex-col items-center justify-between "
      >
        <Image
          src="/icons/search-white.svg"
          width={24}
          height={24}
          aria-hidden="true"
          alt="Cart Icon"
        />
        <p className="text-white">Поиск</p>
      </Link>
      <div className="flex flex-col items-center justify-between">
        <Image
          src="/icons/account.svg"
          width={24}
          height={24}
          aria-hidden="true"
          alt="Cart Icon"
        />
        <p className="text-white">Аккаунт</p>
      </div>
      <div
        className="flex flex-col items-center justify-between"
        onClick={() => dispatch(openPanel({ type: PanelTypes.Cart }))}
      >
        <Image
          src="/icons/bag-white.svg"
          width={24}
          height={24}
          aria-hidden="true"
          alt="Cart Icon"
        />
        <p className="text-white">Корзина</p>
      </div>
    </div>
  );
};
export default MobileNavigation;
