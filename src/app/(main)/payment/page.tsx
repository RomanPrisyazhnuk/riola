import PaymentBlock from "@/ui/components/payment/PaymentBlock";
import { Suspense } from "react";

export const metadata = {
  title: "",
  description: "",
};

export default async function PaymentPage() {
  const data = { collection: { products: { edges: [] } } };
  if (!data.collection?.products) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <Suspense>
        <PaymentBlock />
      </Suspense>
    </section>
  );
}
