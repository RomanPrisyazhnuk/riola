import type { FC } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";

interface MainSearchProps {}
export const locationsforSelect = [
  { key: "Патайя", label: "Патайя" },
  { key: "Вьетнам", label: "Вьетнам" },
  { key: "Пхукет", label: "Пхукет" },
  { key: "Стамбул", label: "Стамбул" },
  { key: "Бангкок", label: "Бангкок" },
  { key: "Каппадокия", label: "Каппадокия" },
];
const MainSearch: FC<MainSearchProps> = ({}) => {
  const selectArrow = (
    <Image
      src={"/icons/arrow.svg"}
      alt={"Arrow"}
      width={16}
      height={16}
      className="h-full object-contain object-center"
    />
  );
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
      <Select
        label="Что есть рядом"
        placeholder="Выберите место"
        labelPlacement="outside"
        className=""
        disableSelectorIconRotation
        startContent={
          <Image
            src={"/icons/location.svg"}
            alt={"Location"}
            width={24}
            height={24}
            className="h-full object-contain object-center"
          />
        }
        selectorIcon={selectArrow}
      >
        {locationsforSelect.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
      <button className="px-4 py-2 h-[40px] self-end min-w-fit text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto">
        Найти
      </button>
    </div>
  );
};
export default MainSearch;
