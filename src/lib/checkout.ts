import { cookies } from "next/headers";

export function getIdFromCookies() {
	const cookieName = `checkoutId`;
	const checkoutId = cookies().get(cookieName)?.value || "";
	return checkoutId;
}

export function saveIdToCookie(channel: string, checkoutId: string) {
	const shouldUseHttps =
		process.env.NEXT_PUBLIC_STOREFRONT_URL?.startsWith("https") || !!process.env.NEXT_PUBLIC_VERCEL_URL;
	const cookieName = `checkoutId-${channel}`;
	cookies().set(cookieName, checkoutId, {
		sameSite: "lax",
		secure: shouldUseHttps,
	});
}

export async function find(checkoutId: string) {
	try {
		// const { checkout } = checkoutId
		// 	? await executeGraphQL(CheckoutFindDocument, {
		// 			variables: {
		// 				id: checkoutId,
		// 			},
		// 			cache: "no-cache",
		// 	  })
		// 	: { checkout: null };

		return 'asdasdasf';
	} catch {
		// we ignore invalid ID or checkout not found
	}
}

export async function findOrCreate({checkoutId}: { checkoutId?: string; channel: string }) {
	if (!checkoutId) {
		return (await create());
	}
	const checkout = await find(checkoutId);
	return checkout || (await create());
}

export const create = () => 'asdasdasd'
