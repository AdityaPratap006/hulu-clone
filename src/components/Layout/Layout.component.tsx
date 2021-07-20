import { ReactElement } from "react";
import { useAppThemeContext } from "../../contexts/AppTheme.context";
import { ThemeMode } from "../../hooks/AppTheme.hook";
import AppHeader from "../AppHeader/AppHeader.component";
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
			<div className="min-h-screen bg-neutralBg transition-colors duration-300 ease-in-out">
				{/* Header */}
				<AppHeader />
				{props.children}
			</div>
		</div>
	);
};

export default Layout;
