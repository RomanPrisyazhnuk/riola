import { Excursion } from "@/entities/excursion/excursion";
import { GalleryTypes } from "@/entities/image";
import { getPlaceData, getPlaceExcursions } from "@/entities/place/actions";
import { Place } from "@/entities/place/place";
import Gallery from "@/ui/atoms/Gallery";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
  title: "",
  description: "",
};
const images = [
  {
    large:
      "https://www.travelandleisure.com/thmb/pr08VO7qrNu8NtygEVXqDVaSyvU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg",
    thumb:
      "https://www.travelandleisure.com/thmb/pr08VO7qrNu8NtygEVXqDVaSyvU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/phuket-thailand-karst-formation-phuket0327-92bd3ce9266148dba74cba5e36c711e2.jpg",
    videoId: "_HeoxTNiJH8",
  },
  {
    large: "https://picsum.photos/id/1018/1000/600/",
    thumb: "https://picsum.photos/id/1018/250/150/",
  },
  {
    large: "https://picsum.photos/id/1015/1000/600/",
    thumb: "https://picsum.photos/id/1015/250/150/",
  },
  {
    large: "https://picsum.photos/id/1019/1000/600/",
    thumb: "https://picsum.photos/id/1019/250/150/",
  },
];
export default async function PlacePage({
  params,
}: {
  params: { placeSlug: string };
}) {
  let placeData: Place | null = null;
  let excursionsForLocation: Excursion[] = [];

  if (params.placeSlug) placeData = await getPlaceData(params.placeSlug);
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
            <Gallery images={images} type={GalleryTypes.Desktop} />
          </div>
          <div className="g-1 md:hidden">
            <Gallery images={images} type={GalleryTypes.Mobile} />
          </div>
          <div className="flex flex-col gap-4 g-1 w-full md:w-1/3"></div>
        </div>
      </div>
      <h2 className="text-textColor text-[24px] font-semibold py-4">
        Экскурсии
      </h2>
      <ProductList products={excursionsForLocation} />
    </section>
  );
}
