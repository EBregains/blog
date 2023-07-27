import { error } from '@sveltejs/kit';

//@ts-ignore
export async function load({ params }: Parameters) {
	try {
		const post = await import(`../../../../posts/${params.slug}/${params.slug}.md`);
		const image = await import(`../../../../posts/${params.slug}/images/profile.webp`);

		return {
			status: 200,
			content: post.default,
			meta: post.metadata,
			profile: image.default
		};
	} catch (err) {
		throw error(404, `Post not found with ${params.slug}`);
	}
}
