import { mockExcursions } from "@/entities/excursion";
import { mockPlaces } from "@/entities/place";
import ImageSlider from "@/ui/atoms/ImageSlider";
import { SearchBar } from "@/ui/components/nav/components/SearchBar";
import { Places } from "@/ui/components/Places";
import { ProductList } from "@/ui/components/ProductList";
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
    <section className="mx-auto max-w-7xl pb-16">
      <div className="relative w-full ">
        <div className="absolute z-10 flex flex-col justify-center items-center h-full w-full gap-y-7">
          <div className="rounded mx-2 bg-black/50">
			<h1 className="md:text-2xl left-6 top-20 z-10  text-white  p-2 group font-bold text-center">
			Поиск и бронирование экскурсий и транферов
			</h1>
		  </div>
		
		  {/* <div className="flex justify-center gap-2">
			<button className="h-12 items-center rounded-md bg-orange-500 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-neutral-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70">
				Экскурсии
			</button>
			<button className="h-12 items-center rounded-md bg-stone-300 px-6 py-3 text-base font-medium leading-6 text-white shadow hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:bg-neutral-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-70">
				Трансферы
			</button>

		  </div> */}
          <div className="right-1/2 bottom-1/2 w-2/3 flex ">
            <SearchBar />
          </div>
        </div>
        <ImageSlider />
      </div>
      <Places places={mockPlaces} />
      <h2 className="p-2 text-center">Популярные</h2>
      <ProductList products={products} />
    </section>
  );
}
