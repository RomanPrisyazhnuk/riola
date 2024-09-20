"use client";
import { useSelector } from "react-redux";

import type { FC } from "react";
import { getUserData } from "@/store/slices/userSlice";

interface UserDataProps {}

const UserData: FC<UserDataProps> = ({}) => {
  const userData = useSelector(getUserData);

  if (!userData) return <div>Пользователь не авторизован</div>;

  return <div>{userData.name || userData.email}</div>;
};
export default UserData;
