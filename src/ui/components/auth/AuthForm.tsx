"use client";
import type { FC } from "react";
import { LoginForm } from "./LoginForm";
import { RegistrationForm } from "./RegistrationForm";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closePanel, openPanel, PanelTypes } from "@/store/slices/panelSlice";

interface AuthFormProps {
  activeTab: PanelTypes;
}

const AuthForm: FC<AuthFormProps> = ({ activeTab }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full">
      <div className="p-4 bg-cyan-100/50 flex items-center justify-between">
        <p>Авторизация</p>
        <Image
          src={"/icons/x-black.svg"}
          alt={"Close"}
          width={28}
          height={28}
          className="object-contain object-center cursor-pointer"
          onClick={() => dispatch(closePanel())}
        />
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-t-md w-full m-3">
        <button
          onClick={() => dispatch(openPanel({ type: PanelTypes.Register }))}
          className={`p-2 px-8 text-textColor font-medium w-1/2 ${activeTab === "registration" ? "rounded-t-md bg-white" : ""}`}
        >
          Регистрация
        </button>
        <button
          onClick={() => dispatch(openPanel({ type: PanelTypes.Login }))}
          className={`p-2 px-8 text-textColor font-medium w-1/2  ${activeTab === "login" ? "rounded-t-md bg-white" : ""}`}
        >
          Войти
        </button>
      </div>
      <div className="max-w-7xl mx-auto  bg-white w-full rounded-b-md sm:rounded-md sm:rounded-tl-none ">
        {/* Content */}
        {activeTab === "login" && (
          <div className="">
            <LoginForm />
          </div>
        )}

        {activeTab === "registration" && (
          <div className="">
            <RegistrationForm />
          </div>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
