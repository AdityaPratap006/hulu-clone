import NextImage from "next/image";
import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import AppHeaderItem from "../AppHeaderItem/AppHeaderItem.component";
import ThemeSwitchButton from "../ThemeSwitchButton/ThemeSwitchButton.component";

interface Props {}

const AppHeader = (_props: Props) => {
	return (
		<header className="flex flex-col sm:flex-row justify-between items-center">
			<div className="flex flex-row flex-grow justify-evenly items-center gap-1 max-w-xl sm:max-w-lg md:max-w-2xl mt-4 sm:mt-2 h-auto">
				<AppHeaderItem title="HOME" icon={HomeIcon} />
				<AppHeaderItem title="TRENDING" icon={LightningBoltIcon} />
				<AppHeaderItem title="VERIFIED" icon={BadgeCheckIcon} />
				<AppHeaderItem title="COLLECTIONS" icon={CollectionIcon} />
				<AppHeaderItem title="SEARCH" icon={SearchIcon} />
				<AppHeaderItem title="ACCOUNT" icon={UserIcon} />
				<ThemeSwitchButton />
			</div>
			<div className="flex flex-row justify-between items-center gap-1">
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
