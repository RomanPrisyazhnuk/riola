import Link from "next/link";
import Image from "next/image";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";
import { Excursion } from "@/entities/excursion/excursion";
import Rating from "@/ui/atoms/Rating";
import LocationFull from "@/ui/atoms/LocationFull";
import Price from "../../atoms/Price";

export function ExcursionCard({
  product,
  loading,
  priority,
}: { product: Excursion } & { loading: "eager" | "lazy"; priority?: boolean }) {
  return (
    <li
      data-testid="ExcursionCard"
      className="relative rounded-md overflow-hidden shadow-md shadow-cyan-100"
    >
      <Link
        href={`/${product.location?.slug ? product.location.slug : "excursion"}/${product.slug}`}
        key={product.id}
        className="relative flex flex-col h-full"
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
            loading="lazy"
            width={20}
            height={20}
            className="h-full object-contain object-center"
          />
          <span className="text-[14px] font-medium text-textColor">
            Групповая
          </span>
        </div>
        <div className="absolute top-2 right-2 bg-white rounded-md">
          <Rating rating={product.rating} />
        </div>
        <div className="flex flex-col p-2 w-full h-full justify-between">
          <div>
            <p className="text-textColor font-semibold text-[20px]">
              {product.name}
            </p>
            <LocationFull location={product.location} />
          </div>

          <div className="flex gap-2 items-center self-end justify-self-end	font-semibold">
            {product.prices &&
              product.prices[0] &&
              !!product.prices[0].old_amount && (
                <s className="font-medium text-textColor text-[16px]">
                  {`От: `}
                  <Price priceInUSD={product.prices[0].old_amount} />
                </s>
              )}
            {!!product.prices[0].old_amount ? (
              <p className="p-2 border-1 border-red-500 rounded-md text-red-500 text-[16px]">
                {product.prices && product.prices[0] ? (
                  <Price priceInUSD={product.prices[0].amount} />
                ) : (
                  "!!!"
                )}
              </p>
            ) : (
              <p className="font-medium text-textColor p-2 text-[16px]">
                {`От: `}
                <Price priceInUSD={product.prices[0].amount} />
              </p>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
