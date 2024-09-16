import { apiRoutes } from "@/app/api/config";

export const getAvailablePlaces = async () => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursionLocations}`;
    const res = await fetch(
      url,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch places");
    }
    const respData = await res.json();

    return respData ? respData : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const getPlaceData = async (placeSlug: string) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.currentLocation}/${placeSlug}`;
    const res = await fetch(
      url,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch locationData");
    }
    const respData = await res.json();
    return respData ? respData.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getPlaceExcursions = async (
  name: string,
  paginate: number,
  limit: number,
) => {
  try {
    const res = await fetch(
      `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.excursions}${`?search_term=${name}&paginate=${paginate}&limit=${limit}`}`,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
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
