"use client";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { Transfer } from "@/entities/transfer/transfer";

interface PreTransferProps {
  data: Transfer;
}
const PreTransfer: FC<PreTransferProps> = ({ data }) => {
  const dispatch = useDispatch();
  return <div className="w-full">Трансфер</div>;
};
export default PreTransfer;
