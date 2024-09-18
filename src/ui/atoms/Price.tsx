"use client";
import type { FC } from "react";
import PriceText from "./PriceText";
import StoreProvider from "./StoreProvider";

interface PriceProps {
  priceInUSD: number;
}

const Price: FC<PriceProps> = ({ priceInUSD }) => {
  return (
    <StoreProvider>
      <PriceText priceInUSD={priceInUSD} />
    </StoreProvider>
  );
};
export default Price;
