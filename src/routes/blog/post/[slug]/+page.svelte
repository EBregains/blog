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

    <!-- {#if data.meta.repository}
      <a href={data.meta.repository} target="_blank">
        <img class="logo" src="/github-mark.png" alt="github logo">
        <p>Repository</p>
      </a>
    {/if} -->
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
    height: var(--size-fluid-9);
    object-fit: cover;
    border-radius: var(--radius-blob-5);
  }
  h1 {
    text-transform: capitalize;
    word-wrap: normal;
  }

  h1 + p {
    margin-top: var(--size-1);
    color: var(--text-2);
  }

  hgroup {
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 100%;
  }
  .prose {
    box-sizing: border-box;
    grid-area: prose;
  }

  .title {
    padding-left: var(--size-5);
    grid-area: title;
    justify-self: start;
  }

  .logo {
      width: var(--size-fluid-5);
      height: var(--size-fluid-5);
      margin-top: var(--size-1);
    }
  
  @media (max-width: 768px) {
    article { 
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: var(--size-1);
    }

    article > img {
      object-fit: cover;
      position: absolute;
      z-index: -1;
      top: var(--size-fluid-6);
      left: 0;
      width: 100%;
      max-height: var(--size-fluid-10);
      border-radius: 0;
      border: none;
    }


    .title {
      display: block;
      margin-top: var(--size-fluid-9);
      padding-inline: 0;
      width: 100%;
      overflow-x: hidden;
    }
  }
</style>