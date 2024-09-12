"use client";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { apiRoutes } from "@/app/api/config";
import { ProductList } from "@/ui/components/ProductList";
import { Excursion, mockExcursions } from "@/entities/excursion";
import Image from "next/image";

export default function SearchBlock() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState<Excursion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchProducts = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}${query ? `?search_term=${query}&paginate=0&limit=12` : "?paginate=0&popular=1&limit=8"}`,
      );

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const respData = await res.json();

      setProducts(respData.data);
    } catch (err) {
      setError("Ошибка при загрузке данных");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchValue || searchValue.length < 2) return;
    fetchProducts(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetchProducts("");
  }, []);

  const imageRoute = (
    <Image
      src={"/icons/routing.svg"}
      alt={"Search"}
      width={24}
      height={24}
      className="h-5 w-5"
    />
  );
  const imageSearch = !searchValue ? (
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
        setSearchValue("");
        fetchProducts("");
      }}
    />
  );
  return (
    <>
      <div className="fixed left-0 top-[64px] w-[100vw] bg-cyan-500 p-3 z-50 ">
        <Input
          placeholder="Введите название или город"
          autoFocus={true}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mx-auto md:max-w-[600px]"
          endContent={imageSearch}
          startContent={imageRoute}
        />
      </div>
      <div className="mt-8">
        {loading ? (
          <div className="text-center">Загрузка...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
}
