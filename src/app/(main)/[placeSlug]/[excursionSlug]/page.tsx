import { mockExcursions } from "@/entities/excursion";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
  title: "",
  description: "",
};

export default async function ExcursionPage({
  params,
}: {
  params: { placeSlug: string; excursionSlug: string };
}) {
  const data = { collection: { products: { edges: [] } } };
  if (!data.collection?.products) {
    return null;
  }

  const products = mockExcursions;

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="mt-6 mx-auto">
        {`Тут будет информация о экскурсии со слагом ${params.excursionSlug}`}
      </div>
    </section>
  );
}
