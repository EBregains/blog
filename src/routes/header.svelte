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
    class="wrapper "
    on:click={() => active = !active}
    on:keypress={() => active = !active}
    tabindex="0"
    class:selected = {active}
  ></div>
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
  <div class="toggle">
    <Toggle />
  </div>
</nav>

<style>
  nav {
    padding-block: var(--size-3);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'title toggle links';
    align-items: center;
    justify-items: center;
  }
  .wrapper {
    border: solid var(--border-size-1) var(--gray-5);
    border-radius: var(--radius-blob-3);
    padding: var(--size-2);
    width: var(--size-8);
    grid-area: links;
  }
  .wrapper:hover {
    background: var(--surface-4);
  }
  .wrapper::before{
    margin: 7px;
    content: '☰';
  }
  .selected {
    background: var(--surface-3);
  }
  .selected::before {
    content: 'X';
    margin: 10px;
  }
  .links {
    visibility: hidden;
    padding-block: var(--size-3);
    margin-block: var(--size-2);
    background-color: var(--surface-4);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-1) var(--gray-5);
    position: absolute;
    z-index: 1;
  }
  li {
    padding: var(--size-1);
  }
  .active {
    visibility:visible;
    padding: var(--size-3);
    background: var(--surface-4);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .toggle {
    grid-area: toggle;
    justify-self: center;
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
  .title:hover {
    animation: logo-on-hover 2s infinite;
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

  /* animations */
  @keyframes logo-on-hover {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

</style>