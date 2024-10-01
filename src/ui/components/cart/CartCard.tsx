import { CartItem } from "@/entities/cartItem/cartItem";
import type { FC } from "react";
import Image from "next/image";
import { PriceOption } from "@/entities/price";
import Price from "@/ui/atoms/Price";
import { Checkbox, cn } from "@nextui-org/react";
import { getFormatedDate } from "@/lib/helpers/dateHelper";

interface Additional {
  amountPrice: number;
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
  if (!cartItem.item) {
    return null;
  } else {
    return (
      <div
        key={cartItem.item.id + cartItem.starts_at}
        className="m-2 w-full flex flex-col px-3 "
      >
        <Checkbox
          aria-label={cartItem.item.name}
          classNames={{
            base: cn(
              "inline-flex w-full max-w-none bg-content1 mt-2 ",
              "hover:bg-content2 items-center justify-start",
              "cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent",
              "data-[selected=true]:border-primary shadow-md grow shadow-cyan-100 rounded-md",
            ),
            label: "w-full",
          }}
          isSelected={isSelected}
          onValueChange={() => toggleActiveCartItem(cartItem.item.id)}
        >
          <div className="flex">
            <div className="h-[60px] w-[60px] overflow-hidden relative rounded-md flex">
              <Image
              //@ts-ignore
                src={cartItem.item.images?.thumb || "/b-2-520-820-90.webp"}
                alt={cartItem.item.name}
                fill
                loading="lazy"
              />
            </div>
            <div className="flex flex-col px-2">
              <p className="text-textColor font-semibold text-[20px]">
                {cartItem.item.name}
              </p>
              <p className="text-textColor text-[16px] pb-2">
                {getFormatedDate(cartItem.starts_at)}
              </p>
              {optionsToShow.map((item) => (
                <p key={`${item.amount} x ${item.title}`} className="text-textColor text-[16px] ">
                  {`${item.amount} x ${item.title}`}
                </p>
              ))}
              <div className="text-textColor font-semibold text-[16px] ">
                <Price priceInUSD={itemPrice} />
              </div>
            </div>
          </div>
        </Checkbox>
      </div>
    );
  }
};
export default CartCard;
