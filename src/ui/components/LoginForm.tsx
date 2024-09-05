"use client";
import { useState, FormEvent } from "react";
import { Input, Spacer } from "@nextui-org/react";

export function LoginForm() {
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      setErrors(["Необходимо ввести email и пароль"]);
      return;
    }

    try {
      // const { data } = await getServerAuthClient().signIn({ email, password }, { cache: "no-store" });

      // if (data.tokenCreate.errors.length > 0) {
      //   setErrors(data.tokenCreate.errors.map((error) => error.message));
      // }

      setErrors([]); // Очистка ошибок при успешной авторизации
    } catch (error: any) {
      setErrors([error.message]);
    }
  };

  return (
    <div className="mx-auto mt-16 w-full max-w-lg p-3 shadow-md shadow-cyan-100 rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input
          type="email"
          variant="bordered"
          label="Email"
          labelPlacement="outside"
        />
        <Spacer y={1.5} />
        <Input
          type="password"
          variant="bordered"
          label="Пароль"
          labelPlacement="outside"
        />
        <Spacer y={1.5} />
        <button
          className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto self-end"
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
