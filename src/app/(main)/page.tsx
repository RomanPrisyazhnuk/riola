import { mockExcursions } from "@/entities/excursion";
import { mockPlaces } from "@/entities/place";
import ImageSlider from "@/ui/atoms/ImageSlider";
import BonusBlock from "@/ui/components/bonus/BonusBlock";
import { Places } from "@/ui/components/Places";
import { ProductList } from "@/ui/components/ProductList";
import ProsBlock from "@/ui/components/pros/ProsBlock";
import SearchTabs from "@/ui/components/SearchTabs";
import { apiRoutes } from "../api/config";

export const metadata = {
  title: "",
  description: "",
};

export default async function Page() {
  let products;

  try {
    const res = await fetch(
      `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}`,
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const respData = await res.json();
    console.log("products");
    // products = respData.data
    console.log(products);
    products = mockExcursions;
  } catch (error) {
    console.log(error);

    products = mockExcursions;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <section className="relative w-full ">
        <div className="absolute z-10 flex flex-col w-full h-full  p-3 md:p-12">
          <h1 className="text-[28px] sm:text-[32px] md:text-6xl left-6 top-25 z-10  text-white  p-2 group font-bold max-w-4xl">
            Бронируй лучшие экскурсии и транcферы
          </h1>
          <div className="h-full w-full flex items-end justify-center">
            <SearchTabs />
          </div>
        </div>
        <ImageSlider />
      </section>
      <section className="my-6">
        <ProsBlock />
      </section>
      <Places places={mockPlaces} />
      <h2 className="p-3 text-center text-textColor">Популярные</h2>
      <ProductList products={products} />
      <section className="my-6">
        <BonusBlock />
      </section>
    </div>
  );
}
