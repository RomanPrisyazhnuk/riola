"use client";
import { User } from "@/entities/user/user";
import { setUser } from "@/store/slices/userSlice";
// import { IUser } from "@/entities/user/types";
// import { setUser } from "@/entities/user/userSlice";
// import { ApiRoutes } from "@/lib/api/config";
// import { fetchWithAuth, RequestMethod } from "@/lib/helpers/customFetch";
import { isTokenInCookies, setAuthCookies } from "@/lib/helpers/headers";
import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthUserData } from "@/entities/user/actions";

const AuthHandler: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getAuthUserData();
        if (user) {
          //@ts-ignore
          dispatch(setUser(user.data as User));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (isTokenInCookies) {
      fetchUser();
    }
  }, [dispatch]);

  return null;
};
export default AuthHandler;
