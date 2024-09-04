import { Logo } from "./Logo";
import { SearchBar } from "./nav/components/SearchBar";
import { Nav } from "./nav/Nav";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white z-50">
      <div className="mx-auto max-w-7xl px-1 py-2">
        <div className="flex justify-between gap-2 md:gap-8">
          <Logo />
          <SearchBar />
          <Nav />
        </div>
      </div>
    </header>
  );
}
