<script lang="ts">
  import { fly } from "svelte/transition";
	import type { PageData } from "../$types";

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
    <p class="picture"></p>
  </div>
</section>

<style>
  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    height: 480px;
    padding-inline: var(--size-9);
  }
  
  h2 {
    font-size: var(--font-size-fluid-2);
  }
  h1 {
    font-size: var(--font-size-fluid-3);
    color: var(--secondary);
  }
  hgroup {
    padding-block: var(--size-2);
  }
  .picture::after {
    content: "";
    position: absolute;
    top: 160px;
    left: 50%;
    border-radius: var(--radius-blob-4);
    width: 480px;
    height: 400px;
    z-index: -2;
    border: var(--border-size-1) solid var(--text-1);
  }

  @media (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
      height: auto;
      padding-block: var(--size-9);
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
  }

</style>