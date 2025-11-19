import { Movie } from '@/app/assets/dummyData';
import React from 'react';

interface Props {
	movie: Movie
}

const MovieDetailsCard = ({ movie }: Props) => {
	return (
		<>
			<div className='h-50 w-100'>
				MovieDetailsCard
			</div>
		</>
	);
};

export default React.memo(MovieDetailsCard);