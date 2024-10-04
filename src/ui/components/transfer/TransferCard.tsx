"use client"
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import { Transfer } from "@/entities/transfer/transfer";
import Price from "../../atoms/Price";
import Image from "next/image";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";

export function TransferCard({
  product,
  loading,
  priority,
}: { product: Transfer } & { loading: "eager" | "lazy"; priority?: boolean }) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <li
      data-testid="TransferCard"
      className="relative rounded-md overflow-hidden shadow-md shadow-cyan-100 flex flex-col"
    >
      <ProductImageWrapper
        loading={loading}
        src={product.image?.thumb || "/b-2-520-820-90.webp"}
        alt={product.name}
        width={300}
        height={260}
        sizes={"260px"}
        priority={priority}
      />
      <div className="flex flex-col p-2 w-full h-full justify-between gap-3">
        <div>
          <p className="text-textColor font-semibold text-[20px]">
            {product.name}
          </p>
        </div>
        <div className="flex w-full h-full justify-between gap-3">
          <p className="flex items-center w-1/2 gap-3">
            <Image
              src={"/icons/suitcase.svg"}
              alt={"layers"}
              loading="lazy"
              width={24}
              height={24}
            />
            <p>{product.max_baggage}</p>
          </p>
          <p className="flex items-center w-1/2 gap-3">
            <Image
              src={"/icons/group.svg"}
              alt={"layers"}
              loading="lazy"
              width={24}
              height={24}
            />
            <p>{product.max_pax}</p>
          </p>
        </div>
        <div className="flex gap-2 items-center self-end justify-self-end	font-semibold">
          {product.price && product.price.old_amount && (
            <s className="text-textColor text-[16px]">
              {`От: `}
              <Price priceInUSD={product.price.old_amount} />
            </s>
          )}
          <p className="p-2 border-1 border-red-500 rounded-md text-red-500 text-[16px]">
            {product.price ? (
              <Price priceInUSD={product.price.amount} />
            ) : (
              "!!!"
            )}
          </p>
        </div>
        <button
          className=" px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full"
          onClick={()=>{
            dispatch(openPanel({ type: PanelTypes.PreTransfer, data: product }))
          }}
          >
          Выбрать
        </button>
      </div>
    </li>
  );
}
