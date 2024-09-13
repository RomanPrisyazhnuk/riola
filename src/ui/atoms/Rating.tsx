import type { FC } from "react";
import Image from "next/image";

interface RatingProps {
  rating: number;
}

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1 p-1 px-2 bg-white rounded-md">
      <Image
        src={"/icons/like.svg"}
        alt={"layers"}
        width={20}
        height={20}
        className="h-full object-contain object-center"
      />
      <span className="text-[14px] text-textColor">{`${rating}/5`}</span>
    </div>
  );
};
export default Rating;
