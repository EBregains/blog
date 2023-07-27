<script lang="ts">
  import { draw } from "svelte/transition";
  import Hammer from "$lib/svgs/Hammer.svelte";
</script>

<section id="skills">
  <div>
  <h2>Skills</h2>
  
  <p>This section is currently getting fixed! Come 
    back soon to see the result!</p>
  </div>
    <div class="hammer">
	<Hammer></Hammer>
  </div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--size-5);
		height: 700px;
		margin-block: var(--size-4);
	}
  div {
    width: 50%;
    max-width: 300px;
  }
</style>
