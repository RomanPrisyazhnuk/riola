import { UserMenu } from "./UserMenu";
import Link from "next/link";
import { mockUser } from "@/entities/user";

export function UserMenuContainer() {
	const user = null
	if (user) {
		return <UserMenu user={mockUser} />;
	} else {
		return (
			<Link href="/login" className="">
				<button className="px-4 py-2 text-white bg-cyan-500 rounded-md hover:bg-cyan-400 w-full sm:w-auto">
					Войти
				</button>
			</Link>
		);
	}
}
