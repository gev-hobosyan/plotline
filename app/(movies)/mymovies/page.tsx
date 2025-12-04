import { cookies } from 'next/headers';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { getMovies } from '@/db/queries/getMovies';
import Button from '@/app/components/Button';
import MovieSection from '@/app/components/sections/MovieSection';
import { Movie } from '@/app/assets/dummyData';
import { redirect } from 'next/navigation';

const MyMovies = async () => {
	const cookieStorage = await cookies()
	const contentType = cookieStorage.get("contentType")?.value
	const { getUser } = await getKindeServerSession();
	const user = await getUser()

	const categories = await getMovies(user?.id!);

	const movies = categories?.slice(0, 8).map(async (category) => {
		const moviePromises = category.movies?.slice(0, 8).map(async (movie) => {
			const res = await fetch(`${process.env.BASE_PATH}/api/movies?imdb_id=${movie}`, {
				headers: {
					Cookie: (await cookies()).toString()
				}
			})

			if (res.ok) {
				return res.json()
			}

			return null
		}) || []

		const fetchedMovies = {
			id: category.id,
			userId: category.userId,
			categoryName: category.categoryName,
			movies: (await Promise.all(moviePromises)).filter(Boolean) as Movie[]
		}

		return fetchedMovies
	})

	if (contentType === "books") {
		redirect("mybooks")
	}

	return (
		<>
			{
				categories?.length === 0 && (
					<div className='h-screen w-screen flex items-center justify-center flex-col gap-4'>
						<p className='text-4xl'>You haven't saved any movie</p>
						<Button className="bg-m-primary/30 border-m-dark">
							Let's start
						</Button>
					</div>
				)
			}

			<div className="py-4  max-md:px-5">
				{
					movies?.map(async (movie) => (
						<MovieSection title={(await movie).categoryName} movies={(await movie).movies} />
					))
				}

			</div>
		</>
	);
};

export default MyMovies;