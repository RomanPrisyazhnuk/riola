"use client";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { useState, FormEvent } from "react";
import { parseAbsoluteToLocal } from "@internationalized/date";

// import { closePanel, PanelTypes } from "@/store/slices/panelSlice";
import { Excursion } from "@/entities/excursion/excursion";
import { Spacer, DatePicker, Textarea } from "@nextui-org/react";
import Counter from "@/ui/atoms/Counter";
import PriceText from "@/ui/atoms/PriceText";

interface PreExcursionProps {
  data: Excursion;
}
const PreExcursion: FC<PreExcursionProps> = ({ data }) => {
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  let [date, setDate] = useState(
    parseAbsoluteToLocal(new Date().toISOString()),
  );

  // Инициализируем счетчики на основе переданных данных
  const setOption = (optionId: number, count: number) => {
    setCounters((prev) => ({
      ...prev,
      [optionId]: count,
    }));
  };

  // Рассчитываем общую сумму по всем счетчикам
  const totalAmount = data.prices.reduce((total, price) => {
    const count = counters[price.id] || 0;
    return total + price.amount * count;
  }, 0);

  const dispatch = useDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Выбранная дата: ${date}`); // Дата в ISO формате
  };

  return (
    <div className="w-full max-w-lg p-3">
      <p className="font-bold pb-3">{data.name}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
        <div className="mt-4 text-lg font-bold flex gap-3">
          <span>Общая сумма:</span>
          <PriceText priceInUSD={totalAmount} />
        </div>
        <DatePicker
          label="Дата"
          granularity="day"
          variant="bordered"
          className="w-full"
          defaultValue={date}
          labelPlacement="outside"
          onChange={setDate}
        />

        <Textarea
          variant="bordered"
          label="Комментарий"
          labelPlacement="outside"
          placeholder="Добавьте комментарий если необходимо"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />

        <Spacer y={1.5} />
        <button
          className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full"
          type="submit"
        >
          Добавить в корзину
        </button>
      </form>
    </div>
  );
};
export default PreExcursion;
