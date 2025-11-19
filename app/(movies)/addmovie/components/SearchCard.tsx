import Button from '@/app/components/Button';
import React from 'react';

interface Props {
	contentType: "movies" | "books";
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	handleClick: (title: string) => void
}


const SearchCard = ({ contentType, title, setTitle, handleClick }: Props) => {
	return (
		<>
			<div className="bg-black/30 h-60 w-140 backdrop-blur rounded-2xl flex items-center justify-around flex-col py-5 px-10 border border-black">
				<p className="text-xl">Please enter the {contentType.slice(0, contentType.length - 1)} title</p>

				<input type="text" className="bg-m-primary/30 border-m-dark text-center border backdrop-blur py-3 px-4 rounded-full text-lg" value={title} onChange={(e) => setTitle(e.target.value)} />

				<Button className="bg-m-primary/30 border-m-dark" onClick={() => handleClick(title)}>
					Search
				</Button>
			</div>
		</>
	);
};

export default React.memo(SearchCard);