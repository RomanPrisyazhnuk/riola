import { authHeadersKey } from "./headers";
import Cookies from "js-cookie";

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

interface CustomFetchOptions {
  route: string;
  method: RequestMethod;
  body?: any;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}
export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export async function fetchWithAuth<T>({
  route,
  method,
  body,
  params,
  headers = {},
}: CustomFetchOptions): Promise<T> {
  const url = new URL(route);

  if (params) {
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value),
    );
  }

  const defaultHeadersWithAuth = {
    ...defaultHeaders,
    Authorization: `Bearer ${Cookies.get(authHeadersKey)}`,
    ...headers,
  };

  try {
    const response = await fetch(url.toString(), {
      method,
      headers: defaultHeadersWithAuth,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
