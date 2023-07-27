import type { Post } from '$lib/types';

export async function load({ params, fetch }: any) {
	const response = await fetch(`/api/posts`);
	const posts: Post[] = await response.json();
	console.log(posts);

	const filteredPosts = posts.filter((post) => post.categories.includes(params.category));

	return { filteredPosts };
}
