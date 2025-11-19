import { insertUser } from "@/db/queries/insertUser";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getUser } from "@/db/queries/getUser";

export async function GET(req: NextRequest) {
	const getUserKinde = (await getKindeServerSession()).getUser;
	const user = await getUserKinde();

	const dbUser = await getUser(user?.id!)

	if (!dbUser) {
		try {
			await insertUser({ id: user?.id!, userName: user?.username || user?.family_name + " " + (user?.given_name || ""), email: user?.email! })
		}
		catch (e) {
			console.log(e)
		}
	}

	redirect("/");
}