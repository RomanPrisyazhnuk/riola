import Link from "next/link";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import { Clock, Users, Info } from "lucide-react";
import { Excursion } from "@/entities/excursion";
import Rating from "../atoms/Rating";

export function ProductElement({
	product,
	loading,
	priority,
}: { product: Excursion } & { loading: "eager" | "lazy"; priority?: boolean }) {
	return (
		<li data-testid="ProductElement" className="p-2 relative">
			<Link href={`/products/${product.slug}`} key={product.id}>
				<div>
					{product?.image && (
						<ProductImageWrapper
							loading={loading}
							src={product.image.thumb || '/pp-60-520-820-90.webp'}
							alt={product.name}
							width={300}
							height={260}
							sizes={"260px"}
							priority={priority}
						/>
					)}
					<div className="absolute top-5 right-5">
						<Rating rating={product.rating}/> 
					</div>
					<div className="mt-2 flex justify-between">
						<div className="w-full flex justify-between">
							<h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>

						</div>
						
					</div>
					<div className="flex flex-col space-y-2 text-sm text-gray-700">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-teal-500">$64</span>
        <span className="text-xs text-gray-400">/взр.</span>
        <span className="text-lg font-bold text-teal-500">$57</span>
        <span className="text-xs text-gray-400">/возраст 3-9</span>
      </div>

      <div className="flex items-center space-x-2 text-gray-500">
        <div className="flex items-center space-x-1">
          <Clock size={16} />
          <span>10 ч.</span>
        </div>

        <div className="flex items-center space-x-1">
          <Users size={16} />
          <span>до 40 чел.</span>
        </div>

        <div className="flex items-center space-x-1">
          <Info size={16} />
          <span>Групповая</span>
        </div>
      </div>
    </div>
				</div>
			</Link>
		</li>
	);
}
