"use client";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { selectArrow } from "../atoms/selectArrow";
const currencies = ["USD", "BAT", "RUB"];

export const СurrencySelect = () => {
  const [activeCurrency, setActiveCurrency] = useState("USD");

  return (
    <div className="w-[82px] relative inline-block">
      <Select
        placeholder="Выберите место"
        variant="bordered"
        defaultSelectedKeys={[currencies[0]]}
        //@ts-ignore
        onSelectionChange={(item: { currentKey: string }) => {
          // onSelectFromChange(item.currentKey);
        }}
        className=""
        selectorIcon={selectArrow}
      >
        {currencies.map((item) => (
          <SelectItem key={item}>{item}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
