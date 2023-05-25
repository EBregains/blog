<script lang="ts">
  import * as config from "$lib/config";
</script>

<svelte:head>
  <title>{config.title} | Contact</title>
</svelte:head>

<section>
  <div>
    <h2>Contact</h2>
    <p>Alo, who's here?</p>
  </div>
</section>

<style>
section {
  width: 100%;
  display: grid;
  place-items: center;
  height: 500px;
  margin-block: var(--size-4);
}
</style>