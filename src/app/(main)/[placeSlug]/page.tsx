import { apiRoutes } from "@/app/api/config";
import { Excursion } from "@/entities/excursion";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
  title: "",
  description: "",
};

export default async function PlacePage({
  params,
}: {
  params: { placeSlug: string };
}) {
  let excursionsForLocation: Excursion[] = [];

  try {
    const res = await fetch(
      `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}${`?search_term=${params.placeSlug}&paginate=0&limit=30`}`,
      {
        cache: "force-cache",
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch excursionsForLocation");
    }
    const respData = await res.json();
    if (respData) excursionsForLocation = respData.data;
  } catch (err) {
    console.error(err);
  }

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="mt-6 mx-auto">
        {`Тут будет информация о локации со слагом ${params.placeSlug}`}
      </div>
      <ProductList products={excursionsForLocation} />
    </section>
  );
}
