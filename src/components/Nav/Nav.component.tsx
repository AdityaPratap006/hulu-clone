import { useRouter } from "next/dist/client/router";
import { requests } from "../../utils/requests";

interface Props {}

const Nav = (_: Props) => {
	const router = useRouter();

	return (
		<nav className="w-full relative flex flex-row">
			<div className=" min-w-full px-10 sm:px-20 flex flex-row whitespace-nowrap text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
				{Object.entries(requests).map(([key, { title }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className="last:pr-12 sm:last:pr-24 text-onNeutralBg cursor-pointer transition duration-100 transform hover:scale-125 active:text-primaryBold"
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute top-0 right-0 bg-gradient-to-l from-neutralBg h-10 w-1/12"></div>
		</nav>
	);
};

export default Nav;
