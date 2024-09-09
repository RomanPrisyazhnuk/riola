import { mockExcursions } from "@/entities/excursion";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
  title: "",
  description: "",
};

export default async function PlacePage() {
  const data = { collection: { products: { edges: [] } } };
  if (!data.collection?.products) {
    return null;
  }

  const products = mockExcursions;

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <ProductList products={products} />
    </section>
  );
}
