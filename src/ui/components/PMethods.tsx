import type { FC } from "react";
import Image from "next/image";

const footerPMethods = [
  { image: "payment-methods/visa.png", name: "Visa" },
  { image: "payment-methods/mastercard.png", name: "Mastercard" },
  { image: "payment-methods/american-express.png", name: "American express" },
  { image: "payment-methods/mir.png", name: "Mir" },
];

const PMethods: FC = () => {
  return (
    <div className="flex justify-center items-center gap-[16px]">
      {footerPMethods.map((item) => (
        <Image
          key={item.name}
          src={`/${item.image}`}
          alt={item.name}
          loading="lazy"
          title={item.name}
          width={38}
          height={24}
          className="h-full object-contain object-center"
        />
      ))}
    </div>
  );
};

export default PMethods;
