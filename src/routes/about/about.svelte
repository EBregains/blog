<script lang="ts">
	import { fly, draw, fade } from 'svelte/transition';
	import type { PageData } from '../$types';
</script>

<section>
	<div class='content' in:fly={{ x: -200 }}>
		<hgroup>
			<h2>Hi! I am</h2>
			<h1>Emiliano</h1>
		</hgroup>
		<p>And welcome to my place.</p>
		<div class="tags">
			<a href="#skills">skills</a>
			<a href="#projects">projects</a>
		</div>
	</div>
	<div class="blob" in:fade={{ duration: 1000 }}>
		<img src="/profile-pic.jpg" alt="Emi posing" loading="lazy" />
	</div>
</section>

<style>
	section {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		text-align: start;
		height: 510px;
	}
  .content  {
    display: flex;
    width: 50%;
    padding-left: var(--size-fluid-7);
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: var(--size-2);
  }
	h2 {
		font-size: var(--font-size-fluid-2);
	}
	h1 {
		font-size: var(--font-size-fluid-3);
		background: var(--linear-gradient-1);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	hgroup {
		padding-block: var(--size-2);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-blob-5);
	}
	.blob {
		width: 500px;
    height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: solid 1px var(--surface-5); */
		border-radius: var(--radius-blob-5);
		justify-self: start;
		-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
		filter: grayscale(60%);
		animation: grayscale-fade 1s linear forwards;
	}
	@media (max-width: 1024px) {
		section {
			display: flex;
			flex-direction: column-reverse;
			height: max-content;
			padding-block: var(--size-9);
			padding-inline: var(--size-3);
		}
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-block: var(--size-4);
		}

		div .tags {
			display: inline-block;
		}
		.blob {
			width: 260px;
			height: 260px;
		}
	}

	@keyframes grayscale-fade {
		0% {
			-webkit-filter: grayscale(60%); /* Safari 6.0 - 9.0 */
			filter: grayscale(60%);
		}
		100% {
			-webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
			filter: grayscale(0%);
		}
	}
</style>
