import Head from "next/head";
import { Fragment } from "react";
import Nav from "../components/Nav/Nav.component";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Hulu Clone</title>
				<meta
					name="description"
					content="Hulu Clone built with Next.js, tailwind.css"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				{/* Nav */}
				<Nav />
				{/* Results */}
			</div>
		</Fragment>
	);
}
