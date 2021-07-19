import NextImage from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import AppHeaderItem from "../AppHeaderItem/AppHeaderItem.component";

interface Props {}

const AppHeader = (props: Props) => {
	return (
		<header className="flex flex-row justify-between items-center">
			<div className="flex flex-row justify-around items-center pl-10 pr-10">
				<AppHeaderItem title="HOME" icon={HomeIcon} />
			</div>
			<div>
				<NextImage
					className="object-contain"
					src="https://links.papareact.com/ua6"
					width={200}
					height={100}
				/>
			</div>
		</header>
	);
};

export default AppHeader;
