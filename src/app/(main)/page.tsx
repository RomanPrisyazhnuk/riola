import { getPopularExcursions } from "@/entities/excursion/actions";
import { Excursion } from "@/entities/excursion/excursion";
import { getAvailablePlaces } from "@/entities/place/actions";
import { mockPlaces, Place } from "@/entities/place/place";
import ImageSlider from "@/ui/atoms/ImageSlider";
import BonusBlock from "@/ui/components/bonus/BonusBlock";
import { Places } from "@/ui/components/Places";
import { ProductList } from "@/ui/components/ProductList";
import ProsBlock from "@/ui/components/pros/ProsBlock";
import SearchTabs from "@/ui/components/SearchTabs";

export const metadata = {
  title: "",
  description: "",
};

export default async function Page() {
  let popularExcursions: Excursion[] = (await getPopularExcursions(0, 8)) || [];
  let availablePlaces: Place[] = (await getAvailablePlaces()) || [];
  console.log(availablePlaces);

  return (
    <div className="mx-auto max-w-7xl">
      <section className="relative w-full ">
        <div className="absolute z-10 flex flex-col w-full h-full  p-3 md:p-12">
          <h1 className="text-[28px] sm:text-[32px] md:text-[48px] left-6 top-25 z-10  text-white  p-2 group font-bold max-w-4xl">
            Откройте Азию с RIOLA – ваш отдых с комфортом и выгодой!
          </h1>
          <div className="h-full w-full flex items-end justify-center">
            <SearchTabs popularExcursions={popularExcursions} />
          </div>
        </div>
        <ImageSlider
          images={[
            {
              src: "/beach.webp",
            },
            {
              src: "/banner1.png",
            },
          ]}
        />
      </section>
      <section className="my-6">
        <h2 className="text-textColor text-[24px] font-semibold pb-2">
          Выберите направление
        </h2>
        <Places places={availablePlaces} />
      </section>
      <ProsBlock />
      <section className="my-6">
        <h2 className="text-textColor text-[24px] font-semibold pb-2">
          Популярные
        </h2>
        <ProductList products={popularExcursions} />
      </section>
      <section className="my-6">
        <BonusBlock />
      </section>
    </div>
  );
}
