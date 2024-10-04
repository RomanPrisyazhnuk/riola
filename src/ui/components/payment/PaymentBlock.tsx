"use client";
import type { FC } from "react";
import { useSearchParams } from "next/navigation";

interface PaymentBlockProps {}

const PaymentBlock: FC<PaymentBlockProps> = ({}) => {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const itemsAmount = searchParams.get("items");

  return (
    <div>
      <div>{price}</div>
      <div>{itemsAmount}</div>
    </div>
  );
};
export default PaymentBlock;
