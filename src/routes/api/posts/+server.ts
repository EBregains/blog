import type { Categories, Post } from "$lib/types";
import { json, type RequestHandler } from "@sveltejs/kit";
import type { Cat } from "lucide-svelte";

async function getPosts(category?: Categories) {

  let posts: Post[] = []; 

  const paths = import.meta.glob("/src/posts/*.md", {eager: true});

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").pop()?.replace(".md", "");
    if (file && slug && typeof file === "object" && 'metadata' in file) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } satisfies Post;  
      post.published && posts.push(post);
    }
  }

  if (category) {
    posts = posts.filter(post => post.categories.includes(category));
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  
  return posts;
}

export const GET: RequestHandler = async ({url}) => {
  let posts: Post[];
  if ( url.searchParams.has("category") ) {
  const category: Categories = url.searchParams.get("category") as Categories;
  posts = await getPosts(category);
  } else { 
    posts = await getPosts();
  }
  return json(posts);
};