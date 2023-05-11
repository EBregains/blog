import type { Post } from "$lib/types";

export async function load({params, fetch}:any) {
  const response = await fetch(`/api/posts?category=${params.category}`);
  const posts: Post[] = await response.json(); 
  return { posts };
} 