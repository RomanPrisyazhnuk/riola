"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center font-bold min-w-[100px] sm:min-w-[105px]">
      <Link aria-label="homepage" href="/">
        <Image
          src={"/logo.svg"}
          alt={"RiolaLogo"}
          loading="lazy"
          width={105}
          height={38}
          className="h-full object-contain object-center"
        />
      </Link>
    </div>
  );
};
