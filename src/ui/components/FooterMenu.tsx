
import type { FC } from 'react';
import Link from "next/link";

const footerMenuItems = [
    {name: 'Политика конфиденциальности', link: '/privacy-policy'},
    {name: 'Договор Оферты', link: '/dogovor-oferty'},
];

const FooterMenu: FC = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center gap-[16px]'>
               
                {footerMenuItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.link}
                    className="text-textColor"
                > 
                   {item.name}
               </Link>
            ))}
        </div>
    );
}

export default FooterMenu;