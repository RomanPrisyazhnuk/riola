import { Transfer } from "@/entities/transfer/transfer";
import { TransferCard } from "./TransferCard";

export const TransferList = ({
  products,
}: {
  products: readonly Transfer[];
}) => {
  return (
    <ul
      role="list"
      data-testid="TransferList"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((product, index) => (
        <TransferCard
          key={product.id + product.name}
          product={product}
          priority={index < 2}
          loading={index < 3 ? "eager" : "lazy"}
        />
      ))}
    </ul>
  );
};
