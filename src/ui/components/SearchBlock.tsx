"use client";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { apiRoutes } from "@/app/api/config";
import { ProductList } from "@/ui/components/ProductList";
import { mockExcursions } from "@/entities/excursion";

export default function SearchBlock() {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState(mockExcursions);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!searchValue || searchValue.length < 2) return;

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}?search_term=${searchValue}`,
          { cache: "force-cache" },
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const respData = await res.json();
        console.log(respData);

        setProducts(respData.data);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchValue]);

  return (
    <>
      <div className="fixed left-0 top-[64px] w-[100vw] bg-cyan-500 p-3 z-50 ">
        <Input
          placeholder="Введите название или город"
          autoFocus={true}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mx-auto md:max-w-[600px]"
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
