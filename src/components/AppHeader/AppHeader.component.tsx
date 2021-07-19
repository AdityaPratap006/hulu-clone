import NextImage from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import AppHeaderItem from "../AppHeaderItem/AppHeaderItem.component";
import ThemeSwitchButton from "../ThemeSwitchButton/ThemeSwitchButton.component";

interface Props {}

const AppHeader = (_props: Props) => {
	return (
		<header className="flex flex-row justify-between items-center">
			<div className="flex flex-row justify-around items-center pl-10 pr-10 gap-1">
				<AppHeaderItem title="HOME" icon={HomeIcon} />
			</div>
			<div className="flex flex-row justify-between items-center gap-1">
				<ThemeSwitchButton />
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
