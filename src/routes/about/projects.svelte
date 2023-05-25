<script lang='ts'>
  import { fly } from "svelte/transition";
	import type { Post } from "$lib/types";

  export let projects: Post[];

</script>

<section id="projects" >
  <div>
    <p class="picture"></p>
  </div>
  <div class="projects-container" in:fly={{x:200}}>
    <h2>Projects</h2>
    <div class="tags">
      <a href="#projects">svelte</a>
      <a href="#projects">react</a>
      <a href="#projects">typescript</a>
    </div>
    <ol>
      {#each projects as project}
        <li>{project.title}</li>
      {/each}
    </ol>
  </div>
</section>

<style>

  
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    place-items: center;
    height: 500px;
    margin-block: var(--size-4);
  }
  .picture::after {
    content: "";
    position: absolute;
    top: 640px;
    right: 55%;
    border-radius: var(--radius-blob-3);
    width: 480px;
    height: 440px;
    z-index: -1;
    border: var(--border-size-1) solid var(--text-1);
  }

  .projects-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;
    justify-content: start;
    padding-block: var(--size-8);
  }
  .projects-container ol {
    margin-block: var(--size-7);
    width: 100%;
    height: 220px;
    overflow-y: auto;
  }

  .projects-container ol li {
    padding-block: var(--size-3);
    border-bottom: 1px solid var(--surface-4);
  }

  @media (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
      height: auto;
      overflow: hidden;
      background: var(--surface-3);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    div .tags {
      display: flex;
      flex-direction: row;
    }
    .picture::after {
      display: none;
    }
    .projects-container {
      padding-inline: var(--size-9);
    }
  }

</style>