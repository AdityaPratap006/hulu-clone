import React from "react";
import FlipMove from "react-flip-move";
import { IMovie } from "../../entities/movie";
import Thumbnail from "../Thumbnail/Thumbnail.component";

interface Props {
	movies: IMovie[];
}

const Results = ({ movies }: Props) => {
	return (
		<FlipMove className=" w-full py-10 px-10 mt-10 gap-2 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 overflow-x-hidden ">
			{movies.map(movie => (
				<Thumbnail key={movie.id} movie={movie} />
			))}
		</FlipMove>
	);
};

export default Results;
