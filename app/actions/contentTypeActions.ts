'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export type ContentType = 'movies' | 'books';

export async function setContentTypeAction(type: ContentType) {
	const cookieStore = await cookies();

	cookieStore.set('contentType', type, {
		maxAge: 60 * 60 * 24 * 365, // 1 year
		path: '/',
		httpOnly: false, // Allow client-side access if needed
		sameSite: 'lax',
	});

	// Revalidate paths that depend on content type
	revalidatePath('/');
	revalidatePath('/my-movies');
}