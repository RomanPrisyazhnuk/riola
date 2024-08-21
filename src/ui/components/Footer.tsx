// import Link from "next/link";
// import Image from "next/image";
import Link from "next/link";
import { ChannelSelect } from "./ChannelSelect";

export async function Footer() {
	const footerLinks = {menu: {items: [
		{id: 5, name: 'блок меню 1', category: 'sacasc', },
		{id: 5, name: 'блок меню 2', category: 'sacasc', },
		{id: 5, name: 'блок меню 3', category: 'sacasc', },
		{id: 5, name: 'блок меню 4', category: 'sacasc', }
	]}};
	const channels = [{
        id: 'string',
        name: 'string',
        slug: 'string',
        currencyCode: 'USD'
    },

	{
        id: 'string',
        name: 'string',
        slug: 'string',
        currencyCode: 'RUB'
    }]
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-neutral-300 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="grid grid-cols-3 gap-8 py-16">
					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id}>
								<h3 className="text-sm font-semibold text-neutral-900">{item.name}</h3>
								<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={`/categories/${child.category.slug}`}>
														{child.category.name}
													</Link>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={`/collections/${child.collection.slug}`}>
														{child.collection.name}
													</Link>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={`/pages/${child.page.slug}`}>
														{child.page.title}
													</Link>
												</li>
											);
										}
										if (child.url) {
											return (
												<li key={child.id} className="text-sm">
													<Link href={child.url}>{child.name}</Link>
												</li>
											);
										}
										return null;
									})}
								</ul>
							</div>
						);
					})}
				</div>

				{channels && (
					<div className="mb-4 text-neutral-500">
						<label>
							<span className="text-sm">Сменить валюту:</span> <ChannelSelect channels={channels} />
						</label>
					</div>
				)}

				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-sm text-neutral-500">&copy; {currentYear} Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
}
