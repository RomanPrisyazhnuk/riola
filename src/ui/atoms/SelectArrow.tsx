import Image from "next/image";

export const SelectArrow = () => (
  <Image
    src={"/icons/arrow.svg"}
    alt={"Arrow"}
    width={16}
    height={16}
    className="h-full object-contain object-center"
  />
);
