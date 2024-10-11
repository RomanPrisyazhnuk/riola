"use client";
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
import { LocationObj } from "@/entities/location/location";
import { SelectArrow } from "../atoms/SelectArrow";
import { useRouter } from "next/navigation";
import { getAvailableLocations } from "@/entities/location/actions";
import { useSearchParams } from "next/navigation";
import Counter from "../atoms/Counter";

export interface TransferSearchProps {
  initialProps?: {
    locations: LocationObj[];
    locationsTo: LocationObj[];
    selectedLocationTo: LocationObj | null;
    selectedLocationFrom: LocationObj | null;
  };
}

const TransferSearch: FC<TransferSearchProps> = ({ initialProps }) => {
  const searchParams = useSearchParams();

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);

  const [locations, setLocations] = useState<LocationObj[]>(
    initialProps?.locations || [],
  );
  const [locationFromOptions, setlocationFromOptions] = useState<
    { key: string; label: string }[]
  >([]);
  const [selectedLocationFrom, setSelectedLocationFrom] =
    useState<LocationObj | null>(initialProps?.selectedLocationFrom || null);

  const [locationsTo, setLocationsTo] = useState<LocationObj[]>(
    initialProps?.locationsTo || [],
  );

  const [locationToOptions, setlocationToOptions] = useState<
    { key: string; label: string }[]
  >([]);
  const [selectedLocationTo, setSelectedLocationTo] =
    useState<LocationObj | null>(initialProps?.selectedLocationTo || null);

  const router = useRouter();

  const handleTransfer = () => {
    if (selectedLocationFrom && selectedLocationTo) {
      router.push(
        `/transfers/${selectedLocationFrom.slug}/${selectedLocationTo.slug}?adults=${adults}&children=${children}`,
      );
    }
  };

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
      const data = await getAvailableLocations();
      if (data) {
        setLocations(data);
      }
    };
    if (!initialProps) {
      fetchLocations();
    }
  }, [initialProps]);

  useEffect(() => {
    try {
      const adultsFromUrl = searchParams.get("adults");
      const childrenFromUrl = searchParams.get("children");

      adultsFromUrl && setAdults(Number(adultsFromUrl));
      childrenFromUrl && setChildren(Number(childrenFromUrl));
    } catch {
      console.log("Unavailable to parse passagers");
    }
  }, [searchParams]);

  useEffect(() => {
    setlocationFromOptions(prepareLocationObjsOptions(locations));
  }, [locations]);

  useEffect(() => {
    setlocationToOptions(prepareLocationObjsOptions(locationsTo));
  }, [locationsTo]);

  const onSelectFromChange = (selectedItemSlug: string) => {
    const location = locations.find(
      (location) => location.slug === selectedItemSlug,
    );
    if (location) {
      setSelectedLocationFrom(location);
      if (location.routes) {
        setLocationsTo(location.routes);
      }
    }
  };

  const onSelectToChange = (selectedItemSlug: string) => {
    const location = locationsTo.find(
      (location) => location.slug === selectedItemSlug,
    );
    if (location) {
      setSelectedLocationTo(location);
    }
  };

  const updateLabel = () => {
    return `${adults} взр, ${children} дет`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full justify-between">
      <Select
        label="Откуда"
        placeholder="Выберите место"
        labelPlacement="outside"
        variant="bordered"
        defaultSelectedKeys={
          initialProps?.selectedLocationFrom
            ? [initialProps.selectedLocationFrom.slug]
            : []
        }
        //@ts-ignore
        onSelectionChange={(item: { currentKey: string }) => {
          onSelectFromChange(item.currentKey);
        }}
        className="lg:max-w-[30%]"
        startContent={
          <Image
            src={"/icons/location.svg"}
            alt={"Location"}
            width={24}
            height={24}
            className="h-full object-contain object-center"
          />
        }
        selectorIcon={<SelectArrow />}
      >
        {locationFromOptions.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="Куда"
        variant="bordered"
        placeholder="Выберите место"
        defaultSelectedKeys={
          initialProps?.selectedLocationTo
            ? [initialProps.selectedLocationTo.slug]
            : []
        }
        labelPlacement="outside"
        isDisabled={!selectedLocationFrom}
        className="lg:max-w-[30%]"
        startContent={
          <Image
            src={"/icons/my-location.svg"}
            alt={"Location"}
            width={24}
            height={24}
            className="h-full object-contain object-center"
          />
        }
        //@ts-ignore
        onSelectionChange={(item: { currentKey: string }) => {
          onSelectToChange(item.currentKey);
        }}
        selectorIcon={<SelectArrow />}
      >
        {locationToOptions.map((item) => (
          <SelectItem key={item.key}>{item.label}</SelectItem>
        ))}
      </Select>
      <div className="mt-[-5px] lg:mt-0 min-w-[160px]">
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
              <Counter
                title="Взрослые"
                description="12 лет и старше"
                setCounter={setAdults}
                value={adults}
              />
            </DropdownItem>
            {/* Дети */}
            <DropdownItem key="children">
              <Counter
                title="Дети"
                description="От 2 до 11 лет"
                setCounter={setChildren}
                value={children}
              />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <Button
        isDisabled={!selectedLocationTo || !selectedLocationFrom}
        className="px-4 py-2 h-[40px] self-end min-w-fit text-white bg-primary rounded-md hover:bg-cyan-400 w-full sm:w-auto"
        onClick={() => handleTransfer()}
      >
        Узнать цены
      </Button>
    </div>
  );
};
export default TransferSearch;
