import { checkoutCartItem } from "@/entities/cartItem/actions";
import { PaymentData } from "@/entities/payment/payment";
import { PaymentDetails } from "@/ui/components/payments/PaymentDetails";

export const metadata = {
  title: "Оплата",
  description: "Оплата заказа",
};

export default async function SinglePaymentPage({
  params,
}: {
  params: { cartId: string };
}) {
  const checkoutData: PaymentData = await checkoutCartItem(params.cartId);

  return <PaymentDetails checkoutData={checkoutData} />;
}
