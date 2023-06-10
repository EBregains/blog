<script lang="ts">
	import { formatDate } from "$lib/utils";
	import * as config from "$lib/config";
  import type { PageData } from "./$types";

  export let data: PageData;
  console.log(data);
  
  
</script>

<svelte:head>
  <title>{data.meta.title} | {config.title}</title>
  <meta property="og:type" content="article">
  <meta property="og:title" content={data.meta.title}>
</svelte:head>

<article>
  <img src={data.profile} alt={data.meta.title}/>
  <div class='title'>
    <hgroup>
      <h1>{data.meta.title}</h1>
      <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>

    <div class="tags">
      {#each data.meta.categories as category}
        <a href={`/blog/categories/${category}`} class="surface-4">{category}</a>
      {/each}
    </div>
  </div>
  <div class="prose">
    <svelte:component this={data.content}/>
  </div>
</article>

<style>
  article {
    display: grid;
    place-items: center;
    grid-template-areas: 'image title'
                         'prose prose';
    margin-inline: auto;
    margin-top: var(--size-9);
  }

  img {
    grid-area: image;
    width: var(--size-fluid-9);
    border-radius: var(--radius-blob-5);
  }
  h1 {
    text-transform: capitalize;
  }

  h1 + p {
    margin-top: var(--size-1);
    color: var(--text-2);
  }

  .prose {
    grid-area: prose;
  }

  .title {
    padding-left: var(--size-5);
    grid-area: title;
    justify-self: start;
  }

  @media (max-width: 768px) {
    article { 
      grid-template-areas: 'image'
                           'title'
                           'prose';
      flex-direction: column;
    }

    img {
      object-fit: cover;
      position: absolute;
      z-index: -1;
      top: var(--size-fluid-6);
      left: 0;
      width: 100vw;
      max-height: var(--size-fluid-10);
      border-radius: 0;
    }

    .title {
      justify-self: center;
      margin-top: var(--size-fluid-9);
      padding-top: var(--size-fluid-5);

    }
  }
</style>