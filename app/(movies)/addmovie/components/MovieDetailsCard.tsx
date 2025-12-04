import { Movie } from '@/app/assets/dummyData';
import Button from '@/app/components/Button';
import SelectCollection from '@/app/components/select/SelectCollection';
import SelectElement from '@/app/components/select/SelectElement';
import { PlusIcon, StarIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import type { List } from "@/app/types"
import { addMovie } from '@/app/actions/addMovie';
import { getUserCategories } from '@/app/actions/getUserCategories';

interface Props {
	movie: Movie;
	close: () => void;
	to: string | undefined;
	searchCategory: string | undefined;
}

const MovieDetailsCard = ({ movie, close, to, searchCategory }: Props) => {
	const lists: List[] = [
		{
			id: 'mymovies',
			listName: 'My Movies'
		}, {
			id: 'watchlist',
			listName: 'Watch List'
		}, {
			id: 'waitlist',
			listName: 'Wait List'
		}
	]

	let [selectedLists, setSelectedLists] = useState<string[]>([])
	let [selectedCategories, setSelectedCategories] = useState<string[]>([])
	let [categories, setCategories] = useState<string[]>([])
	const [filteredLists, setFilteredLists] = useState(lists)
	const [filteredCategories, setFilteredCategories] = useState<string[]>([])

	useEffect(() => {
		if (to) {
			setSelectedLists([to])
		}
		if (searchCategory) {
			setSelectedCategories([searchCategory])
		}

		getUserCategories().then(data => {
			setCategories(data || [])
			setFilteredCategories(data || [])
		})
	}, [])

	useEffect(() => {
		setFilteredCategories(categories.filter(c => !selectedCategories.includes(c)))
	}, [selectedCategories])

	useEffect(() => {
		setFilteredLists(lists.filter(l => !selectedLists.includes(l.id)))
	}, [selectedLists])



	const handleAdd = useCallback((movie: string) => {
		addMovie(selectedLists, selectedCategories, movie)
	}, [selectedLists, selectedCategories])

	const handleListSelect = useCallback((list: List) => {
		setSelectedLists(prev => {
			const found = prev.find(l => l == list.id)

			if (!found) {
				return [...prev, list.id]
			}

			return prev
		})
	}, [])

	return (
		<>
			<div className='h-150 w-[800px] bg-m-dark/40 flex items-center justify-between flex-col rounded-3xl backdrop-blur border border-m-dark z-50 max-md:mx-5'>
				{/* <XIcon className='absolute top-4 right-4 w-6 hover:scale-105 transition' /> */}
				<div className='place-self-start w-full'>
					<div className='flex gap-4 place-self-start ml-5 mt-5'>
						<Image
							src={movie.imageUrl}
							alt={movie.title}
							width={150}
							height={300} className='shadow-black rounded-xl' />
						<div className='w-80 flex flex-col items-center justify-center text-start gap-2'>
							<p className='place-self-start text-lg text-nowrap font-bold'>{movie.title.replace("&apos;", "'")}</p>
							<p className='text-wrap text-lg line-clamp-5 leading-tight'>{movie.description.replace("&apos;", "'")}</p>
							<p className='text-gray-300 text-nowrap place-self-start flex'>{movie.rating} <StarIcon className='w-3 ml-1 mr-1 fill-yellow-300 stroke-yellow-300' /> | {movie.generes.map((genre, index) => index === movie.generes.length - 1 ? genre.genre : `${genre.genre} ・ `)} | {movie.runtime}</p>
						</div>
					</div>

					<SelectCollection selected={
						selectedLists!.length !== 0 ? (
							selectedLists?.map(collection => (
								<SelectElement className='border-m-dark bg-m-primary/40' key={collection} onClick={() => setSelectedLists(prev => prev.filter(l => l !== collection))}>{lists.find(col => col.id === collection)?.listName}</SelectElement>
							))
						) : "Please select the list"
					}>
						{
							filteredLists.map((list) => (
								<SelectElement className='bg-white/20' key={list.id} onClick={() => handleListSelect(list)}>{list.listName}</SelectElement>
							))
						}
					</SelectCollection>
					<div className='mt-5'>
						<SelectCollection selected={
							selectedCategories!.length !== 0 ? (
								selectedCategories?.map(category => (
									<SelectElement className='border-m-dark bg-m-primary/40' key={category} onClick={() => setSelectedCategories(prev => prev.filter(c => c !== category))}>{category}</SelectElement>
								))
							) : "Please select the category"
						}>
							{
								filteredCategories.map((category) => (
									<SelectElement className='bg-white/20' key={category} onClick={() => setSelectedCategories(prev => [...prev, category])}>{category}</SelectElement>
								))
							}
						</SelectCollection>
					</div>
				</div>

				<div className='flex mb-4 gap-4'>
					<Button className='bg-white/30 hover:scale-105 transition' onClick={() => close()}>Cancel</Button>
					<Button className='bg-m-primary/30 backdrop-blur border-m-dark hover:scale-105 transition' onClick={() => handleAdd(movie.imdbId)}>Add</Button>
				</div>
			</div>
		</>
	);
};

export default React.memo(MovieDetailsCard);