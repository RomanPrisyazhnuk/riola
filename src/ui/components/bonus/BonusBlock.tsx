import type { FC } from "react";
import Image from "next/image";
import StoreProvider from "@/ui/atoms/StoreProvider";
import { PanelTypes } from "@/store/slices/panelSlice";

const BonusBlock: FC = () => {
  return (
    <section className="relative rounded-lg  min-h-[344px] gap-6  overflow-hidden flex-wrap mt-6">
      <Image
        src={"/lines.png"}
        alt={"bg"}
        loading="lazy"
        width={350}
        height={63}
        className="absolute left-0 top-0 z-20 max-w-[350px] sm:max-w-[403px] md:max-w-[805px] hidden lg:inline-block"
      />
      <Image
        src={"/bonus.png"}
        alt={"bg"}
        loading="lazy"
        width={610}
        height={350}
        className="absolute right-0 z-20 h-[300px] sm:h-[350px]"
      />
      <div className="relative z-30 p-6 mt-[300px] sm:mt-0">
        <p className="text-[32px] sm:text-[48px] font-bold text-textColor">
          КАК СЭКОНОМИТЬ В ОТПУСКЕ
        </p>
        <div className="flex gap-2">
          <p className="text-[26px] sm:text-[32px] font-bold text-red-500">
            до 1000$
          </p>
          <p className="text-[20px] sm:text-[24px] text-textColor font-semibold rotate-[-10deg]">
            {` 100 000₽`}
          </p>
        </div>

        <p className="text-[20px] sm:text-[24px] text-textColor max-w-[578px] mb-6">
          Зарегистрируйтесь и получите гайд:  “43 приложения для экономии в
          отпуске”
        </p>
        <button className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto">
          Забрать
        </button>
      </div>
    </section>
  );
};
export default BonusBlock;
