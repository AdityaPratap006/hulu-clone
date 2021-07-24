import NextImage from "next/image";
import { IMovie } from "../../entities/movie";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

interface Props {
	movie: IMovie;
}

const Thumbnail = forwardRef<HTMLDivElement, Props>(({ movie }: Props, ref) => {
	const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

	return (
		<div
			ref={ref}
			className=" max-w-3xl bg-neutralBg hover:bg-neutralBgSoft group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-110 z-10 hover:z-40"
		>
			<div className="w-full relative bg-neutralBg group-hover:bg-neutralBgSoft">
				<NextImage
					layout="responsive"
					height={1080}
					width={1920}
					src={
						`${BASE_IMAGE_URL}/${movie.backdrop_path || movie.poster_path}` ||
						`${BASE_IMAGE_URL}/${movie.poster_path}`
					}
				/>
				<div className="absolute bottom-0 right-0 bg-gradient-to-t from-neutralBg via-transparent to-transparent h-8 w-full"></div>
			</div>

			<div className="text-onNeutralBg p-2 flex flex-col justify-start gap-1">
				<p className="truncate">{movie.overview}</p>
				<h2 className="mt-1 text-2xl transition-all duration-100 ease-in-out font-medium group-hover:font-bold">
					{movie.title || movie.original_name || movie.original_title}
				</h2>
				<p className="flex items-center opacity-0 group-hover:opacity-100">
					{movie.media_type && `${movie.media_type} .`}{" "}
					{movie.release_date || movie.first_air_date} .{" "}
					<ThumbUpIcon className="h-5 mx-2" />
					{movie.vote_count}
				</p>
			</div>
		</div>
	);
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
