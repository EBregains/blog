<script lang="ts">
  import * as config from '$lib/config'
	import Toggle from './toggle.svelte';
  
  let active = false;
</script>

<nav>
  <a href="/about" class="title">
    <b>{config.title}</b>
  </a>

  <div class="hamburger">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div 
    class="wrapper"
    on:click={() => active = !active}
    on:keypress={() => active = !active}
    tabindex="0"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
      />
    </svg>
  </div>
  <ul class="links" class:active>
    <li>
      <a on:click={() => active = !active} href="/about">About</a>
    </li>
    <li>
      <a on:click={() => active = !active} href="/blog">Blog</a>
    </li>
    <li>
      <a on:click={() => active = !active} href="/contact">Contact</a>
    </li>
    <li>
      <a on:click={() => active = !active} href="/rss.xml" target="_blank">RSS</a>
    </li>
  </ul>
  </div>

  <Toggle />
</nav>

<style>
  nav {
    padding-block: var(--size-3);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .wrapper {
    border: solid var(--border-size-1) var(--gray-5);
    border-radius: var(--radius-blob-2);
    padding: var(--size-2);
    width: fit-content;
  }
  .links {
    visibility: hidden;
    padding-block: var(--size-3);
    background-color: var(--surface-4);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-1) var(--gray-5);
    position: absolute;
  }
  li {
    padding: var(--size-1);
  }
  .active {
    visibility:visible;
    padding: var(--size-3);

  }
  a {
    color: inherit;
    text-decoration: none;
  }

  .title {
    margin-block: var(--size-2);
    border-radius: var(--radius-blob-5);
    border: var(--border-size-1) solid var(--gray-1);
    padding: var(--size-3);
    background: linear-gradient(to bottom, var(--purple-3), var(--violet-3), var(--indigo-3), var(--cyan-3));
    color: var(--surface-1);
    font-size: var(--font-size-fluid-1);
    width: fit-content;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .wrapper {
      display: none;
    }
    .links {
      display: flex;
      visibility: visible;
      background: none;
      position: relative;
      gap: var(--size-7);
    }
  }
</style>