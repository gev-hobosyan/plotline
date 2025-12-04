import BlurCircle from "@/app/components/blur/BlurCircle";
import { cookies } from "next/headers";
import Card from "./components/MainCard";
import { redirect } from "next/navigation";

type ContentType = "movies" | "books"

const AddMovie = async ({
	searchParams
}: {
	searchParams?: { [key: string]: string | string[] | undefined }
}) => {
	const cookieStorage = await cookies()
	const contentType = cookieStorage.get("contentType")?.value as ContentType

	const to = searchParams && ((await searchParams).to as string)
	const category = searchParams && ((await searchParams).category as string)

	if (contentType === "books") {
		redirect("/addbook")
	}

	return (
		<>
			<BlurCircle contentType={contentType} top="50px" left="100px" />
			<BlurCircle contentType={contentType} bottom="50px" right="0px" />
			<BlurCircle contentType={contentType} bottom="10px" right="900px" />
			<BlurCircle contentType={contentType} top="250px" right="560px" />

			<div className="h-screen flex items-center justify-center">
				<Card category={category} contentType={contentType} to={to} />
			</div>
		</>
	);
};

export default AddMovie;