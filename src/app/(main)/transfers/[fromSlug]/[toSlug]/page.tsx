import { getAvailableLocations } from "@/entities/location/actions";
import { LocationObj } from "@/entities/location/location";
import { getTransfers } from "@/entities/transfer/actions";
import { Transfer } from "@/entities/transfer/transfer";
import ImageSlider from "@/ui/atoms/ImageSlider";
import StoreProvider from "@/ui/atoms/StoreProvider";
import ProsBlock from "@/ui/components/pros/ProsBlock";
import { TransferList } from "@/ui/components/transfer/TransferList";
import TransferDetails from "@/ui/components/TransferDetails";
import TransferSearch, {
  TransferSearchProps,
} from "@/ui/components/TransferSearch";

export const metadata = {
  title: "Трансферы",
  description: "Поиск трансферов",
};

export default async function TransferPage({
  params,
}: {
  params: { fromSlug: string; toSlug: string };
}) {
  const locations: LocationObj[] = (await getAvailableLocations()) || [];
  const transfers: Transfer[] =
    (await getTransfers(params.fromSlug, params.toSlug)) || [];

  const locationFrom = locations.find((locationFrom) => {
    return locationFrom.slug === params.fromSlug;
  });

  const locationsTo: LocationObj[] = locationFrom?.routes || [];
  const locationTo = locationsTo.find((locationTo) => {
    return locationTo.slug === params.toSlug;
  });

  const prepareDataForSearch = (): TransferSearchProps => {
    const dataForSearch: TransferSearchProps = {
      initialProps: {
        locations: locations || [],
        locationsTo: locationsTo || [],
        selectedLocationTo: locationTo || null,
        selectedLocationFrom: locationFrom || null,
      },
    };
    return dataForSearch;
  };
  console.log(transfers);
  
  return (
    <div className="mx-auto max-w-7xl pb-16">
      <section className="relative w-full ">
        <div className="absolute z-10 flex flex-col w-full h-full  p-3 md:p-12">
          <h1 className="text-[28px] sm:text-[32px] md:text-[48px] left-6 top-25 z-10  text-white  p-2 group font-bold max-w-2xl">
            Такси & Трансферы из аэропорта
          </h1>
          <div className="h-full w-full flex items-end justify-center">
            <div className="max-w-7xl mx-auto p-4 shadow-lg bg-white w-full rounded-md sm:rounded-md  ">
              {locations.length > 0 && (
                <TransferSearch
                  initialProps={prepareDataForSearch().initialProps}
                />
              )}
            </div>
          </div>
        </div>
        <ImageSlider images={[{ src: "/bannerTransfers.png" }]} />
      </section>
      <section className="my-6">
        <ProsBlock />
      </section>

      <section className="my-6">
        <h2 className="text-textColor text-[24px] font-semibold">
          {`${locationFrom?.name} в ${locationTo?.name}`}
        </h2>
      </section>
      <StoreProvider>
        <TransferList products={transfers} />
      </StoreProvider>

      <section className="my-6">
        <TransferDetails />
      </section>
    </div>
  );
}
