"use client";
import { clearUser, fetchUser } from "@/store/slices/userSlice";
import { isTokenInCookies } from "@/lib/helpers/headers";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { clearCart } from "@/entities/cartItem/cartSlice";

const AuthHandler: FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Типизируем диспетчер

  useEffect(() => {
    if (isTokenInCookies) {
      // убедитесь, что isTokenInCookies вызывается
      dispatch(fetchUser());
    } else {
      dispatch(clearUser());
      dispatch(clearCart());
    }
  }, [dispatch]);

  return null;
};
export default AuthHandler;
