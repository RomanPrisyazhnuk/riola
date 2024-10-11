import { Place } from "@/entities/place/place";
import Image from "next/image";
import Link from "next/link";

export const Places = ({ places }: { places: Place[] }) => {
  return (
    <ul
      role="list"
      data-testid="PlacesList"
      className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 w-full"
    >
      {places.map((place) => (
        <div
          key={place.id}
          className="h-[230px] shadow-md shadow-cyan-100 rounded-md"
        >
          <div className="h-[118px] overflow-hidden relative rounded-t-md">
            <Image
              src={place.image.thumb}
              alt={place.name}
              fill
              loading="lazy"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col px-2">
            <p className="text-textColor font-semibold text-[20px]">
              {place.name}
            </p>
            <p className="text-textColor text-[16px]">{`${place.excursions_count} экскурсий`}</p>
            <Link className="" aria-label="homepage" href={`/${place.slug}`}>
              <button className="mt-1 w-full border-2 border-primary rounded-md px-4 py-2 text-primary hover:border-cyan-400">
                Перейти
              </button>
            </Link>
          </div>
        </div>
      ))}
    </ul>
  );
};
