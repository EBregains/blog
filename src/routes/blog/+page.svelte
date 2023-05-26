<script lang="ts">
	import type { PageData } from "./$types";
  import * as config from "$lib/config";
	import { formatDate } from "$lib/utils";

  export let data: PageData;
  
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section>
  <h2>Latest</h2>
  <ul class="posts">
    {#each data.posts as post}
      <li class='post'>
        <a href={`/blog/post/${post.slug}`} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
        <p class="description">{post.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style>

  section {
    width: fit-content;
    margin-inline: auto;
    margin-block: var(--size-7);
  }
  h2 {
    padding-bottom: var(--size-7);
    margin-bottom: var(--size-7);
    border-bottom: var(--border-size-1) solid var(--border);
    font-size: var(--font-size-fluid-3);
  }
  h2::before { 
    content: "#";
    padding-right: var(--size-3);
    color: var(--text-2);
    font-weight: 100;
  }
  .posts {
    display: grid;
    gap: var(--size-5); 
    max-inline-size: var(--size-content-3)  
  }

  .post {
    max-inline-size: var(--size-content-3);
  }

  .post:not(:last-child) {
    border-bottom: 1px solid var(--border);
    padding-bottom: var(--size-6);
  }

  .title {
    font-size: var(--font-size-fluid-2);
    text-transform: capitalize;
  }

  .date {
    color: var(--text-2);
    padding-bottom: var(--size-7);
  }
</style>