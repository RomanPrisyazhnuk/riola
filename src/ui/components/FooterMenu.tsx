import type { FC } from "react";
import Link from "next/link";

const footerMenuItems = [
  { name: "Политика конфиденциальности", link: "/privacy-policy" },
  { name: "Договор Оферты", link: "/dogovor-oferty" },
];

const FooterMenu: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      {footerMenuItems.map((item) => (
        <Link key={item.name} href={item.link} className="text-textColor">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterMenu;
