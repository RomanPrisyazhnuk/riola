"use client";
import { useState, FormEvent, ChangeEvent } from "react";
import { Input, Spacer } from "@nextui-org/react";
import Image from "next/image";
import { apiRoutes } from "@/app/api/config";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);

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
          },
          body: JSON.stringify({ email, password }),
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка при входе");
      }
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
