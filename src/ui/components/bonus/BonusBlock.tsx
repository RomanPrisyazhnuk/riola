import type { FC } from "react";
import Image from "next/image";
import { UserMenuContainer } from "../nav/components/UserMenu/UserMenuContainer";

const prosContent = [
  { image: "/icons/add.svg", text: "Бесплатная отмена и изменения заказа" },
  { image: "/icons/card.svg", text: "Оплата на сайте или наличными на месте" },
  { image: "/icons/clock.svg", text: "Поддержка на русском 24/7" },
];
const BonusBlock: FC = () => {
  return (
    <section className="relative rounded-lg  min-h-[344px] gap-6  overflow-hidden flex-wrap mt-6">
      <Image
        src={"/lines.png"}
        alt={"bg"}
        width={350}
        height={63}
        className="absolute left-0 top-0 z-20 max-w-[350px] sm:max-w-[403px] md:max-w-[805px] hidden lg:inline-block"
      />
      <Image
        src={"/bonus.png"}
        alt={"bg"}
        width={610}
        height={350}
        className="absolute right-0 z-20 h-[300px] sm:h-[350px]"
      />
      <div className="relative z-30 p-6 mt-[300px] sm:mt-0">
        <p className="text-[32px] sm:text-[48px] font-bold text-textColor">
          Войди и сэкономь{" "}
        </p>
        <p className="text-[20px] sm:text-[24px] text-textColor max-w-[578px] mb-6">
          Вы можете сэкономить от 10% на любую экскурсию, когда зарегистрируете
          аккаунт
        </p>
        <UserMenuContainer />
      </div>
    </section>
  );
};
export default BonusBlock;
