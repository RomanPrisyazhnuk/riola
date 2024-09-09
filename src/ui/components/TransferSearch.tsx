"use-client";
import { FC, useEffect, useState } from "react";
import {
  Select,
  SelectItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { mockLocationObjs, LocationObj } from "@/entities/location";
import { apiRoutes } from "@/app/api/config";
import { selectArrow } from "../atoms/selectArrow";

interface TransferSearchProps {}
export const locationsforSelect = [
  { key: "Патайя", label: "Патайя" },
  { key: "Вьетнам", label: "Вьетнам" },
  { key: "Пхукет", label: "Пхукет" },
  { key: "Стамбул", label: "Стамбул" },
  { key: "Бангкок", label: "Бангкок" },
  { key: "Каппадокия", label: "Каппадокия" },
];
const TransferSearch: FC<TransferSearchProps> = ({}) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);

  const [locations, setLocations] = useState<LocationObj[]>([]);
  const [locationFromOptions, setlocationFromOptions] = useState<
    { key: string; label: string }[]
  >([]);
  const [selectedLocationFrom, setSelectedLocationFrom] =
    useState<LocationObj | null>(null);
  const [locationToOptions, setlocationToOptions] = useState<
    { key: string; label: string }[]
  >([]);
  const [selectedLocationTo, setSelectedLocationTo] =
    useState<LocationObj | null>(null);

  const prepareLocationObjsOptions = (LocationObjs: LocationObj[]) => {
    return LocationObjs.map((item) => {
      const option = { key: "", label: "" };
      option.key = item.slug;
      option.label = item.name;
      if (item.parent?.name) option.label += `, ${item.parent.name}`;
      return option;
    });
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          `${apiRoutes.baseUrl}/${apiRoutes.public}/${apiRoutes.transferRoutes}`,
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        if (data?.data) {
          setLocations(data.data);
        }
        // console.log(data);
        // setLocations(mockLocationObjs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    setlocationFromOptions(prepareLocationObjsOptions(locations));
  }, [locations]);

  const onSelectFromChange = (selectedItemSlug: string) => {
    const location = locations.find(
      (location) => location.slug === selectedItemSlug,
    );
    if (location) {
      setSelectedLocationFrom(location);
      if (location.routes) {
        setlocationToOptions(prepareLocationObjsOptions(location.routes));
      }
    }
  };

  const updateLabel = () => {
    return `${adults} взр, ${children} дет`;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
      <Select
        label="Откуда"
        placeholder="Выберите место"
        labelPlacement="outside"
        variant="bordered"
        //@ts-ignore
        onSelectionChange={(item: { currentKey: string }) => {
          onSelectFromChange(item.currentKey);
        }}
        className=""
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
        {locationFromOptions.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="Куда"
        variant="bordered"
        placeholder="Выберите место"
        labelPlacement="outside"
        isDisabled={!selectedLocationFrom}
        className=""
        startContent={
          <Image
            src={"/icons/my-location.svg"}
            alt={"Location"}
            width={24}
            height={24}
            className="h-full object-contain object-center"
          />
        }
        selectorIcon={selectArrow}
      >
        {locationToOptions.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
      <div className="mt-[-5px] md:mt-0 min-w-[160px]">
        <label className="text-small">Пассажиры</label>
        <Dropdown closeOnSelect={false} disableAnimation>
          <DropdownTrigger>
            <Button className="w-full bg-white border-2 border-grey-200 mt-1">
              <div className="flex items-center w-full">
                <Image
                  src={"/icons/group.svg"}
                  alt={"Group"}
                  width={24}
                  height={24}
                  className="mr-2 h-full object-contain object-center"
                />
                {updateLabel()}
                <div className="absolute inset-y-0 right-3 flex  pointer-events-none">
                  <Image
                    src={"/icons/arrow.svg"}
                    alt={"Arrow"}
                    width={16}
                    height={16}
                    className="h-full object-contain object-center"
                  />
                </div>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu className="w-full">
            {/* Взрослые */}
            <DropdownItem key="adults" className="w-full">
              <div className="flex justify-between items-center w-full min-w-[65vw] md:min-w-[160px]">
                <div className="flex flex-col ">
                  <p>Взрослые</p>
                  <p>12 лет и старше</p>
                </div>
                <div className="flex items-center justify-between min-w-[107px]">
                  <button
                    className="bg-gray-200 rounded-md w-8 h-8 flex justify-center items-center text-xl text-blue-500"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                  >
                    <span>-</span>
                  </button>
                  <p className="mx-4 text-lg font-semibold">{adults}</p>
                  <button
                    className="bg-cyan-500 rounded-md w-8 h-8 flex justify-center items-center text-xl text-white"
                    onClick={() => setAdults(adults + 1)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </DropdownItem>

            {/* Дети */}
            <DropdownItem key="children">
              <div className="flex justify-between items-center gap-8">
                <div className="flex flex-col ">
                  <p>Дети</p>
                  <p>От 2 до 11 лет</p>
                </div>
                <div className="flex items-center justify-between min-w-[107px]">
                  <button
                    className="bg-gray-200 rounded-md w-8 h-8 flex justify-center items-center text-xl text-blue-500"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    <span>-</span>
                  </button>
                  <p className="mx-4 text-lg font-semibold">{children}</p>
                  <button
                    className="bg-cyan-500 rounded-md w-8 h-8 flex justify-center items-center text-xl text-white"
                    onClick={() => setChildren(children + 1)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <button className="px-4 py-2 h-[40px] self-end min-w-fit text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto">
        Узнать цены
      </button>
    </div>
  );
};
export default TransferSearch;
