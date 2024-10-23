import type { FC } from "react";
import Image from "next/image";

const TransferDetails: FC = () => {
  const transferDetailsData = [
    {
      iconUrl: "/icons/train.svg",
      title: "Вы указываете маршрут и выбираете автомобиль",
      text: "Можно заказать авто любой вместимости — от Micro на двоих до 19-местного автобуса.",
    },
    {
      iconUrl: "/icons/card-bordered.svg",
      title: "Заполняете форму заказа и выбираете, как оплатить",
      text: "Указываете дату и время встречи, выбираете способ оплаты. После оформления заказа на почту придет подтверждение поездки — ваучер.",
    },
    {
      iconUrl: "/icons/hello.svg",
      title: "Водитель встречает вас с табличкой в аэропорту",
      text: "В нужное время водитель будет ждать вас на месте. Он проводит до автомобиля и отвезет в отель.",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      {transferDetailsData.map((details) => (
        <div
          key={details.title}
          className="flex flex-col gap-2 basis-1/3 g-1 rounded-md shadow-md shadow-cyan-100 p-4"
        >
          <div className="flex items-center gap-2 ">
            <Image
              src={details.iconUrl}
              alt={details.title}
              width={40}
              height={40}
              className="h-full object-contain object-center"
            />
            <p className="text-textColor font-bold">{details.title}</p>
          </div>
          <p className="text-textColor font-medium">{details.text}</p>
        </div>
      ))}
    </div>
  );
};
export default TransferDetails;
