import { CartItem, CartItemOptionMember } from "@/entities/cartItem/cartItem";
import type { FC } from "react";
import Image from "next/image";
import { PriceOption } from "@/entities/price";
import Price from "@/ui/atoms/Price";
import { Checkbox } from "@nextui-org/react";
import { getFormatedDate } from "@/lib/helpers/dateHelper";
import { useDispatch } from "react-redux";
import LocationFull from "@/ui/atoms/LocationFull";
import { AppDispatch } from "@/store/store";
import { removeItemFromCart } from "@/entities/cartItem/cartSlice";

interface Additional {
  amountPrice?: number;
  customers: CartItemOptionMember[];
}

interface CartCardProps {
  cartItem: CartItem;
  optionsToShow: (PriceOption & Additional)[];
  itemPrice: number;
  toggleActiveCartItem: (itemId: number | string) => void;
  isSelected: boolean;
}

const CartCard: FC<CartCardProps> = ({
  cartItem,
  optionsToShow,
  itemPrice,
  toggleActiveCartItem,
  isSelected,
}) => {
  const dispatch: AppDispatch = useDispatch(); // Типизируем диспетчер

  if (!cartItem.item) {
    return null;
  } else {
    const handeleDeleteItem = () => {
      dispatch(removeItemFromCart({ product_id: cartItem.id }));
    };

    return (
      <div
        key={cartItem.id + cartItem.starts_at}
        className="flex flex-col  relative rounded-md overflow-hidden shadow-md shadow-cyan-100 "
      >
        <div className="h-[200px] w-full overflow-hidden relative rounded-t-md flex">
          <Image
            src={cartItem.item.image?.thumb || "/b-2-520-820-90.webp"}
            alt={cartItem.item.name}
            fill
            loading="lazy"
          />
        </div>
        <div className="flex gap-1 p-2 pl-3 pr-1 absolute top-2 left-2 bg-white rounded-md">
          <Checkbox
            aria-label={cartItem.item.name}
            isSelected={isSelected}
            onValueChange={() => toggleActiveCartItem(cartItem.id)}
          />
        </div>
        <div
          className="absolute top-2 right-2 p-2 px-3 bg-white rounded-md cursor-pointer"
          onClick={() => handeleDeleteItem()}
        >
          <Image
            src={"/icons/trash.svg"}
            alt={"trash"}
            loading="lazy"
            width={20}
            height={20}
            className="h-full object-contain object-center"
          />
        </div>
        <div className="p-3 flex flex-col w-full justify-between h-[calc(100%-190px)]">
          <div className="">
            <div className="flex flex-col w-full justify-between ">
              <div className="pb-1">
                <span className="text-textColor font-semibold text-[24px]">
                  {cartItem.item.name}
                </span>
                {/* @ts-ignore */}
                {cartItem.item?.location && (
                  // @ts-ignore
                  <LocationFull location={cartItem.item.location} />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3 py-3  border-y border-y-cyan-100">
              <div className="p-3 bg-gray-100 rounded-md p-2 ">
                <div className=" text-primary cursor-pointer hover:text-cyan-400">
                  Добавить адрес или отель
                </div>
                <span>Адрес</span>
              </div>
              <div className="p-3 bg-gray-100 rounded-md p-2 flex justify-between">
                <div>
                  <span className="text-primary cursor-pointer hover:text-cyan-400">
                    Добавить инфо
                  </span>
                  <p>Участники</p>
                </div>

                <div className="flex flex-col justify-end">
                  {optionsToShow.slice(0, 2).map((item) => (
                    <span
                      key={`${item.id} x ${item.title}`}
                      className="text-textColor text-[16px] "
                    >
                      {`${item.title}: ${item.customers.length}`}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 justify-between">
                <div className="w-1/2 bg-gray-100 rounded-md p-3">
                  <div className="text-textColor text-[16px]">
                    <span className="text-primary cursor-pointer hover:text-cyan-400">
                      {getFormatedDate(cartItem.starts_at)}
                    </span>
                    <p>Дата</p>
                  </div>
                </div>
                <div className="w-1/2 bg-gray-100 rounded-md p-3">
                  <span className="font-semibold">5%</span>
                  <p>Скидка</p>
                </div>
              </div>
            </div>
            <div className="flex font-bold gap-2 text-[24px] items-center text-textColor mt-1">
              <span>Итого:</span> <Price priceInUSD={itemPrice} />
            </div>
            <div className="flex font-bold gap-2 text-[18px] items-center text-[#4FAD50]">
              <Image
                src={"/icons/x-bordered-green.svg"}
                alt={"x-bordered-green"}
                loading="lazy"
                width={24}
                height={24}
                className="h-full object-contain object-center"
              />
              <span>Отмена за 24 часа бесплатно</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CartCard;
