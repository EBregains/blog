<script lang="ts">
	let active = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="wrapper"
	class:active
	on:click={() => (active = !active)}
	on:keypress={() => (active = !active)}
	tabindex="0"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		width="24px"
		height="24px"
	>
		<path d="M0 0h24v24H0z" fill="none" />
		<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
	</svg>
</div>

<ul class="links">
	<li>
		<a href="/about">About</a>
	</li>
	<li>
		<a href="/blog">Blog</a>
	</li>
	<li>
		<a href="/contact">Contact</a>
	</li>
	<li>
		<a href="/rss.xml" target="_blank">RSS</a>
	</li>
</ul>

<style>
	.wrapper {
		border: solid var(--border-size-1) var(--gray-5);
		border-radius: var(--radius-3);
		font-size: var(--font-size-);
		padding: var(--size-2);
		width: auto;
		cursor: pointer;
		color: var(--surface-1);
		background: var(--gray-5);
	}

	.wrapper:hover {
		background: var(--gray-4);
	}

	.active {
		background: var(--gray-4);
	}
</style>
