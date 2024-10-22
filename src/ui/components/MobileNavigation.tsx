"use client";
import type { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
import Link from "next/link";
import AuthButtonWrap from "./auth/AuthButtonWrap";
import { isUserAuthorized } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import { Badge } from "@nextui-org/react";
import { getCartItemsAmount } from "@/entities/cartItem/cartSlice";

interface MobileNavigationProps {}

const MobileNavigation: FC<MobileNavigationProps> = ({}) => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(isUserAuthorized);
  const router = useRouter();
  const cartItemsAmount: number = useSelector(getCartItemsAmount);

  const handleCartClick = () => {
    if (isAuthorized) {
      router.push("/cart");
    } else {
      dispatch(openPanel({ type: PanelTypes.Login }));
    }
  };
  const accountBlock = (
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
  );

  return (
    <div className="text-[14px] sm:hidden rounded-lg px-6 fixed z-30 bottom-0 right-3 w-fit bg-primary h-[76px] mb-3 flex items-center justify-between">
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
      {/* <AuthButtonWrap
        type={PanelTypes.Login}
        beforeAuthView={accountBlock}
        afterAuthView={accountBlock}
      />
      <div
        className="flex flex-col items-center justify-between"
        title="Корзина"
        onClick={() => handleCartClick()}
      >
        <Badge
          content={cartItemsAmount}
          color="danger"
          isInvisible={!cartItemsAmount}
        >
          <Image
            src="/icons/bag-white.svg"
            width={24}
            height={24}
            aria-hidden="true"
            alt="Cart Icon"
          />
        </Badge>

        <p className="text-white">Корзина</p>
      </div> */}
    </div>
  );
};
export default MobileNavigation;
