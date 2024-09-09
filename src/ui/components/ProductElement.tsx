import Link from "next/link";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import Image from "next/image";
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
        href={`/${product.location.slug}/${product.slug}`}
        key={product.id}
        className="relative"
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
        <div className="flex flex-col p-2 w-full justify-between">
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
            <p className="text-textColor text-[16px]">{`${product.location.name}${product.location.parent ? `, ${product.location.parent.name}` : ""}`}</p>
          </div>
          <div className="flex gap-2 items-center self-end font-semibold">
            {product.prices && product.prices[0] && (
              <s className="text-textColor text-[16px]">{`От: $${product.prices[0].old_amount}`}</s>
            )}
            <p className="p-2 border-1 border-red-500 rounded-md text-red-500 text-[16px]">
              {product.prices && product.prices[0]
                ? `$${product.prices[0].amount}`
                : "!!!"}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
