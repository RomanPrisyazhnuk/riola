import { apiRoutes } from "@/app/api/config";

export const getPopularExcursions = async (paginate: number, limit: number) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}?paginate=${paginate}&popular=1&limit=${limit}`;

    const res = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 180 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch excursionsForLocation");
    }
    const respData = await res.json();
    return respData ? respData.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getExcursionData = async (excursionSlug: string) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.currentExcursion}/${excursionSlug}`;
    const res = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 180 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch excursion");
    }
    const respData = await res.json();
    const excursionFinal = respData ? respData.data : null;
    if (excursionFinal && respData.silimar) {
      excursionFinal.similarExcursions = respData.silimar;
    }
    return excursionFinal;
  } catch (err) {
    console.error(err);
    return null;
  }
};
