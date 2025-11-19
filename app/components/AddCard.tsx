import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AddCard = () => {
	return (
		<>
			<Link href="addmovie">
				<div className='w-50 h-[300px] bg-m-dark/25 border border-m-dark backdrop-blur rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 duration-300 overflow-hidden group'>
					<PlusIcon className='stroke-3 w-10' />
					<p className='text-xl font-semibold'>Add</p>
				</div>
			</Link>
		</>
	);
};

export default AddCard;