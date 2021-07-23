import Head from "next/head";
import { GetServerSideProps } from "next";
import { Fragment } from "react";
import Nav from "../components/Nav/Nav.component";
import Results from "../components/Results/Results.component";
import { ParsedUrlQuery } from "querystring";
import { requests } from "../utils/requests";
import { IMovie } from "../entities/movie";

interface Props {
	movies: IMovie[];
}

export default function Home({ movies }: Props) {
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
				<Results movies={movies} />
			</div>
		</Fragment>
	);
}

interface QueryParams extends ParsedUrlQuery {
	genre: string;
}

export const getServerSideProps: GetServerSideProps<Props, QueryParams> =
	async context => {
		try {
			const genre = context.query?.genre as keyof typeof requests;

			const response = await fetch(
				`https://api.themoviedb.org/3${
					requests[genre]?.url || requests.fetchTrending.url
				}`
			);

			const data = (await response.json()) as {
				page: number;
				total_pages: number;
				total_results: number;
				results: IMovie[];
			};

			return {
				props: {
					movies: data.results || [],
				},
			};
		} catch (error) {
			return {
				props: {
					movies: [],
				},
			};
		}
	};
