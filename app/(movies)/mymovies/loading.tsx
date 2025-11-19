import LoadingSpinner from '@/app/components/sections/LoadingSpinner';
import React from 'react';

const Loading = () => {
	return (
		<div className='flex items-center justify-center h-screen'>
			<LoadingSpinner contentType='movies' />
		</div>
	);
};

export default Loading;