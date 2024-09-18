import { getAvailableLocations } from "@/entities/location/actions";
import { LocationObj } from "@/entities/location/location";
import ImageSlider from "@/ui/atoms/ImageSlider";
import TransferSearch, {
  TransferSearchProps,
} from "@/ui/components/TransferSearch";

export const metadata = {
  title: "Трансферы",
  description: "",
};

export default async function TransferPage({
  params,
}: {
  params: { fromSlug: string; toSlug: string };
}) {
  const locations: LocationObj[] = (await getAvailableLocations()) || [];

  const locationFrom = locations.find((locationFrom) => {
    return locationFrom.slug === params.fromSlug;
  });

  const locationsTo: LocationObj[] = locationFrom?.routes || [];
  const locationTo = locationsTo.find((locationTo) => {
    return locationTo.slug === params.toSlug;
  });
  console.log("locationTo", locationTo);

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

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <div className="mt-6 mx-auto">
        <section className="relative w-full ">
          <div className="absolute z-10 flex flex-col w-full h-full  p-3 md:p-12">
            <h1 className="text-[28px] sm:text-[32px] md:text-[48px] left-6 top-25 z-10  text-white  p-2 group font-bold max-w-2xl">
              Такси & Трансферы из аэропорта
            </h1>
            <div className="h-full w-full flex items-end justify-center">
              <div className="max-w-7xl mx-auto p-4 shadow-lg bg-white w-full rounded-b-md sm:rounded-md  ">
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
      </div>
      <section className="my-6">
        <h2 className="text-textColor text-[24px] font-semibold pb-2">
          {`${locationFrom?.name} в ${locationTo?.name}`}
        </h2>
      </section>
      {/* <ProductList products={excursionsForLocation} /> */}
    </section>
  );
}
