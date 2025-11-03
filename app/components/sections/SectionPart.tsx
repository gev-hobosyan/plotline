import BlurLine from '../blur/BlurLine';
import { ArrowRightIcon } from 'lucide-react';
import MovieCard from '../MovieCard';
import Link from 'next/link';
import { dummyMoviesData } from '@/app/assets/dummyData';

interface Props {
	contentType: "movies" | "books";
	href: string;
	title: string;
}

const SectionPart = ({ contentType, title, href }: Props) => {
	return (
		<>
			<div className="relative flex items-center justify-between pt-10 pb-7">
				<BlurLine contentType={contentType} />

				<p className="text-gray-300 font-medium text-lg">{title}</p>
				<Link href={href} className="flex items-center gap-2 group justify-center text-sm text-gray-300">
					View All
					<ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition" />
				</Link>
			</div>

			<div className="flex flex-wrap justify-center gap-8">
				<MovieCard movie={dummyMoviesData[0]} />
				<MovieCard movie={dummyMoviesData[1]} />
				<MovieCard movie={dummyMoviesData[0]} />
				<MovieCard movie={dummyMoviesData[1]} />
				<MovieCard movie={dummyMoviesData[0]} />
				<MovieCard movie={dummyMoviesData[1]} />
			</div>
		</>
	);
};

export default SectionPart;