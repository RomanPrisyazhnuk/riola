"use client";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { useState, FormEvent } from "react";
import { parseAbsoluteToLocal } from "@internationalized/date";

// import { closePanel, PanelTypes } from "@/store/slices/panelSlice";
import { Excursion, ExcursionFull } from "@/entities/excursion/excursion";
import { Spacer, DatePicker, Textarea } from "@nextui-org/react";
import Counter from "@/ui/atoms/Counter";
import PriceText from "@/ui/atoms/PriceText";
import { addItemToCart } from "@/store/slices/cartSlice";
import { closePanel } from "@/store/slices/panelSlice";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import LocationFull from "@/ui/atoms/LocationFull";

interface PreExcursionProps {
  data: ExcursionFull;
}
const PreExcursion: FC<PreExcursionProps> = ({ data }) => {
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  let [date, setDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );

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

  const dispatch = useDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addItemToCart({
      item: data,
      starts_at: `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`,
      options: Object.entries(counters).map(([key, value]) => ({
        id: Number(key),
        amount: value,
      }))
    }))
    dispatch(closePanel())
  };

  return (
    <div className="w-full h-full p-3 relative flex flex-col justify-between ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="rounded-t-md overflow-hidden ">
        <ProductImageWrapper
          src={data.images[0].thumb || "/b-2-520-820-90.webp"}
          alt={data.name}
          width={300}
          height={260}
          sizes={"260px"}
          priority={false}
        />
        </div>
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
          <button
          className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-fit"
          type="submit"
          >
          Добавить в корзину
          </button>
        </div>

      </form>
    </div>
  );
};
export default PreExcursion;
