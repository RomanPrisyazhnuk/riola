import { apiRoutes } from "@/app/api/config";

export const getAvailableCurrencies = async () => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.currencies}`;
    const res = await fetch(
      url,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch currencies");
    }
    const respData = await res.json();

    return respData ? respData : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
