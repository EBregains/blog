import type { Categories, Post } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		const slug = path.split('/').pop()?.replace('.md', '');
		if (file && slug && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;

			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export const GET: RequestHandler = async ({ url }) => {
	let posts: Post[];
	posts = await getPosts();

	return json(posts);
};
