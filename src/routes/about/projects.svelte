<script lang='ts'>
  import { fly, draw } from "svelte/transition";
	import type { Post } from "$lib/types";
  import { blob1 } from "$lib/blobs";

  export let projects: Post[];
</script>

<section id="projects" >
  <div class="blob">
    <svg xmlns="http://www.w3.org/2000/svg"
    width="1500" height="1500"
    viewBox="0 0 100 100">
 <path id="blob-1"
       in:draw={{duration: 2000}}
       fill="none" stroke="white" stroke-width="0.1"
       d={blob1} />
</svg>
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
        <li>
          <a href={`/blog/post/${project.slug}`}>
            {project.title}
          </a>
        </li>
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
    height: 700px;
    margin-block: var(--size-4);
  }
  .projects-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-block: var(--size-8);
    padding-inline: var(--size-3);
  }
  .projects-container ol {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-block: var(--size-2);
    overflow-y: auto;
  }
  .projects-container ol li {
    width: 100%;
    padding-bottom: var(--size-7);
    padding-inline: var(--size-7);
    margin-bottom: var(--size-7);
    border-bottom: var(--border-size-1) solid var(--border);
    font-size: var(--font-size-fluid-1);
    color: var(--secondary);
  }

  @media (max-width: 768px) {
    section {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      background: var(--surface-3);
    }
    .projects-container {
      width: 100%;
      padding-inline: var(--size-4);
      padding-block: var(--size-9);
    }
    .projects-container ol {
      display: inline-flex;
      background: var(--surface-2);;
      height: 100%;
      margin-block: var(--size-3);
      overflow-y: auto;
      overflow-x: scroll;
    }
    .projects-container ol li {
      border-radius: var(--border-blob-1);
      width: 100%;
      height: 300px;
    }
    .blob {
      display: none;
    }
  }

</style>