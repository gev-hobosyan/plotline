import { redirect } from 'next/navigation'
import { cookies } from 'next/headers';
import SectionPart from '@/app/components/sections/SectionPart';
import MySection from '@/app/components/sections/MySection';
import movies from "@/app/assets/movies.png"

const MyMovies = async () => {
	const cookieStorage = await cookies()
	const contentType = cookieStorage.get("contentType")?.value

	if (contentType === "books") {
		redirect("/my-books")
	}

	return (
		<>
			<div className="py-4 px-10 max-md:px-5 overflow-hidden">
				{/* <MySection image={movies} contentType='movies' /> */}

				{/* <SectionPart title='Favorites' href='/' contentType='movies' /> */}
				{/* <SectionPart title='Fantasy' href='/' contentType='movies' /> */}
				{/* <SectionPart title='Anime' href='/' contentType='movies' /> */}
			</div>
		</>
	);
};

export default MyMovies;