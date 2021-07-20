import { useAppThemeContext } from "../../contexts/AppTheme.context";
import { ThemeMode } from "../../hooks/AppTheme.hook";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeSwitchButton = () => {
	const { state, toggleMode } = useAppThemeContext();

	const isDarkMode = state.mode === ThemeMode.DARK;

	return (
		<button
			onClick={toggleMode}
			className="group flex flex-col items-center gap-1 group cursor-pointer w-12 sm:w-20 pb-6"
		>
			{isDarkMode ? (
				<SunIcon className="h-8 text-yellow-500 " />
			) : (
				<MoonIcon className="h-8 text-onNeutralBg " />
			)}
			{/* <p className="opacity-0 group-hover:opacity-100 tracking-widest text-onNeutralBg">
				{state.mode === ThemeMode.DARK ? "LIGHT UI" : "DARK UI"}
			</p> */}
		</button>
	);
};

export default ThemeSwitchButton;
