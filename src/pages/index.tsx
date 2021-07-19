import Head from "next/head";
import { Fragment } from "react";
import AppHeader from "../components/AppHeader/AppHeader.component";

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
			<div className="min-h-screen  ">
				{/* Header */}
				<AppHeader />

				{/* Nav */}

				{/* Results */}
			</div>
		</Fragment>
	);
}
