import { apiRoutes } from "@/app/api/config";

export const getAvailableLocations = async () => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.transferRoutes}`;
    const res = await fetch(
      url,
      // {
      //   cache: "force-cache",
      //   next: { revalidate: 180 },
      // },
    );
    if (!res.ok) {
      throw new Error("Failed to fetch locations");
    }
    const respData = await res.json();

    return respData?.data ? respData.data : null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
