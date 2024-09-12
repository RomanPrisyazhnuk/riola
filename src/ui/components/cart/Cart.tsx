"use client";
import type { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closePanel } from "@/store/slices/panelSlice";

const Cart: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="p-4 bg-cyan-100/50 flex items-center justify-between">
        <p>Корзина</p>
        <Image
          src={"/icons/x-black.svg"}
          alt={"Close"}
          width={28}
          height={28}
          className="object-contain object-center cursor-pointer"
          onClick={() => dispatch(closePanel())}
        />
      </div>

      <div>Тут будут элементы корзины</div>
    </div>
  );
};
export default Cart;
