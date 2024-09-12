import { Logo } from "./Logo";
import MainSearch from "./MainSearch";
import { Nav } from "./nav/Nav";
import SubscribeBlock from "./SubscribeBlock";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white z-50 min-h-[68px]">
      <div className="mx-auto max-w-7xl px-1 py-2 ">
        <div className="flex justify-between gap-2 md:gap-8 min-h-[52px]">
          <Logo />
          <div       className="group relative my-2 flex w-full items-center justify-items-center text-sm hidden md:block"
>
<MainSearch withounLabel={true} placeholder="Поиск и бронирование экскурсий и трансферов"/>

          </div>

          <Nav />
        </div>
      </div>
      <SubscribeBlock />
    </header>
  );
}
