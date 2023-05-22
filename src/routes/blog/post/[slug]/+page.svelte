<script lang="ts">
	import { formatDate } from "$lib/utils";
	import * as config from "$lib/config";
  import type { PageData } from "./$types";

  export let data: PageData;
  
</script>

<svelte:head>
  <title>{data.meta.title} | {config.title}</title>
  <meta property="og:type" content="article">
  <meta property="og:title" content={data.meta.title}>
</svelte:head>

<article>
  <hgroup>
    <h1>{data.meta.title}</h1>
    <p>Published at {formatDate(data.meta.date)}</p>
  </hgroup>

  <div class="tags">
    {#each data.meta.categories as category}
      <a href={`/blog/categories/${category}`} class="surface-4">&num;{category}</a>
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={data.content}/>
  </div>
</article>

<style>
  article {
    max-inline-size: var(--size-content-3);
    margin-inline: auto;
    margin-top: var(--size-9);
  }

  h1 {
    text-transform: capitalize;
  }

  h1 + p {
    margin-top: var(--size-1);
    color: var(--text-2);
  }

</style>