"use client";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
import { Badge } from "@nextui-org/react";
import { getCartItemsAmount } from "@/entities/cartItem/cartSlice";
import { useSelector } from "react-redux";
import { isUserAuthorized } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";

export const CartNavItem = () => {
  const dispatch = useDispatch();
  const cartItemsAmount: number = useSelector(getCartItemsAmount);
  const isAuthorized = useSelector(isUserAuthorized);
  const router = useRouter();

  const handleCartClick = () => {
    if (isAuthorized) {
      router.push("/cart");
    } else {
      dispatch(openPanel({ type: PanelTypes.Login }));
    }
  };
  return (
    <Badge
      content={cartItemsAmount}
      color="danger"
      isInvisible={!cartItemsAmount}
    >
      <div
        className="min-w-fit cursor-pointer"
        data-testid="CartNavItem"
        title="Корзина"
        onClick={() => handleCartClick()}
      >
        <Image
          src="/icons/bag.svg"
          width={24}
          height={24}
          aria-hidden="true"
          alt="Cart Icon"
        />
      </div>
    </Badge>
  );
};
