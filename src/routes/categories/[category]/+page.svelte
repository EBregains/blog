<script lang="ts">
	import type { PageData } from "./$types";
  import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";
  import { page } from "$app/stores";

  export let data: PageData;
  export let category = $page.params.category ;
</script>

<svelte:head>
  <title>{config.title} | {category}</title>
</svelte:head>


<h2>#{category}</h2>
<a href="/categories"> &lt; Back to categories</a>

<section>
  <ul class="posts">
    {#each data.filteredPosts as post}
      <li class='post'>
        <a href={`/post/${post.slug}`} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>

  section{
    margin-block: var(--size-7);
  }

  .posts {
    display: grid;
    gap: var(--size-7);   
  }

  .post {
    max-inline-size: var(--size-content-3);
  }

  .post:not(:last-child) {
    border-bottom: 1px solid var(--border);
    padding-bottom: var(--size-7);
  }

  .title {
    font-size: var(--font-size-fluid-3);
    text-transform: capitalize;
  }

  .date {
    color: var(--text-2);
    padding-bottom: var(--size-7);
  }
</style>