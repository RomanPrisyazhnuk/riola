import SearchBlock from "@/ui/components/SearchBlock";

export const metadata = {
  title: "Поиск",
  description: "Найти экскурсию",
};

export default async function SearchPage() {
  return (
    <section className="mx-auto max-w-7xl pb-16">
      <SearchBlock />
    </section>
  );
}
