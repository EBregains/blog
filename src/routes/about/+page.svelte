<script lang="ts">
  import * as config from "$lib/config";
	import type { Post } from "$lib/types";
	import type { PageData } from "./$types";
  import About from "./about.svelte";
  import Projects from "./projects.svelte";
	import Skills from "./skills.svelte";

  export let data: PageData;
  export let projects: Post[];

  $: projects = data.projectPosts;
</script>

<svelte:head>
  <title>{config.title} | About</title>
</svelte:head>

  <div class="container">
    <About />
    <Projects projects={projects}/>
    <Skills />
  </div>

<style>
  .container { 
    display: flex;
    padding: 0;
    margin: 0;

    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding-inline: var(--size-9);
  }

  @media (max-width: 1024px) {
    .container {
      padding-inline: 0;
    }
  }
</style>