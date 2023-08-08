<script lang="ts">
	import { fly, draw, fade } from 'svelte/transition';
	import type { Post } from '$lib/types';
	import { sineOut } from 'svelte/easing';
	import Wheel from '$lib/svgs/Wheel.svelte';

	export let projects: Post[];
	let hoveredProject: Post | null = null;
</script>

<section id="projects">
	<div class="blob">
		{#if hoveredProject}
			<img
				in:fade={{ duration: 1000 }}
				src={hoveredProject.image}
				alt={hoveredProject.title}
				loading="lazy"
			/>
		{:else}
      <Wheel />
		{/if}
	</div>
	<div class="projects-container" in:fly={{ y: 200, delay: 500 }}>
		<h2>Projects</h2>
		<div class="tags">
			<a href="#projects">svelte</a>
			<a href="#projects">react</a>
			<a href="#projects">angular</a>
      <a href="#projects">typescript</a>
		</div>
		<ol>
			{#each projects as project}
				<li
					class="project"
					on:mouseenter={() => (hoveredProject = project)}
					on:mouseleave={() => (hoveredProject = null)}
				>
					<a href={`/blog/post/${project.slug}`} target="_blank">
						{project.title}
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	section {
		width: 100%;
		display: grid;
		grid-template-columns: 50% 50%;
		place-items: start;
		height: 700px;
		padding-block: var(--size-fluid-4);
	}
	.projects-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		padding-block: var(--size-8);
		padding-inline: var(--size-3);
	}
	.projects-container ol {
		width: 80%;
		display: flex;
		gap: var(--size-2);
		flex-direction: column;
		align-items: center;
		margin-block: var(--size-2);
		overflow-y: auto;
	}
	.project {
		width: 100%;

		padding-block: var(--size-2);
		padding-inline: var(--size-7);
		background: var(--surface-3);
		font-size: var(--font-size-fluid-1);
	}

	.project::before {
		content: '> ';
		font-weight: bold;
		background: var(--linear-gradient-1);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.project:hover {
		animation: project-hover 0.3s ease-out forwards;
	}

	.project a {
		color: var(--text-1);
	}

	.blob {
		width: 90%;
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: solid 1px var(--surface-5);*/
		border: none;
		border-radius: var(--radius-blob-5);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-blob-5);
	}

	@media (max-width: 1024px) {
		section {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: auto;
			background: var(--surface-3);
			border-radius: var(--radius-3);
		}
		.projects-container {
			width: 100%;
			align-items: center;
			padding-inline: var(--size-fluid-4);
			padding-top: var(--size-fluid-2);
			padding-bottom: 0;
		}
		.projects-container ol {
			display: inline-flex;
			height: 100%;
			margin-block: var(--size-3);
		}
		.project {
			display: flex;
			width: 100%;
			height: 200px;

			text-align: center;
			align-items: center;
			justify-content: center;
			border-radius: var(--radius-3);
			background: var(--surface-2);
			text-transform: uppercase;
			font-size: var(--font-size-fluid-3);
			font-weight: bold;
		}

		.project a {
			color: var(--surface-5);
		}
		.project::before {
			content: '';
		}
		.blob {
			display: none;
		}
		svg {
			display: block;
		}
	}

	@keyframes project-hover {
		0% {
		}
		100% {
			background: var(--surface-4);
			padding-left: var(--size-8);
		}
	}
</style>
