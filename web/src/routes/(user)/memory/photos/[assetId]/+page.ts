import { AppRoute } from '$lib/constants';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
  redirect(302, AppRoute.PHOTOS);
}) satisfies PageLoad;
