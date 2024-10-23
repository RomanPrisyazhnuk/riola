"use client";

import Image from "next/image";
import Price from "@/ui/atoms/Price";
import { PaymentData } from "@/entities/payment/payment";

export function PaymentDetails({
  checkoutData,
}: {
  checkoutData: PaymentData;
}) {
  return (
    <section className="mx-auto max-w-7xl pb-16 flex flex-col gap-2 ">
      <h2 className="text-textColor text-[24px] font-semibold">Оплата</h2>
      <div
        className="flex rounded-md flex-col gap-3 p-2 bg-gradient-to-t text-white
    from-[#5EAD0B] to-[#1A6C00]"
      >
        <div className="w-full flex justify-between">
          <p>Сумма к оплате:</p>
          <p>Услуги:</p>
        </div>
        <div className="w-full flex justify-between font-bold">
          <Price priceInUSD={checkoutData.amount} />
          <p>{checkoutData.item_count}</p>
        </div>
      </div>
      <h2 className="text-textColor text-[18px] sm:text-[24px] font-semibold">
        Выберите удобный способ оплаты:
      </h2>
      <div className="flex flex-col gap-3 items-center">
        {checkoutData.methods.map((method) => {
          if (method.icons) method.images = method.icons;
          return (
            <div key={method.type}>
              <p className="font-medium text-center font-medium text-textColor pb-2">
                {method.title}
              </p>
              <div className="flex gap-3 flex-wrap items-center justify-between">
                {method.images &&
                  method.images.map((image) => (
                    <a
                      href={method.url}
                      target="_blank"
                      key={image + method.title}
                    >
                      <Image
                        src={image}
                        alt="payment method"
                        width={100}
                        height={66}
                        className="h-full object-contain object-center"
                      />
                    </a>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
