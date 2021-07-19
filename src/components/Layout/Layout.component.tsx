import { ReactElement } from "react";
import { useAppThemeContext } from "../../contexts/AppTheme.context";
import { ThemeMode } from "../../hooks/AppTheme.hook";

interface Props {
	children?: ReactElement;
}

const Layout = (props: Props) => {
	const appTheme = useAppThemeContext();

	return (
		<div
			className={
				appTheme.state.mode === ThemeMode.LIGHT ? "theme-light" : "theme-dark"
			}
		>
			<div className="bg-neutralBg transition-colors duration-300 ease-in-out">
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
