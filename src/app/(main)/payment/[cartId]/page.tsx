import { checkoutCartItem } from "@/entities/cartItem/actions";
import PaymentBlock from "@/ui/components/payment/PaymentBlock";
import { Suspense } from "react";

export const metadata = {
  title: "Оплата",
  description: "Оплата заказа",
};

export default async function SinglePaymentPage({
  params,
}: {
  params: { cartId: string };
}) {
  const checkoutData = await checkoutCartItem(params.cartId);

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <Suspense>ТУТ БУДУТ ДАННЫЕ ОПЛАТ</Suspense>
    </section>
  );
}
