"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import { Excursion } from "@/entities/excursion/excursion";
import { apiRoutes } from "@/app/api/config";
import Price from "../atoms/Price";

interface popularExcursions {
  withounLabel?: boolean;
  placeholder?: string;
}
const MainSearch: FC<popularExcursions> = ({ withounLabel, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Excursion[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  const fetchData = async (query: string | null) => {
    try {
      const res = await fetch(
        `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}${query ? `?search_term=${query}&paginate=0&limit=12` : "?paginate=0&limit=12"}`,
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
      fetchData("");
    }
  }, [searchQuery]);

  const imageRoute = (
    <Image
      src={"/icons/routing.svg"}
      alt={"Search"}
      width={24}
      height={24}
      className="h-5 w-5"
    />
  );
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
        fetchData("");
      }}
    />
  );

  return (
    <div className="relative">
      {!withounLabel && (
        <label className="text-small text-textColor font-medium">
          Что есть рядом
        </label>
      )}

      <Input
        id="excursion"
        type="text"
        variant="bordered"
        placeholder={placeholder || "Поиск экскурсий"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setDropdownVisible(true)}
        className={`hidden md:block ${!withounLabel && "mt-[4px]"}`}
        endContent={imageSearch}
        startContent={imageRoute}
        aria-label="excursion"
      />
      <Input
        type="text"
        variant="bordered"
        placeholder="Поиск экскурсий"
        onClick={() => router.push("/search")}
        className="block md:hidden"
        endContent={imageSearch}
        startContent={imageRoute}
        aria-label="Поиск экскурсий"
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
                href={`/${item.location?.slug || "excursion"}/${item.slug}`}
                key={item.id}
                className="mb-4 flex shadow-md rounded-md shadow-cyan-100 hover:bg-cyan-100 p-4"
              >
                <Image
                  src={item.image?.thumb || "/b-2-520-820-90.webp"}
                  alt={item.name || "image"}
                  width={60}
                  height={60}
                  className="rounded-md max-w-[60px] max-h-[60px]"
                />
                <div className="ml-4 flex flex-col w-full justify-between">
                  <h5 className="font-semibold text-textColor">{item.name}</h5>
                  <p className="text-sm text-gray-500">
                    {`${item.location?.name ? item.location.name : "!!!"}${item.location?.parent ? `, ${item.location.parent.name}` : ""}`}
                  </p>
                  <p className="text-sm font-bold self-end ">
                    {`От: `}
                    {item.prices[0] ? (
                      <Price priceInUSD={item.prices[0].amount} />
                    ) : (
                      "!!!"
                    )}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MainSearch;
