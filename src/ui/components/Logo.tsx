"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";


export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
						<Image
				src={'/riolatravel-gol2-92-270-90.webp'}
				alt={'RiolaLogo'}
				width={200}
				height={200}
				className="h-full w-full object-contain object-center"
			/>
			</h1>
		);
	}
	return (
		<div className="flex items-center font-bold">
			<LinkWithChannel aria-label="homepage" href="/">
			<Image
				src={'/riolatravel-gol2-92-270-90.webp'}
				alt={'RiolaLogo'}
				width={200}
				height={200}
				className="h-full w-full object-contain object-center"
			/>
			</LinkWithChannel>
		</div>
	);
};
