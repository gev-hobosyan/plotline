import MySection from "@/app/components/sections/MySection";
import SectionPart from "@/app/components/sections/SectionPart";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import books from "@/app/assets/book.jpg"

const MyBooks = async () => {
	const cookieStorage = await cookies()
	const contentType = cookieStorage.get("contentType")?.value

	if (contentType === "movies") {
		redirect("/my-movies")
	}

	return (
		<>
			<div className="py-4 px-10 max-md:px-5 overflow-hidden">
				<MySection contentType="books" image={books} />

				<SectionPart title='Favorites' href='/' contentType='books' />
				<SectionPart title='Fantasy' href='/' contentType='books' />
				<SectionPart title='Detective' href='/' contentType='books' />
			</div>
		</>
	);
};

export default MyBooks;