"use client";
import type { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
import { isUserAuthorized } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";

const BonusBlock: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuthorized = useSelector(isUserAuthorized);
  const router = useRouter();

  return !isAuthorized ? (
    <section
      className="relative rounded-lg b min-h-[344px] gap-6 
    bg-gradient-to-t
    sm:bg-gradient-to-r from-[#6D67B2] to-[#4CA2CD] overflow-hidden flex-wrap mt-6"
    >
      {/* <Image
        src={"/lines.png"}
        alt={"bg"}
        loading="lazy"
        width={350}
        height={63}
        className="absolute left-0 top-0 z-20 max-w-[350px] sm:max-w-[403px] md:max-w-[805px] hidden lg:inline-block"
      /> */}
      {/* background: linear-gradient(90deg, #6D67B2 0%, #4CA2CD 100%); */}

      <Image
        src={"/bonus.webp"}
        alt={"bg"}
        loading="lazy"
        width={610}
        height={350}
        className="absolute right-0 z-20 h-[301px] sm:h-[352px]"
      />
      <div className="relative z-30 p-6 mt-[300px] sm:mt-0 text-white ">
        <div className="text-[32px] sm:text-[48px] font-bold sm:leading-[56px]">
          КАК СЭКОНОМИТЬ{" "}
          <div className="flex gap-2">
            ДО
            <p className="text-[32px] sm:text-[48px] font-bold text-yellow-500">
              1000$
            </p>
            <p
              className="mt-1 p-1 bg-yellow-500 rounded-md font-semibold  
          sm:mt-1 text-[20px] sm:px-2 sm: py-0 h-[38px] sm:h-[52px] sm:text-[32px] "
            >
              {`100 000₽`}
            </p>
          </div>
          В ОТПУСКЕ
        </div>

        <p className="text-[20px] sm:text-[24px] text-white max-w-[548px] mb-6">
          Зарегистрируйтесь и получите гайд: <br />
          “43 приложения для экономии в отпуске”
        </p>
        <button className="px-6 py-2 text-textColor bg-white rounded-md hover:bg-gray-200 w-full sm:w-auto">
          <div
            className="flex gap-2 justify-center"
            onClick={() => router.push('https://t.me/MILAizRIOLA_bot')}
          >
            Забрать 🎁
          </div>
        </button>
      </div>
    </section>
  ) : null;
};
export default BonusBlock;
