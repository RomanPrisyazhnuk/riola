"use server";

import { revalidatePath } from "next/cache";

type deleteLineFromCheckoutArgs = {
	lineId: string;
	checkoutId: string;
};

export const deleteLineFromCheckout = async ({ lineId, checkoutId }: deleteLineFromCheckoutArgs) => {
	//TODO delete line logic

	revalidatePath("/cart");
};
