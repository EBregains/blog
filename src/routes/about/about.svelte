<script lang="ts">
  import { fly, draw, fade } from "svelte/transition";
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
  <div class="blob" in:fade={{duration: 1000}}> 

  </div>
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    text-align: center;
    height: 510px;
    padding-inline: var(--size-9);
  }
  
  h2 {
    font-size: var(--font-size-fluid-2);
  }
  h1 {
    font-size: var(--font-size-fluid-3);
    background: var(--linear-gradient-1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  hgroup {
    padding-block: var(--size-2);
  }
  .blob {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--surface-5);
    border-radius: var(--radius-blob-5);
    background: url('/profile-pic.jpg') no-repeat center center;
    background-size: cover;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(60%);
    animation: grayscale-fade 1s linear forwards;

  }
  @media (max-width: 1024px) {
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
    .blob {
      width: 260px;
      height: 260px;
    }
  }

  @keyframes grayscale-fade {
    0% {
      -webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
      filter: grayscale(60%);
    }
    100% {
      -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
      filter: grayscale(0%);
    }
  }
</style>