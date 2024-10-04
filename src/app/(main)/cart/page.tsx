import Cart from "@/ui/components/cart/Cart";
import StoreProvider from "@/ui/atoms/StoreProvider";

export const metadata = {
  title: "Корзина",
  description: "Корзина пользователя",
};

export default async function CartPage() {
  return (
    <section className="mx-auto max-w-7xl pb-16">
      <StoreProvider>
        <Cart />
      </StoreProvider>
    </section>
  );
}
