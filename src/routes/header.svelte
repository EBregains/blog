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
  <ol class="links" class:active>
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
  </ol>
  </div>
  <div class="toggle">
    <Toggle />
  </div>
</nav>

<style>
  nav {
    padding-block: var(--size-2);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: 'title toggle links';
    align-items: center;
    justify-items: center;
    background: var(--surface-1);
    border-bottom: var(--border-size-1) solid var(--gray-7);
  }
  .wrapper {
    border: solid var(--border-size-1) var(--gray-5);
    border-radius: var(--radius-blob-3);
    padding: var(--size-2);
    width: var(--size-8);
    grid-area: links;
  }
  .wrapper:hover {
    background: var(--surface-2);
  }
  .wrapper::before{
    margin: 7px;
    content: '☰';
  }
  .selected {
    background: none;
  }
  .selected:hover {
    background: none;
  }
  .selected::before {
    content: '✖';
    margin: 8px;
  }
  .links {
    visibility: hidden;
    padding-block: var(--size-3);
    margin-block: var(--size-2);
    background-color: var(--surface-4);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2);
    position: absolute;
    right: 0;
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
  li a, a:hover {
    color: var(--text-1);
    text-decoration: none;
  }

  .toggle {
    grid-area: toggle;
    justify-self: center;
  }

  .title {
    margin-block: var(--size-2);
    border-radius: var(--radius-blob-5);
    padding: var(--size-fluid-2);
    border: var(--border-size-1) solid var(--gray-5);
    background: linear-gradient(to bottom,var(--purple-3),var(--violet-3),var(--indigo-3),var(--cyan-3));
    color: var(--surface-1);
    font-size: var(--size-fluid-2);
    width: fit-content;
  }
  .title:hover{
    color: var(--surface-1);
    animation: logo-on-hover 2s ease-in-out infinite;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: none;
      border-bottom: none;
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
      box-shadow: none;
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