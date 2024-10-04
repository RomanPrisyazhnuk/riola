import { apiRoutes } from "@/app/api/config";
import { defaultHeaders } from "@/lib/helpers/customFetch";

export const getTransfers = async (from: string, to: string) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.transfers}?from=${from}&to=${to}&adults=2&children=3`;
    console.log(url);

    const res = await fetch(
      url,
      {
        headers: defaultHeaders,
      },
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch excursionsForLocation");
    }
    const respData = await res.json();
    console.log("respData");
    console.log(respData);
    return respData ? respData.transfers : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
