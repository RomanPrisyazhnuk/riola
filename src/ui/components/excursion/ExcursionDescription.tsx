"use client";
import { ExcursionFull } from "@/entities/excursion/excursion";
import { PriceOption } from "@/entities/price";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
// import { isUserAuthorized } from "@/store/slices/userSlice";
import Price from "@/ui/atoms/Price";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ExcursionDescriptionProps {
  excursion: ExcursionFull;
}

const ExcursionDescription: FC<ExcursionDescriptionProps> = ({ excursion }) => {
  const dispatch = useDispatch();
  // const isAuthorized = useSelector(isUserAuthorized);

  const handleBook = () => {
    // if (isAuthorized) {
    dispatch(openPanel({ type: PanelTypes.PreExcursion, data: excursion }));
    // } else {
    //   dispatch(openPanel({ type: PanelTypes.Login }));
    // }
  };
  return (
    <>
      <div className="flex gap-2 w-full ">
        {excursion.prices &&
          excursion.prices.slice(0, 2).map((price: PriceOption) => {
            return (
              <div
                key={price.amount + price.title}
                className="flex flex-col gap-2 w-1/2 items-center md:items-start"
              >
                <p className="text-textColor font-bold text-[24px] sm:text-[39px]">
                  <Price priceInUSD={price.amount} />
                </p>
                <p className="text-textColor text-[18px] sm:text-[20px]">
                  {price.title}
                </p>
              </div>
            );
          })}
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: excursion.description || "!!!",
        }}
      />
      <button
        className="px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-300 w-full sm:w-auto"
        onClick={() => handleBook()}
      >
        Забронировать
      </button>
    </>
  );
};
export default ExcursionDescription;
