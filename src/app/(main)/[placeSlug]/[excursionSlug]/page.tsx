import { apiRoutes } from "@/app/api/config";
import { Excursion, ExcursionFull } from "@/entities/excursion";
import { GalleryTypes } from "@/entities/image";
import Gallery from "@/ui/atoms/Gallery";
import LocationFull from "@/ui/atoms/LocationFull";
import Rating from "@/ui/atoms/Rating";
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

export default async function ExcursionPage({
  params,
}: {
  params: { placeSlug: string; excursionSlug: string };
}) {
  let excursion: ExcursionFull | null = null;
  let similarExcursions: Excursion[] = [];
  try {
    const res = await fetch(
      `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.currentExcursion}/${params.excursionSlug}`,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch excursion");
    }
    const respData = await res.json();
    if (respData) {
      excursion = respData.data;
      similarExcursions = respData.silimar;
    }
  } catch (err) {
    console.error(err);
  }

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
            <Gallery images={excursion.images} type={GalleryTypes.Desctop} />
          </div>
          <div className="g-1 md:hidden">
            <Gallery images={excursion.images} type={GalleryTypes.Mobile} />
          </div>
          <div className="flex flex-col gap-4 g-1 w-full md:w-1/3">
            <div className="flex gap-2 w-full">
              {excursion.prices &&
                excursion.prices.map((price) => {
                  return (
                    <div
                      key={price.amount + price.title}
                      className="flex flex-col gap-2 w-1/2"
                    >
                      <p className="text-textColor text-[24px] sm:text-[39px]">{`$${price.amount}`}</p>
                      <p className="text-textColor text-[18px] sm:text-[20px]">
                        {price.title}
                      </p>
                    </div>
                  );
                })}
            </div>
            <p>{excursion.description || "!!!"}</p>
            <button className="px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-300 w-full sm:w-auto">
              Забронировать
            </button>
          </div>
        </div>

        {`Тут будет информация о экскурсии со слагом ${params.excursionSlug}`}
        <h2 className="text-textColor text-[24px] font-semibold py-4">
          Могут понравиться
        </h2>
        {similarExcursions && <ProductList products={similarExcursions} />}
      </div>
    </section>
  );
}
