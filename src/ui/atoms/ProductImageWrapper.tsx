import NextImage, { type ImageProps } from "next/image";

export const ProductImageWrapper = (props: ImageProps) => {
	return (
		<div className="rounded overflow-hidden bg-neutral-50">
			<NextImage {...props} className="w-full object-contain object-center" />
		</div>
	);
};
