"use client";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { apiRoutes } from "@/app/api/config";

const bellIcon = (
  <Image
    src={"/icons/bell.svg"}
    alt={"Location"}
    width={24}
    height={24}
    className="h-full object-contain object-center"
  />
);

export default function SubscribeBlock() {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email) {
      setError("Пожалуйста, Введите свой email");
      return;
    }
    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный email");
      return;
    }

    setError(null);
    try {
      const response = await fetch(
        `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.subscribe}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );
      if (!response.ok) {
        throw new Error("Ошибка при подписке");
      }
      setIsVisible(false);
    } catch (error) {
      console.error("Ошибка:", error);
      setError("Ошибка при подписке");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative cursor-pointer w-[100vw] ml-[-12px] bg-cyan-500 mb-[-8px] p-3">
      {!isOpened ? (
        <div className="mx-auto max-w-7xl" onClick={() => setIsOpened(true)}>
          <div className="flex gap-1 justify-center items-center relative">
            {bellIcon}
            <span className="text-white text-[14px]">
              Подпишись на горящие предложения
            </span>
            <Image
              src={"/icons/x-white.svg"}
              alt={"Close"}
              width={28}
              height={28}
              className="absolute top-0 right-0 md:right-[12px] object-contain object-center"
              onClick={() => setIsVisible(false)}
            />
          </div>
        </div>
      ) : (
        <div className="relative mx-auto max-w-7xl w-full flex flex-col gap-3">
          <Image
            src={"/icons/x-white.svg"}
            alt={"Close"}
            width={28}
            height={28}
            className="self-end md:absolute top-[6px] right-[12px] object-contain object-center"
            onClick={() => setIsVisible(false)}
          />
          <div className="relative z-30 mx-auto max-w-[650px] w-full flex flex-col md:flex-row gap-3 justify-center items-center">
            <Input
              placeholder="Введите свой Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Введите свой Email"
            />
            <button
              className="h-[40px] flex gap-1 justify-center items-center px-6 py-2 text-white bg-white rounded-md hover:bg-gray-200 w-full md:w-auto"
              onClick={handleSubscribe}
            >
              <span className="text-textColor text-[14px]">Подпиcaться</span>
              {bellIcon}
            </button>
          </div>
          {error && (
            <span className="text-center mt-2 px-6 py-2 text-white">
              {error}
            </span>
          )}
          <Image
            src={"/subscribe-bg.png"}
            alt={"Background"}
            width={236}
            height={133}
            className="absolute top-[-12px] left-[-12px] md:h-[64px] object-contain object-center"
          />
        </div>
      )}
    </div>
  );
}
