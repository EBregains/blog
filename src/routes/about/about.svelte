<script lang="ts">
  import { fly } from "svelte/transition";

</script>

<section>
  <div in:fly={{x: -200}}>    
    <hgroup>
      <h2>Hi! I am</h2>
      <h1>Emiliano</h1>
    </hgroup>
    <p>And welcome to my WIP webpage.</p>
    <div class="tags">
      <a href="#projects" class="surface-4">&num;projects</a>
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
    grid-template-columns: 40% 60%;
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
  .picture::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    border-radius: var(--radius-blob-4);
    width: 480px;
    height: 400px;
    z-index: -2;
    background: var(--text-1);
  }

</style>