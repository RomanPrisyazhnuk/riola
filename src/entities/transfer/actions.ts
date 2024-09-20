import { apiRoutes } from "@/app/api/config";

export const getTransfers = async (
  from: string,
  to: string,
  paginate: number,
  limit: number,
) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.transfers}?from=${from}&to=${to}&paginate=${paginate}&popular=1&limit=${limit}`;
    console.log(url);

    const res = await fetch(
      url,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch excursionsForLocation");
    }
    const respData = await res.json();
    return respData ? respData : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
