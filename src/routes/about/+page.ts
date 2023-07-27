import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	const projectPosts = posts.filter((post) => post.categories.includes('project'));
	for (const post of projectPosts) {
		const image = await import(`../../posts/${post.slug}/images/profile.webp`);
		post.image = image.default;
	}

	return { projectPosts };
};
