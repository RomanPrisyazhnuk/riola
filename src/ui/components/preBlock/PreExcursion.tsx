"use client";
import { ChangeEvent, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, FormEvent } from "react";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { ExcursionFull } from "@/entities/excursion/excursion";
import { Spacer, DatePicker, Button, Input } from "@nextui-org/react";
import Counter from "@/ui/atoms/Counter";
import PriceText from "@/ui/atoms/PriceText";
import {
  addItemToCart,
  clearCart,
  getCart,
} from "@/entities/cartItem/cartSlice";
import { closePanel } from "@/store/slices/panelSlice";
import LocationFull from "@/ui/atoms/LocationFull";
import { AppDispatch } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartItem } from "@/entities/cartItem/cartItem";

interface PreExcursionProps {
  data: ExcursionFull;
}
const PreExcursion: FC<PreExcursionProps> = ({ data }) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const cart: CartItem[] = useSelector(getCart);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [hotel, setHotel] = useState<string>("");
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const today = new Date();
  const [date, setDate] = useState(
    parseAbsoluteToLocal(
      new Date(today.setDate(today.getDate() + 1)).toISOString(),
    ),
  );
  useEffect(() => {
    if (cart && cart[0] && cart[0].id) {
      router.push(`/payment/${cart[0].id}`);
      dispatch(closePanel());
      dispatch(clearCart());
    }
  }, [cart]);

  const setOption = (optionId: number, count: number) => {
    setCounters((prev) => ({
      ...prev,
      [optionId]: count,
    }));
  };

  const totalAmount = data.prices.reduce((total, price) => {
    const count = counters[price.id] || 0;
    return total + price.amount * count;
  }, 0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemOptions = Object.entries(counters).map(([key, value]) => {
      return {
        id: Number(key),
        count: value,
      };
    });
    dispatch(
      addItemToCart({
        product_id: data.id,
        address: hotel,
        starts_at: `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`,
        options: itemOptions,
        contact: {
          full_name: name,
          email,
          phone,
          phone_type: "whatsapp",
          country_code: "th",
        },
      }),
    );
  };
  const isSubmitButtonDisabled = () => {
    if (
      Object.values(counters).every((value) => value === 0) ||
      !name ||
      !email ||
      !phone ||
      !hotel
    ) {
      return true;
    }
    return false;
  };
  return (
    <div className="w-full h-full p-3 relative flex flex-col justify-between ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {/* <div className="rounded-t-md overflow-hidden ">
          <ProductImageWrapper
            src={data.images[0].thumb || "/b-2-520-820-90.webp"}
            alt={data.name}
            width={300}
            height={260}
            sizes={"260px"}
            priority={false}
          />
        </div> */}
        <div>
          <p className="text-textColor font-semibold text-[20px]">
            {data.name}
          </p>
          <LocationFull location={data.location} />
        </div>

        {data.prices.map((price) => {
          return (
            <Counter
              key={price.id}
              title={price.title}
              setCounter={(count) => setOption(price.id, count)}
              value={counters[price.id] || 0}
            />
          );
        })}
        <Input
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          variant="bordered"
          label="Имя и фамилия"
          labelPlacement="outside"
          placeholder="Введите ваше имя и фамилию"
          startContent={
            <Image
              src={"/icons/account-blue.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />
        <Input
          type="text"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          variant="bordered"
          label="Номер телефона"
          labelPlacement="outside"
          placeholder="Введите номер телефона"
          startContent={
            <Image
              src={"/icons/phone.svg"}
              alt={"Location"}
              width={18}
              height={18}
              className="h-full object-contain object-center"
            />
          }
        />
        <Input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          variant="bordered"
          label="Email"
          labelPlacement="outside"
          placeholder="Введите эл.адрес"
          startContent={
            <Image
              src={"/icons/letter.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />
        <Input
          type="text"
          value={hotel}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setHotel(e.target.value)
          }
          variant="bordered"
          label="Откуда Вас забрать?"
          labelPlacement="outside"
          placeholder="Введите название отеля/кондо"
          startContent={
            <Image
              src={"/icons/buildings.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />

        <DatePicker
          label="Дата"
          granularity="day"
          variant="bordered"
          className="w-full"
          defaultValue={date}
          labelPlacement="outside"
          onChange={setDate}
        />

        <Spacer y={1.5} />
        <div className="w-full flex gap-3 justify-between items-center">
          <p className="flex items-center text-textColor font-bold text-[22px]">
            <PriceText priceInUSD={totalAmount} />
          </p>
          <Button
            type="submit"
            isDisabled={isSubmitButtonDisabled()}
            className="px-4 py-2 h-[40px] self-end w-1/2 text-white bg-primary rounded-md hover:bg-cyan-400 sm:w-auto"
          >
            Оплатить
          </Button>
          {/* <button
            className="px-4 py-2 text-white bg-primary rounded-md hover:bg-cyan-400 w-fit"
            type="submit"
          >
            Добавить в корзину
          </button> */}
        </div>
      </form>
    </div>
  );
};
export default PreExcursion;
