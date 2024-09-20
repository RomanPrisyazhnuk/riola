import StoreProvider from "@/ui/atoms/StoreProvider";
import UserData from "@/ui/components/dashboard/UserData";

export const metadata = {
  title: "",
  description: "",
};

export default async function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl pb-16">
      <section className="relative w-full ">
        <h1 className="p-2 group font-bold max-w-4xl">Личный кабинет</h1>
      </section>
      <StoreProvider>
        <UserData />
      </StoreProvider>
    </div>
  );
}
