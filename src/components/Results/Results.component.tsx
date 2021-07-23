import React from "react";
import { IMovie } from "../../entities/movie";

interface Props {
	movies: IMovie[];
}

const Results = ({ movies }: Props) => {
	return (
		<div>
			<ul>
				{movies.map(movie => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Results;
