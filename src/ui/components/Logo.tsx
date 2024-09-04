"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center font-bold min-w-[100px] sm:min-w-[154px]">
      <Link aria-label="homepage" href="/">
        <Image
          src={"/riolatravel-gol2-92-270-90.webp"}
          alt={"RiolaLogo"}
          width={154}
          height={30}
          className="h-full object-contain object-center"
        />
      </Link>
    </div>
  );
};
