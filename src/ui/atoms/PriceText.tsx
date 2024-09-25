"use client";
import type { FC } from "react";
import { useSelector } from "react-redux";
import { getCurrentCurrency } from "@/store/slices/currencySlice";
import { Currency } from "@/entities/currency/currency";

interface PriceProps {
  priceInUSD: number;
}

const PriceText: FC<PriceProps> = ({ priceInUSD }) => {
  const currentCurrency: Currency = useSelector(getCurrentCurrency);

  return (
    <>{`${(priceInUSD * currentCurrency.rate).toFixed(0)}${currentCurrency.symbol}`}</>
  );
};
export default PriceText;
