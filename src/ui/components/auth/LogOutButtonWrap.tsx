"use client";
import { useDispatch } from "react-redux";
import { FC, ReactNode } from "react";
import { clearUser } from "@/store/slices/userSlice";
import { deleteAuthCookies } from "@/lib/helpers/headers";
import { clearCart } from "@/entities/cartItem/cartSlice";

interface AuthButtonProps {
  children: ReactNode;
}

const LogOutButtonWrap: FC<AuthButtonProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(clearUser());
        dispatch(clearCart());
        deleteAuthCookies();
      }}
    >
      <>{children}</>
    </div>
  );
};

export default LogOutButtonWrap;
