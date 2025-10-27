import { cookies } from "next/headers";
import { ContentType, setContentTypeAction } from "../actions/contentTypeActions";

export default async function getContentType(): Promise<ContentType> {
	const cookieStore = await cookies()
	const contentType = cookieStore.get("contentType")?.value as ContentType

	if (!contentType) {
		setContentTypeAction("movies")
	}

	return contentType || "movies";
}