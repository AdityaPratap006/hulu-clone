import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import Layout from "../components/Layout/Layout.component";
import { AppThemeProvider } from "../contexts/AppTheme.context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<AppThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AppThemeProvider>
		</Fragment>
	);
}
export default MyApp;
