import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type ContentType = "movies" | "books"

export default function useContentType() {
	const [contentType, setContentType] = useState<ContentType>();
	useEffect(() => {
		setContentType(Cookies.get("contentType") as ContentType)
	}, [])
	return [contentType];
}