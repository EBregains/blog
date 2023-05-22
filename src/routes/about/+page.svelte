<script lang="ts">
  import * as config from "$lib/config";
  import About from "./about.svelte";
  import Projects from "./projects.svelte";
</script>

<svelte:head>
  <title>{config.title} | About</title>
</svelte:head>

<div class="container">
  <About />
    <Projects />
  <section>
    <h2>My name is</h2>
    <p>My name is</p>
  </section>
</div>

<style>
  .container { 
    display: flex;

    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>