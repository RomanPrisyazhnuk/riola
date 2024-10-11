import { ExcursionFull } from "@/entities/excursion/excursion";
import { getExcursionData } from "@/entities/excursion/actions";
import { GalleryTypes } from "@/entities/image";
import Gallery from "@/ui/atoms/Gallery";
import LocationFull from "@/ui/atoms/LocationFull";
import Rating from "@/ui/atoms/Rating";
import ExcursionAccordion from "@/ui/components/excursion/ExcursionAccordion";
import ExcursionDescription from "@/ui/components/excursion/ExcursionDescription";
import StoreProvider from "@/ui/atoms/StoreProvider";
import { ExcursionList } from "@/ui/components/excursion/ExcursionList";

export const metadata = {
  title: "",
  description: "",
};

export default async function ExcursionPage({
  params,
}: {
  params: { placeSlug: string; excursionSlug: string };
}) {
  let excursion: ExcursionFull | null = await getExcursionData(
    params.excursionSlug,
  );

  if (!excursion?.name) {
    return null;
  }
  
  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="mt-6 mx-auto">
        <h1 className="text-textColor font-semibold text-[24px] sm:text-[39px]">
          {excursion.name}
        </h1>
        <div className="flex items-center justify-between py-2">
          <LocationFull location={excursion.location} />
          <Rating rating={excursion.rating} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="g-1 hidden md:block">
            <Gallery images={excursion.images} type={GalleryTypes.Desktop} />
          </div>
          <div className="g-1 md:hidden">
            <Gallery images={excursion.images} type={GalleryTypes.Mobile} />
          </div>
          <div className="flex flex-col gap-4 g-1 w-full md:w-1/3">
            <StoreProvider>
              <ExcursionDescription excursion={excursion} />
            </StoreProvider>
          </div>
        </div>
        <div className="text-textColor text-[18px] font-semibold py-4">
          <ExcursionAccordion excursion={excursion} />
        </div>
        <h2 className="text-textColor text-[24px] font-semibold py-4">
          Могут понравиться
        </h2>
        {excursion.similarExcursions && (
          <ExcursionList products={excursion.similarExcursions} />
        )}
      </div>
    </section>
  );
}
