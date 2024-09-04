import { mockExcursions } from "@/entities/excursion";
import { mockPlaces } from "@/entities/place";
import ImageSlider from "@/ui/atoms/ImageSlider";
import { SearchBar } from "@/ui/components/nav/components/SearchBar";
import { Places } from "@/ui/components/Places";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
  title: "",
  description: "",
};

export default async function Page() {
  const data = { collection: { products: { edges: [] } } };
  if (!data.collection?.products) {
    return null;
  }

  const products = mockExcursions;

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="relative w-full ">
        <div className="absolute z-10 flex flex-col justify-center justify-center items-center h-full w-full gap-y-7">
          <h1 className="md:text-2xl left-6 top-20 z-10 rounded-xl mx-1 bg-[#111927] text-white p-2 group">
            Поиск и бронирование экскурсий
          </h1>
          <div className=" right-1/2 bottom-1/2 my-15 w-1/2 flex ">
            <SearchBar />
          </div>
        </div>
        <ImageSlider />
      </div>
      <h2> Направления </h2>
      <Places places={mockPlaces} />
      <h2> Популярные экскурсии </h2>
      <ProductList products={products} />
    </section>
  );
}
