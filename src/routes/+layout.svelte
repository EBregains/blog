<script lang="ts">
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import PageTransition from '../transition.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';

	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="layout">
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		width: 100%;
		max-inline-size: 1440px;
		margin-inline: auto;
		display: grid;
		grid-template-rows: auto 1fr auto;
		padding-inline: var(--size-9);
	}

	main {
		padding-bottom: var(--size-9);
		display: inline-block;
		height: 100%;
		width: 100%;
	}

	@media (max-width: 768px) {
		.layout {
			padding-inline: 0;
		}
		main {
			padding-inline: var(--size-7);
		}
	}
</style>
