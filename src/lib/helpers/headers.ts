import Cookies from "js-cookie";

export const authHeadersKey = "token";
export const refreshHeadersKey = "refresh";
export const shouldExpireTokenKey = "should_expire";

export const isTokenInCookies = !!Cookies.get(authHeadersKey);

export const setAuthCookies = (accessToken: string): void => {
  const shouldExpireToken = Cookies.get(shouldExpireTokenKey);
  if (shouldExpireToken) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    Cookies.set(authHeadersKey, accessToken, {
      secure: true,
      expires: expirationDate,
    });
  } else {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    Cookies.set(authHeadersKey, accessToken, {
      secure: true,
      expires: expirationDate,
    });
  }
};

export const deleteAuthCookies = (): void => {
  Cookies.remove(authHeadersKey);
};
