import Link from "next/link";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import Image from "next/image";

import { Clock, Users, Info } from "lucide-react";
import { Excursion } from "@/entities/excursion";

export function ProductElement({
  product,
  loading,
  priority,
}: { product: Excursion } & { loading: "eager" | "lazy"; priority?: boolean }) {
  return (
    <li
      data-testid="ProductElement"
      className="relative rounded-md overflow-hidden shadow-md shadow-cyan-100"
    >
      <Link
        href={`/products/${product.slug}`}
        key={product.id}
        className="relative"
      >
        {product?.image && (
          <ProductImageWrapper
            loading={loading}
            src={product.image.thumb || "/pp-60-520-820-90.webp"}
            alt={product.name}
            width={300}
            height={260}
            sizes={"260px"}
            priority={priority}
          />
        )}
        <div className="flex gap-1 p-1 px-2 absolute top-2 left-2 bg-white rounded-md">
          <Image
            src={"/icons/layers.svg"}
            alt={"layers"}
            width={20}
            height={20}
            className="h-full object-contain object-center"
          />
          <span className="text-[14px] text-textColor">Групповая</span>
        </div>
        <div className="flex gap-1 p-1 px-2 absolute top-2 right-2 bg-white rounded-md">
          <Image
            src={"/icons/like.svg"}
            alt={"layers"}
            width={20}
            height={20}
            className="h-full object-contain object-center"
          />
          <span className="text-[14px] text-textColor">{`${product.rating}/5`}</span>
        </div>
        <div className="flex flex-col p-2 w-full">
          <p className="text-textColor font-semibold text-[20px]">
            {product.name}
          </p>
          <div className="flex items-center">
            <Image
              src={"/icons/location.svg"}
              alt={"layers"}
              width={20}
              height={20}
              className="h-full object-contain object-center"
            />
            <p className="text-textColor text-[16px]">Таиланд, Пхукет</p>
          </div>
          <div className="flex gap-2 items-center self-end font-semibold">
            <s className="text-textColor text-[16px]">От: $64</s>
            <p className="p-2 border-1 border-red-500 rounded-md text-red-500 text-[16px]">
              $64
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
