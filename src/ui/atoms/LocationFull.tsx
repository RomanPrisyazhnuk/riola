import { LocationObj } from "@/entities/location/location";
import type { FC } from "react";
import Image from "next/image";

interface LocationFullProps {
  location: LocationObj;
}

const LocationFull: FC<LocationFullProps> = ({ location }) => {
  return (
    <div className="flex items-center">
      <Image
        src={"/icons/location.svg"}
        alt={"layers"}
        width={20}
        height={20}
        className="h-full object-contain object-center"
      />
      <p className="text-textColor font-medium text-[16px]">{`${location?.name || "!!!"}${location?.parent ? `, ${location.parent.name}` : ""}`}</p>
    </div>
  );
};
export default LocationFull;
