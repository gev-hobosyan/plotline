import React, { ReactNode } from 'react';
import SelectElement from './SelectElement';
import { PlusIcon } from 'lucide-react';

interface Props {
	children: ReactNode;
	selected: ReactNode;
}

const SelectCollection = ({ children, selected }: Props) => {
	return (
		<>
			<div className='mt-5 relative left-0 right-0 -z-0'>
				<div className='absolute left-5 right-5 bg-m-primary/30  px-4 py-2.5 rounded-full flex gap-2'>
					{selected}

					{/* <SelectElement className='border-m-dark bg-m-primary/40'>Fantasy</SelectElement>
					<SelectElement className='border-m-dark bg-m-primary/40'>Fantasy</SelectElement>
					<SelectElement className='border-m-dark bg-m-primary/40'>Fantasy</SelectElement> */}
				</div>
				<div className="border border-m-dark mx-5 border-t-0 rounded-t-3xl rounded-b-3xl pt-16 pb-3 px-4 max-h-none transition-transform bg-m-primary/20 flex gap-2">
					{children}
					{/* <SelectElement className='bg-white/20'>Fantasy</SelectElement>
					<SelectElement className='bg-white/20'>Anime</SelectElement>
					<SelectElement className='bg-white/20'>Adventure</SelectElement>
					<SelectElement className='flex gap-0.5'><PlusIcon className='w-4' /> Add new</SelectElement> */}
				</div>
			</div>
		</>
	);
};

export default React.memo(SelectCollection);