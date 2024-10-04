import { getPopularExcursions } from "@/entities/excursion/actions";
import { Excursion } from "@/entities/excursion/excursion";
import { getAvailablePlaces } from "@/entities/place/actions";
import { Place } from "@/entities/place/place";
import ImageSlider from "@/ui/atoms/ImageSlider";
import StoreProvider from "@/ui/atoms/StoreProvider";
import BonusBlock from "@/ui/components/bonus/BonusBlock";
import { ExcursionList } from "@/ui/components/excursion/ExcursionList";
import { Places } from "@/ui/components/Places";
import ProsBlock from "@/ui/components/pros/ProsBlock";
import SearchTabs from "@/ui/components/SearchTabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riola Travel",
  description: "Откройте Азию с RIOLA – ваш отдых с комфортом и выгодой!",
};

export default async function Page() {
  let popularExcursions: Excursion[] = (await getPopularExcursions(0, 8)) || [];
  let availablePlaces: Place[] = (await getAvailablePlaces()) || [];

  return (
    <div className="mx-auto max-w-7xl">
      <section className="relative w-full ">
        <div className="absolute z-10 flex flex-col w-full h-full  p-3 md:p-12">
          <h1 className="text-[28px] sm:text-[32px] lg:text-[48px] left-6 top-25 z-10  text-white  p-2 group font-bold max-w-4xl">
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
              src: "/banner1.webp",
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
        <ExcursionList products={popularExcursions} />
      </section>
      <section className="my-6">
        <StoreProvider>
          <BonusBlock />
        </StoreProvider>
      </section>
    </div>
  );
}
