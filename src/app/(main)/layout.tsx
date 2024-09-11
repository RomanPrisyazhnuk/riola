import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import SidePanel from "@/ui/components/SidePanel";
import StoreProvider from "@/ui/atoms/StoreProvider";

export const metadata = {
  title: "Saleor Storefront example",
  description:
    "Starter pack for building performant e-commerce experiences with Saleor.",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100dvh-64px)] flex-col px-3">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
      <StoreProvider>
        <SidePanel />
      </StoreProvider>
    </div>
  );
}
