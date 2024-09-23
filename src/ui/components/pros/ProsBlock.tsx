import type { FC } from "react";
import Image from "next/image";

const prosContent = [
  { image: "/icons/add.svg", text: "Бесплатная отмена и изменения заказа" },
  { image: "/icons/card.svg", text: "Оплата на сайте или наличными на месте" },
  { image: "/icons/clock.svg", text: "Поддержка на русском 24/7" },
];
const ProsBlock: FC = () => {
  return (
    <section className="relative rounded-lg flex items-center justify-center min-h-36 gap-6 bg-cyan-100/50 overflow-hidden flex-wrap	p-6">
      <Image
        src={"/prosBg1.png"}
        alt={"bg"}
        width={740}
        height={63}
        className="absolute z-10 left-0 top-0 max-w-[350px] sm:max-w-[403px] md:max-w-[805px]"
      />
      <Image
        src={"/prosBg2.webp"}
        alt={"bg"}
        width={366}
        height={486}
        className="absolute right-0 top-0"
      />
      {prosContent.map((item) => (
        <div
          key={item.text}
          className="flex flex-col md:flex-row items-center gap-3 relative z-10"
        >
          <Image
            src={item.image}
            alt={item.text}
            width={56}
            height={56}
            className="h-full object-contain object-center"
          />
          <p className="max-w-60 text-center text-textColor">{item.text}</p>
        </div>
      ))}
    </section>
  );
};
export default ProsBlock;
