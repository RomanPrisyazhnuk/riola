import { apiRoutes } from "@/app/api/config";
import { fetchWithAuth, RequestMethod } from "@/lib/helpers/customFetch";

export const getAuthUserData = async () => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.auth}/${apiRoutes.user}`;
    const respData = await fetchWithAuth({
      route: url,
      method: RequestMethod.GET,
    });
    if (respData) {
      return respData;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
