import { Excursion } from "@/entities/excursion";
import { ProductElement } from "./ProductElement";

export const ProductList = ({
  products,
}: {
  products: readonly Excursion[];
}) => {
  return (
    <ul
      role="list"
      data-testid="ProductList"
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((product, index) => (
        <ProductElement
          key={product.id + product.name}
          product={product}
          priority={index < 2}
          loading={index < 3 ? "eager" : "lazy"}
        />
      ))}
    </ul>
  );
};
