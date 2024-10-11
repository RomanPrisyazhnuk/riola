import { Excursion } from "@/entities/excursion/excursion";
import { GalleryTypes } from "@/entities/image";
import { getPlaceData, getPlaceExcursions } from "@/entities/place/actions";
import { Place } from "@/entities/place/place";
import Gallery from "@/ui/atoms/Gallery";
import { ExcursionList } from "@/ui/components/excursion/ExcursionList";

export const metadata = {
  title: "Направление",
  description: "Популярные направления",
};

export default async function PlacePage({
  params,
}: {
  params: { placeSlug: string };
}) {
  let placeData: Place | null = null;
  let excursionsForLocation: Excursion[] = [];

  if (params.placeSlug) placeData = await getPlaceData(params.placeSlug);
  console.log(placeData);

  if (placeData)
    excursionsForLocation = await getPlaceExcursions(placeData.name, 0, 16);

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="mt-6 mx-auto">
        <h1 className="text-textColor font-semibold text-[24px] sm:text-[39px]">
          {placeData?.name || "!!!"}
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="g-1 hidden md:block w-full">
            {/* @ts-ignore */}
            <Gallery images={placeData?.images || [placeData?.image]} type={GalleryTypes.Desktop} />
          </div>
          <div className="g-1 md:hidden">
            {/* @ts-ignore */}
            <Gallery images={placeData?.images || [placeData?.image]} type={GalleryTypes.Mobile} />
          </div>
          <div className="flex flex-col gap-4 g-1 w-full md:w-1/3">
          <p
        dangerouslySetInnerHTML={{
          __html: placeData?.description || "!!!",
        }}
      />
          </div>
        </div>
      </div>
      <h2 className="text-textColor text-[24px] font-semibold py-4">
        Экскурсии
      </h2>
      <ExcursionList products={excursionsForLocation} />
    </section>
  );
}
