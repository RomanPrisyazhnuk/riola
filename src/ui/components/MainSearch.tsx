"use client";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { Excursion } from "@/entities/excursion";
import { apiRoutes } from "@/app/api/config";
import { useRouter } from "next/navigation";

interface popularExcursions {
  popularExcursions: Excursion[];
}
const MainSearch: FC<popularExcursions> = ({ popularExcursions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Excursion[]>(popularExcursions);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  const fetchData = async (query: string | null) => {
    try {
      const res = await fetch(
        `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}${query ? `?search_term=${query}&paginate=0&limit=12` : ""}`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const respData = await res.json();
      setResults(respData.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (searchQuery && searchQuery.length >= 2) {
      fetchData(searchQuery);
      setDropdownVisible(true);
    } else {
      setResults(popularExcursions);
    }
  }, [searchQuery]);
  console.log("results", results);
  
  const imageRoute = <Image
  src={"/icons/routing.svg"}
  alt={"Search"}
  width={24}
  height={24}
  className="h-5 w-5"
/>
  const imageSearch = !isDropdownVisible ? (
    <Image
      src={"/icons/search.svg"}
      alt={"Search"}
      width={24}
      height={24}
      className="h-5 w-5"
    />
  ) : (
    <Image
      src={"/icons/x-blue.svg"}
      alt={"Search"}
      width={30}
      height={30}
      className="h-5 w-5 cursor-pointer"
      onClick={() => {
        setDropdownVisible(false);
        setSearchQuery("");
        setResults(popularExcursions);
      }}
    />
  )

  return (
    <div className="relative">
      <label className="text-small text-textColor">Что есть рядом</label>

      <Input
        type="text"
        variant="bordered"
        placeholder="Поиск экскурсий"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setDropdownVisible(true)}
        className="hidden md:block mt-[4px]"
        endContent={imageSearch}
        startContent={imageRoute}
      />
      <Input
        type="text"
        variant="bordered"
        placeholder="Поиск экскурсий"
        onClick={() => router.push("/search")}
        className="block md:hidden"
        endContent={imageSearch}
        startContent={imageRoute}
      />
      {/* Выпадающий список результатов */}
      {isDropdownVisible && (
        <div className="absolute w-full bg-white border border-neutral-300 mt-2 rounded-md shadow-lg z-10 p-4">
          {(!searchQuery || searchQuery.length < 2) && (
            <h4 className="font-bold mb-2 text-textColor">Популярное</h4>
          )}

          <div className=" relative z-50  grid lg:grid-cols-2 gap-1">
            {/* Левая колонка */}

            {results.map((item) => (
              <Link
                href={`/${item.location.slug}/${item.slug}`}
                key={item.id}
                className="mb-4 flex shadow-md rounded-md shadow-cyan-100 hover:bg-cyan-100 p-4"
              >
                <Image
                  src={item.image?.thumb || "/b-2-520-820-90.webp"}
                  alt={item.name || "image"}
                  width={60}
                  height={60}
                  objectFit="cover"
                  className="rounded-md"
                />
                <div className="ml-4 flex flex-col w-full justify-between">
                  <h5 className="font-semibold text-textColor">{item.name}</h5>
                  <p className="text-sm text-gray-500">
                    {`${item.location?.name ? item.location.name : ""}${item.location.parent ? `, ${item.location.parent.name}` : ""}`}
                  </p>
                  <p className="text-sm font-bold self-end ">
                    {`От: ${item.prices && item.prices[0] ? "$" + item.prices[0].amount : "!!!"}`}
                  </p>{" "}
                </div>
              </Link>
            ))}
            {/* Правая колонка */}
            {/* <div>
              <h4 className="font-bold mb-2">Рекомендуем</h4>
              {results.map((item) => (
                <div key={item.id} className="mb-4 flex items-center">
                  <Image
                    src={item.image?.thumb || "/b-2-520-820-90.webp"}
                    alt={item.name || "image"}
                    width={60}
                    height={60}
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h5 className="font-semibold">{item.name}</h5>
                    <p className="text-sm text-gray-500">
                      {item.location?.name ? item.location.name : ""},{" "}
                      {item.location.parent.name}
                    </p>
                    <p className="text-sm font-bold">
                      От:
                      {`От: ${item.prices && item.prices[0] ? item.prices[0].amount : "!!!"}`}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      )}

    </div>
  );
};
export default MainSearch;
