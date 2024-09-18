"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { SelectArrow } from "../atoms/SelectArrow";
import { useEffect, useState } from "react";
import { Currency } from "@/entities/currency/currency";
import { getAvailableCurrencies } from "@/entities/currency/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCurrency, setCurrency } from "@/store/slices/currencySlice";

export const СurrencySelect = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const currentCurrency = useSelector(getCurrentCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrencies = async () => {
      const currencies = await getAvailableCurrencies();
      setCurrencies(currencies || []);
    };
    getCurrencies();
  }, []);

  return (
    <div className="w-[82px] relative inline-block">
      <Select
        variant="bordered"
        defaultSelectedKeys={[currentCurrency.id]}
        //@ts-ignore
        onSelectionChange={(item: { currentKey: string }) => {
          const currencyFull = currencies.find(
            (currency) => currency.id === item.currentKey,
          );
          currencyFull && dispatch(setCurrency(currencyFull));
        }}
        className=""
        selectorIcon={<SelectArrow />}
      >
        {currencies.map((currency: Currency) => (
          <SelectItem key={currency.id}>{currency.id}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
