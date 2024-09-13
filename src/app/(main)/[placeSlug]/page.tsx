import { apiRoutes } from "@/app/api/config";
import { Excursion } from "@/entities/excursion";
import { GalleryTypes } from "@/entities/image";
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
  let excursionsForLocation: Excursion[] = [];

  try {
    const res = await fetch(
      `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}${`?search_term=${params.placeSlug}&paginate=0&limit=30`}`,
      {
        cache: "force-cache",
        next: { revalidate: 180 },
      },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch excursionsForLocation");
    }
    const respData = await res.json();
    if (respData) excursionsForLocation = respData.data;
  } catch (err) {
    console.error(err);
  }

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="mt-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-2">
          <div className="g-1 hidden md:block w-full">
            <Gallery images={images} type={GalleryTypes.Desktop} />
          </div>
          <div className="g-1 md:hidden">
            <Gallery images={images} type={GalleryTypes.Mobile} />
          </div>
          <div className="flex flex-col gap-4 g-1 w-full md:w-1/3"></div>
        </div>
        {`Тут будет информация о локации со слагом ${params.placeSlug}`}
      </div>
      <ProductList products={excursionsForLocation} />
    </section>
  );
}
