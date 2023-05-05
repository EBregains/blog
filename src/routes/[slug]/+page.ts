import { error } from "@sveltejs/kit";

//@ts-ignore
export async function load({params}: Parameters) {
  
  try {
    const post = await import(`../../posts/${params.slug}.md`);
    return {
      status: 200,
      content: post.default,
      meta: post.metadata
    }
  } catch (err) {
    throw error(404, `Post not found with ${params.slug}`)
  }
}