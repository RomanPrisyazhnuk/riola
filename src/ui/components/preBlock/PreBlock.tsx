"use client";
import type { FC } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closePanel, PanelTypes } from "@/store/slices/panelSlice";
import { Excursion } from "@/entities/excursion/excursion";
import PreExcursion from "./PreExcursion";
import PreTransfer from "./PreTransfer";
import { Transfer } from "@/entities/transfer/transfer";

interface PreBlockProps {
  panelData: {
    type: PanelTypes;
    data?: Excursion | Transfer;
  };
}
const PreBlock: FC<PreBlockProps> = ({ panelData }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="p-4 bg-cyan-100/50 flex items-center justify-between">
        <p>Детали</p>
        <Image
          src={"/icons/x-black.svg"}
          alt={"Close"}
          width={28}
          height={28}
          className="object-contain object-center cursor-pointer"
          onClick={() => dispatch(closePanel())}
        />
      </div>
      <div>
        {panelData.type === PanelTypes.PreExcursion ? (
          <PreExcursion data={panelData.data as Excursion} />
        ) : (
          <PreTransfer data={panelData.data as Transfer} />
        )}
      </div>
    </div>
  );
};
export default PreBlock;
