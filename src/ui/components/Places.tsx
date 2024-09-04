import { apiRoutes } from "@/app/api/config";
import { Place } from "@/entities/place";
import Image from "next/image";
import Link from "next/link";

export const Places = async ({ places }: { places: Place[] }) => {
  try {
    const res = await fetch(
      `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursionLocations}`,
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch places");
    }

    const respData = await res.json();
    console.log("Places");
    // products = respData.data
    console.log(respData);
  } catch (error) {
    console.log(error);
  }
  return (
    <ul
      role="list"
      data-testid="ProductList"
      className="flex flex-wrap justify-between w-full gap-2"
    >
      {places.map((place) => (
        <div
          key={place.id}
          className="h-[230px] grow shadow-md shadow-cyan-100 rounded-md"
        >
          <div className="h-[118px] overflow-hidden relative rounded-t-md">
            <Image
              src={place.image.thumb}
              alt={place.title}
              fill
              className=""
            />
          </div>
          <div className="flex flex-col px-2">
            <p className="text-textColor font-semibold text-[20px]">
              {place.title}
            </p>
            <p className="text-textColor text-[16px]">{`${place.excursionsCount} экскурсий`}</p>
            <Link className="" aria-label="homepage" href={`/${place.slug}`}>
              <button className="mt-1 w-full border-2 border-cyan-500 rounded-md px-4 py-2 text-cyan-500 hover:border-cyan-400 ">
                Перейти
              </button>
            </Link>
          </div>
        </div>
      ))}
    </ul>
  );
};
