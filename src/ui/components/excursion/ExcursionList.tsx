import { Excursion } from "@/entities/excursion/excursion";
import { ExcursionCard } from "./ExcursionCard";

export const ExcursionList = ({
  products,
}: {
  products: readonly Excursion[];
}) => {
  return (
    <ul
      role="list"
      data-testid="ExcursionList"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((product, index) => (
        <ExcursionCard
          key={product.id + product.name}
          product={product}
          priority={index < 2}
          loading={index < 3 ? "eager" : "lazy"}
        />
      ))}
    </ul>
  );
};
