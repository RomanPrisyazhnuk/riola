import { UserIcon } from "lucide-react";
import { UserMenu } from "./UserMenu";
import Link from "next/link";
import { mockUser } from "@/entities/user";

export async function UserMenuContainer() {
	const user = null
	if (user) {
		return <UserMenu user={mockUser} />;
	} else {
		return (
			<Link href="/login" className="h-6 w-6 flex-shrink-0">
				<UserIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
				<span className="sr-only">Войти</span>
			</Link>
		);
	}
}
