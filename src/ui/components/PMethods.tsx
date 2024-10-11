import type { FC } from "react";
import Image from "next/image";

const footerPMethods = [
  { image: "mir-pay-100-168-90.webp", name: "Mir" },
  { image: "yandex-pay-100-168-90.webp", name: "Yandex Pay" },
  { image: "tinkoff-pay-100-168-90.webp", name: "Tinkoff Pay" },
  { image: "sbp-pay-100-168-90.webp", name: "SBP" },
  { image: "visa-100-168-90.webp", name: "Visa" },
  { image: "master-card-100-168-90.webp", name: "Master Card" },
  { image: "amex-100-168-90.webp", name: "American express" },
  { image: "kaspi-100-168-90.webp", name: "Kaspi" },
  { image: "payme-100-168-90.webp", name: "Payme" },
];

const PMethods: FC = () => {
  return (
    <div className="flex flex-wrap h-fit gap-[16px]">
      {footerPMethods.map((item) => (
        <Image
          key={item.name}
          src={`/payment-methods/${item.image}`}
          alt={item.name}
          loading="lazy"
          title={item.name}
          width={60}
          height={55}
          className="h-full object-contain object-center"
        />
      ))}
    </div>
  );
};

export default PMethods;
