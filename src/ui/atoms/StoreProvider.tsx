"use client";
import { Provider } from "react-redux";
import store from "@/store/store"; // Импортируйте ваш store
import { type ReactNode } from "react";

export default function StoreProvider(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}
