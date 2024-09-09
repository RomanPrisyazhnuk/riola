import SearchBlock from "@/ui/components/SearchBlock";

export const metadata = {
  title: "",
  description: "",
};

export default async function PlacePage() {
  const data = { collection: { products: { edges: [] } } };
  if (!data.collection?.products) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl pb-16">
      <SearchBlock />
    </section>
  );
}
