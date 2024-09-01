
import type { FC } from 'react';
import Image from "next/image";

const footerSocialLinks = [
    {image: 'social/telegramm.svg', name: 'Telegramm', href:"https://t.me/riola_travel"},
    {image: 'social/watsapp.svg', name: 'Watsapp', href:"https://api.whatsapp.com/message/UT464GA7AUOQO1?autoload=1&app_absent=0"},
];

const SocialLinks: FC = () => {
    return (
        <div className='flex justify-center items-center gap-[16px]'>
            {footerSocialLinks.map((item) => (
                <a href={item.href} target="_blank" key={item.name}>
                <Image
                    key={item.name}
                    src={`/${item.image}`}
                    alt={item.name}
                    title={item.name}
                    width={40}
                    height={40}
                    className="h-full object-contain object-center"
                />
                </a>
            ))}
        </div>
    );
}

export default SocialLinks;