import FooterMenu from "./FooterMenu";
import { Logo } from "./Logo";
import PMethods from "./PMethods";
import SocialLinks from "./SocialLinks";

export async function Footer() {
   // const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className="flex flex-col justify-center items-center p-12">
				<div className="flex justify-center w-full border-b border-b-cyan-100/50 p-3">
					<Logo/>
				</div >
				<div className="flex justify-center w-full border-b border-b-cyan-100/50 p-6">
					<FooterMenu/>
				</div>
				<div className="flex justify-center w-full border-b border-b-cyan-100/50 p-6">
					<PMethods/>
				</div>
				<div className="p-6">
					<SocialLinks/>
				</div>
			</div>
		</footer>
	);
}
