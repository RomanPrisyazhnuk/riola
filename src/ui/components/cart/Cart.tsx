"use client";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Spinner } from "@nextui-org/react";
import { CartItem } from "@/entities/cartItem/cartItem";
import CartCard from "./CartCard";
import { PriceOption } from "@/entities/price";
import Price from "@/ui/atoms/Price";
import { useSelector } from "react-redux";
import { getCart } from "@/entities/cartItem/cartSlice";
import { isUserAuthorized, isUserLoading } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/store/store";
import CartTransferCard from "./CartTransferCard";

const Cart: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const cart: CartItem[] = useSelector(getCart);
  const isAuthorized = useSelector(isUserAuthorized);
  const isLoading = useSelector(isUserLoading);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized && !isLoading) {
      router.push("/");
    }
  }, [isLoading, isAuthorized]);

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
  const getExcursionItem = (cartItem: CartItem) =>{
    const optionsToShow = cartItem.options.map((cartItemOption, index) => {
      //@ts-ignore
      let optionFromPrice: PriceOption = cartItem.item.prices[index];

      return {
        ...optionFromPrice,
        ...cartItemOption,
        amountPrice: optionFromPrice.amount,
      };
    });
    const itemPrice = optionsToShow.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amountPrice * currentValue.amount;
    }, 0);
    if (activeCartItems.includes(cartItem.id)) totalSum += itemPrice;

    return (
      <CartCard
        cartItem={cartItem}
        //@ts-ignore
        optionsToShow={optionsToShow}
        itemPrice={itemPrice}
        toggleActiveCartItem={toggleActiveCartItem}
        isSelected={activeCartItems.includes(cartItem.id)}
      />
    );
  }
  const getTransferItem = (cartItem: CartItem) =>{
    //@ts-ignore
    const itemPrice = cartItem.item.price.amount
    if (activeCartItems.includes(cartItem.id)) totalSum += itemPrice;

    return (
      <CartTransferCard
        cartItem={cartItem}
        //@ts-ignore
        optionsToShow={[]}
        itemPrice={itemPrice}
        toggleActiveCartItem={toggleActiveCartItem}
        isSelected={activeCartItems.includes(cartItem.id)}
      />
    );
  }
  const getCartItem = (cartItem: CartItem) => {
    //@ts-ignore
    if(cartItem.item?.price) return getTransferItem(cartItem)
    return getExcursionItem(cartItem)
  };
  const handlePayment = () => {
    router.push(`/payment?price=${totalSum}&items=${activeCartItems.length}`);
  };
  if (isLoading)
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  return (
    <div className="w-full">
      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3  w-full">
            {cart.map((cartItem) => getCartItem(cartItem))}
          </div>
          <div className="bg-white fixed sm:static rounded-lg w-[calc(100vw-19px)] sm:w-full bottom-[88px] left-2 py-4 px-3 flex justify-end gap-3 items-center">
            <div className="flex font-semibold gap-2 items-center  text-[28px]">
              <Price priceInUSD={totalSum} />
            </div>
            <Button
              isDisabled={!totalSum}
              className="px-4 py-2 h-[40px] self-end w-1/2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 sm:w-auto"
              onClick={() => handlePayment()}
            >
              Перейти к оплате
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 mt-[100px]">
          <div className="text-textColor text-[30px]">Ваша корзина пуста</div>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-fit sm:w-auto"
          >
            Посмотреть предложения
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
