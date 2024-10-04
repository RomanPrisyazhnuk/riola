import { apiRoutes } from "@/app/api/config";
import { fetchWithAuth, RequestMethod } from "@/lib/helpers/customFetch";
import { AddItemToCartData, RemoveItemFromCartData } from "./cartSlice";

export const getAuthUserCart = async () => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.cart}?currency=USD`;
    const respData = await fetchWithAuth({
      route: url,
      method: RequestMethod.GET,
    });
    if (respData) {
      console.log(respData);

      return respData;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const addCartItem = async (itemData: AddItemToCartData) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.cart}?currency=USD`;
    const respData = await fetchWithAuth({
      route: url,
      method: RequestMethod.POST,
      body: itemData,
    });
    if (respData) {
      console.log(respData);

      return respData;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateCartItem = async (itemData: AddItemToCartData) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.cart}?currency=USD`;
    const respData = await fetchWithAuth({
      route: url,
      method: RequestMethod.POST,
      body: itemData,
    });
    if (respData) {
      console.log(respData);

      return respData;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const removeCartItem = async (itemData: RemoveItemFromCartData) => {
  try {
    const url = `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.cart}/${itemData.product_id}?currency=USD`;
    const respData = await fetchWithAuth({
      route: url,
      method: RequestMethod.DELETE,
    });
    if (respData) {
      console.log(respData);

      return respData;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};
