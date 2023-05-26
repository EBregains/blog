import type { Post } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch('api/posts');
  const posts : Post[] = await response.json();
  const projectPosts = posts.filter(post => 
    post.categories.includes('project'))
  console.log(projectPosts);

  return { projectPosts };
};