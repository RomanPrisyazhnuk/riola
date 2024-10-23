import "./globals.css";
import { Montserrat } from "@next/font/google";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";
import { NextUIProvider } from "@nextui-org/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Saleor Storefront example",
  description:
    "Starter pack for building performant e-commerce experiences with Saleor.",
  metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
    ? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
    : undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" className="min-h-dvh">
      <body className={`${montserrat.className} min-h-dvh`}>
        <NextUIProvider>{children}</NextUIProvider>

        <DraftModeNotification />
      </body>
    </html>
  );
}
