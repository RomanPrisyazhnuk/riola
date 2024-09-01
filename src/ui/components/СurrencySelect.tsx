"use client";

import { useState } from "react";
import Image from "next/image";

const currencies = ['USD', 'BAT', 'RUB'];

export const СurrencySelect = () => {
    const [activeCurrency, setActiveCurrency] = useState('USD');

    return (
        <div className="relative inline-block">
            <select
                className="appearance-none  w-fit bg-transparent px-4 py-2 pr-8 text-sm text-gray-700 focus:outline-none border-none"
                onChange={(e) => {
                    const newCurrency = e.currentTarget.value;
                    setActiveCurrency(newCurrency);
                    console.log(newCurrency);
                }}
                value={activeCurrency}
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            {/* Кастомная стрелочка */}
            <div className="absolute inset-y-0 right-3 flex  pointer-events-none">
			<Image
				src={'/icons/arrow.svg'}
				alt={'Arrow'}
				width={16}
				height={16}
				className="h-full object-contain object-center"
			/>
            </div>
        </div>
    );
};
