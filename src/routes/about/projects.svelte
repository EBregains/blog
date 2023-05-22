<script lang='ts'>

</script>

<section class="projects" id="projects">
  <h2>Projects</h2>
  <p>Projects</p>
</section>

<style>
  
  section {
    display: grid;
    grid-template-rows: auto 1fr;
    place-items: center;
    padding-block: var(--size-9);
    position: relative;
    width: 100%;
    height: 480px;
  }
  .projects::before {
  content: "";
  position: absolute;
  border-radius: var(--radius-4);
  width: 130%;
  max-inline-size: 1440px;
  height: 100%;
  z-index: -1;
  background: var(--surface-3) 0 0 repeat;
  }

</style>