<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
	export const TRANSITION_DURATION = 300;
</script>

{#key url}
	<div class="transition" in:fade={{ duration: TRANSITION_DURATION }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}
</style>
