<script lang="ts">
  import { fly } from "svelte/transition";
  import { Moon, Sun } from 'lucide-svelte';
  import { theme, toggleTheme } from "$lib/theme";
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
  {#if $theme === 'dark'}
    <div in:fly={{ y: 10 }}>
      <Sun size="24" />
      <span> Go Light</span>
    </div>
  {:else}
    <div in:fly={{y:-10}}>
      <Moon size="24" />
      <span> Go Dark</span>
    </div>
  {/if}
</button>

<style>
  button {
    padding: 0;
    font-weight: inherit;
    background: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    overflow: hidden;
  }
  button > * {
    display: flex;
    gap: var(--size-2);
  }
</style>