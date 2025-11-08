'use client'

import Button from '@/app/components/Button';
import { useState } from 'react';

type ContentType = "movies" | "books"

interface Props {
	contentType: ContentType
}

const Card = ({ contentType }: Props) => {
	const [title, setTitle] = useState("")

	async function handleClick(title: string) {
		const data = await fetch(`/api/movies/find?title=${title}`)
		console.log(await data.json())
	}

	return (
		<>
			<div className="bg-black/30 h-60 w-140 backdrop-blur rounded-2xl flex items-center justify-around flex-col py-5 px-10 border border-black">
				<p className="text-xl">Please enter the {contentType.slice(0, contentType.length - 1)} title</p>

				<input type="text" className={`${contentType === "movies" ? "bg-m-primary/30 border-m-dark" : "bg-b-dark/30 border-b-dark"} text-center border backdrop-blur py-3 px-4 rounded-full text-lg`} value={title} onChange={(e) => setTitle(e.target.value)} />

				<Button contentType={contentType} className={contentType === "movies" ? "bg-m-primary/30 border-m-dark" : "bg-b-dark/30 border-b-dark"} onClick={() => handleClick(title)}>
					Search
				</Button>
			</div>
		</>
	);
};

export default Card;