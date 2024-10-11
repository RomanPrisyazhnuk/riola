import FooterMenu from "./FooterMenu";
import { Logo } from "./Logo";
import PMethods from "./PMethods";
import SocialLinks from "./SocialLinks";

export function Footer() {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col pb-[150px]">
        <div className="flex  w-full border-b border-b-cyan-100/50 p-3">
          <Logo />
        </div>
        <div className="border-b border-b-cyan-100/50 p-3 text-textColor flex flex-col gap-2">
          <h3 className="font-bold">Контакты:</h3>
          <p>Телефон: +66 64 696 8947</p>
          <p>E-mail: info@riolatravel.com</p>
          <div className=" text-textColor flex flex-col  gap-2">
            <h3 className="font-bold">О компании:</h3>
            <FooterMenu />
          </div>
        </div>
        <div className="flex h-fit border-b border-b-cyan-100/50 p-3">
          <PMethods />
        </div>
        <div className="p-3">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
