"use client";
import Image from "next/image";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";

export const CartNavItem = () => {
  const dispatch = useDispatch();

  // const lineCount = checkout ? checkout.lines.reduce((result, line) => result + line.quantity, 0) : 0;
  const lineCount = 0;
  return (
    <div
      className="min-w-fit cursor-pointer"
      data-testid="CartNavItem"
      onClick={() => dispatch(openPanel({ type: PanelTypes.Cart }))}
    >
      <Image
        src="/icons/bag.svg"
        width={24}
        height={24}
        aria-hidden="true"
        alt="Cart Icon"
      />
      {lineCount > 0 ? (
        <div
          className={clsx(
            "absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white",
            lineCount > 9 ? "w-[3ch]" : "w-[2ch]",
          )}
        >
          {lineCount}{" "}
          <span className="sr-only">
            item{lineCount > 1 ? "s" : ""} in cart, view bag
          </span>
        </div>
      ) : (
        <span className="sr-only">0 items in cart</span>
      )}
    </div>
  );
};
