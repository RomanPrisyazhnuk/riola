"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closePanel } from "@/store/slices/panelSlice";
import {
  CartItem,
  mocCartItem,
  mocCartItem1,
} from "@/entities/cartItem/cartItem";
import CartCard from "./CartCard";
import { PriceOption } from "@/entities/price";
import Price from "@/ui/atoms/Price";

const Cart: FC = () => {
  const dispatch = useDispatch();
  const mockCartItems = [mocCartItem, mocCartItem1];
  const [activeCartItems, setActiveCartItems] = useState<(number | string)[]>(
    [],
  );

  const toggleActiveCartItem = (itemId: number | string) => {
    if (activeCartItems.includes(itemId)) {
      const itemsToFilter = [...activeCartItems];
      setActiveCartItems(itemsToFilter.filter((item) => item !== itemId));
    } else {
      const selectedItems = [...activeCartItems];
      selectedItems.push(itemId);
      setActiveCartItems(selectedItems);
    }
  };

  let totalSum = 0;

  const getCartItem = (cartItem: CartItem) => {
    const optionsToShow = cartItem.options.map((cartItemOption, index) => {
      let optionFromPrice: PriceOption | null = null;
      if ("price" in cartItem.item) {
        optionFromPrice = cartItem.item.price; // Transfer
      } else {
        optionFromPrice = cartItem.item.prices[index]; // Excursion
      }
      return {
        ...optionFromPrice,
        ...cartItemOption,
        amountPrice: optionFromPrice.amount,
      };
    });
    const itemPrice = optionsToShow.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amountPrice * currentValue.amount;
    }, 0);
    if (activeCartItems.includes(cartItem.item.id)) totalSum += itemPrice;

    return (
      <CartCard
        cartItem={cartItem}
        optionsToShow={optionsToShow}
        itemPrice={itemPrice}
        toggleActiveCartItem={toggleActiveCartItem}
        isSelected={activeCartItems.includes(cartItem.item.id)}
      />
    );
  };
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

      <div className="flex flex-col w-full">
        {mockCartItems.map((cartItem) => getCartItem(cartItem))}
      </div>
      <div className="w-full py-4 px-3 flex justify-between gap-3 items-center">
        <div className="flex font-semibold gap-2 items-center">
          <p>Итого:</p> <Price priceInUSD={totalSum} />
        </div>
        <button
          className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-1/2"
          type="submit"
        >
          Забронировать
        </button>
      </div>
    </div>
  );
};
export default Cart;
