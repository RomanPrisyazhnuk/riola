"use client";
import { Place } from "@/entities/place";
import Image from "next/image";
import Link from "next/link";


export const Places = ({ places }: { places: Place[] }) => {
	return (
        <ul
			role="list"
			data-testid="ProductList"
			className="flex flex-wrap justify-between w-full p-2 gap-2"
		>
            {places.map((place) => (
				<div key={place.id} className="w-40 h-40 flex items-center font-bold grow overflow-hidden relative rounded-lg">
            
                <Link className="w-full" aria-label="homepage" href={`/${place.slug}`}>
                <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="rounded"
                />
                 <div className="absolute inset-0 bg-black opacity-50 "></div>
                <p className="absolute left-6 top-6 text-white">{place.title}</p>
                <p className="absolute right-6 bottom-6 text-white">{`${place.excursionsCount} экскурсий`}</p>
                </Link>
            </div>
			))}
		
        </ul>
	);
};
