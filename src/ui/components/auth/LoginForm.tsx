"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { Input, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { apiRoutes } from "@/app/api/config";
import { setAuthCookies } from "@/lib/helpers/headers";
import { setUser } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { getAuthUserData } from "@/entities/user/actions";
import { User } from "@/entities/user/user";
import { closePanel } from "@/store/slices/panelSlice";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setErrors(["Необходимо ввести email и пароль"]);
      return;
    }

    try {
      const response = await fetch(
        `${apiRoutes.baseUrl}/${apiRoutes.auth}/${apiRoutes.login}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );
      if (!response.ok) {
        throw new Error("Неверный email или пароль");
      }
      const respData = await response.json();
      setAuthCookies(respData.token);
      const fetchUser = async () => {
        try {
          const user = await getAuthUserData();
          if (user) {
            //@ts-ignore
            dispatch(setUser(user.data as User));
            dispatch(closePanel());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUser();
      setErrors([]);
    } catch (error: any) {
      setErrors([error.message]);
    }
  };

  return (
    <div className="w-full max-w-lg p-3 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          variant="bordered"
          label="Логин"
          labelPlacement="outside"
          startContent={
            <Image
              src={"/icons/letter.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />
        <Spacer y={1.5} />
        <Input
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          variant="bordered"
          label="Пароль"
          labelPlacement="outside"
          startContent={
            <Image
              src={"/icons/key.svg"}
              alt={"Location"}
              width={24}
              height={24}
              className="h-full object-contain object-center"
            />
          }
        />
        <Spacer y={1.5} />
        <button
          className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full"
          type="submit"
        >
          Войти
        </button>
      </form>
      {errors.length > 0 && (
        <div className="mt-4">
          {errors.map((error, index) => (
            <span key={index}>{error}</span>
          ))}
        </div>
      )}
    </div>
  );
}
