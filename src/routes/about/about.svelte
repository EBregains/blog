<script lang="ts">
  import { fly, draw } from "svelte/transition";
	import type { PageData } from "../$types";
  import { blob1 } from "$lib/blobs";

</script>

<section>
  <div in:fly={{x: -200}}>    
    <hgroup>
      <h2>Hi! I am</h2>
      <h1>Emiliano</h1>
    </hgroup>
    <p>And welcome to my WIP webpage.</p>
    <div class="tags">
      <a href="#skills">skills</a>
      <a href="#projects">projects</a>
    </div>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg"
    width="400" height="400"
    viewBox="0 0 90 90">
      <path id="blob-1"
        in:draw={{duration: 2000}}
        fill="none" stroke="white" stroke-width="0.1"
        d={blob1} 
      />
    </svg>
  </div>
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    height: 510px;
    padding-inline: var(--size-9);
  }

  path {
    stroke: var(--text-1);
  }
  
  h2 {
    font-size: var(--font-size-fluid-2);
  }
  h1 {
    font-size: var(--font-size-fluid-3);
    background: linear-gradient(to bottom,var(--purple-3),var(--violet-3),var(--indigo-3),var(--cyan-3));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  hgroup {
    padding-block: var(--size-2);
  }
  @media (max-width: 768px) {
    section {
      display: flex;
      flex-direction: column-reverse;
      height: max-content;
      padding-block: var(--size-9);
      padding-inline: var(--size-3);
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-block: var(--size-4);
    }

    div .tags {
      display: inline-block;
    }
  }

</style>