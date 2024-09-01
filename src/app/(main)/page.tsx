import { mockExcursions } from "@/entities/excursion";
import { mockPlaces } from "@/entities/place";
import ImageSlider from "@/ui/atoms/ImageSlider";
import BonusBlock from "@/ui/components/bonus/BonusBlock";
import { Places } from "@/ui/components/Places";
import { ProductList } from "@/ui/components/ProductList";
import ProsBlock from "@/ui/components/pros/ProsBlock";
import { apiRoutes } from "../api/config";

export const metadata = {
  title: "",
  description: "",
};

export default async function Page() {
  let products;

  try {
    const res = await fetch(`${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}`, {
      cache: 'force-cache',
    });
	
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const respData = await res.json();
	console.log('products');
	// products = respData.data
	console.log(products);
	products = mockExcursions;

  } catch (error) {
	console.log(error);

    products = mockExcursions;
  }

  return (
    <section className="mx-auto max-w-7xl">
      <div className="relative w-full ">
        <div className="absolute z-10 flex flex-col w-full gap-y-7  p-6">
          <h1 className="sm:text-6xl left-6 top-20 z-10  text-white  p-2 group font-bold max-w-4xl">
            Бронируй лучшие экскурсии и транcферы
          </h1>
        </div>
        <ImageSlider />
      </div>
      <div className="my-6">
        <ProsBlock />
      </div>
      <Places places={mockPlaces} />
      <h2 className="p-3 text-center text-textColor">Популярные</h2>
      <ProductList products={products} />
      <div className="my-6">
        <BonusBlock />
      </div>
    </section>
  );
}
