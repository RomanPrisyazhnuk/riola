"use client";
import { useDispatch } from "react-redux";
import { FC, ReactNode } from "react";
import { setUser } from "@/store/slices/userSlice";
import { deleteAuthCookies } from "@/lib/helpers/headers";

interface AuthButtonProps {
  children: ReactNode;
}

const LogOutButtonWrap: FC<AuthButtonProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setUser(null));
        deleteAuthCookies();
      }}
    >
      <>{children}</>
    </div>
  );
};

export default LogOutButtonWrap;
