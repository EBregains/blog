<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'light'}
		<div in:fly={{ x: 10 }} class="left bg-dark">
			<Sun size="24" />
		</div>
	{:else}
		<div in:fly={{ x: -10 }} class="right bg-light">
			<Moon color="#FFF" size="24" />
		</div>
	{/if}
</button>

<style>
	button {
    margin: 0;
    color: var(--text-1);
		padding: 4px;
		width: 62px;
		font-weight: inherit;
		background: none;
		border: 1px solid var(--text-2);
		box-shadow: none;
		cursor: pointer;
		border-radius: 24px;
		overflow: hidden;
	}
	button > * {
		display: flex;
		gap: var(--size-2);
	}
	div {
		padding: 0;
		display: flex;
		align-items: center;
		background: var(--background-1);
		border-radius: 50%;
	}

	.left {
		transform: translateX(-12px);
	}
	.right {
		transform: translateX(14px);
	}
</style>
