"use server"

import { getCategories } from "@/db/queries/getCategories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getUserCategories() {
	try {
		const { getUser } = await getKindeServerSession()
		const user = await getUser()

		const res = getCategories(user?.id!)

		return res
	} catch (e) {
		return
	}
}