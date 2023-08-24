<script lang="ts">
	import type { PageData } from './$types';
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils';

	export let data: PageData;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<h2>Latest</h2>
	<ul class="posts">
		{#each data.posts as post}
			<li class="card">
				<a href={`/blog/post/${post.slug}`} class="post">
        <article>
          <span></span>
          <div class="details">
            <h4 class="title">{post.title}</h4>
            <p class="date">{formatDate(post.date)}</p>
            <p class="description">{post.description}</p>
          </div>
        </article>

        </a>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		width: 90%;
    line-height: 1.8rem;
		margin-inline: auto;
		margin-block: var(--size-7);
	}
	h2 {
		margin-block: var(--size-fluid-5);
		font-size: var(--font-size-fluid-3);
	}
	h2::before {
		content: '#';
		padding-right: var(--size-3);
		color: var(--text-2);
		font-weight: 100;
	}

  article {
    height: 480px;
    display: grid;
    grid-template-rows: min-content;
    padding: var(--size-5);
    border-radius: var(--radius-4 );
    background: var(--surface-4);
    transition: all 0.3s ease;
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.02);
    border: 4px solid var(--cyan-3);
  }

	.posts {
		display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--size-4);
	}

  .card {
    margin: 0;
    padding: 0;
    transition: all 0.3s ease-in-out;
  }
	.post {
    display: block;
    color: inherit;
    text-decoration: none;
    transition: color 0.15s ease-in-out;
	}

	.title {
		font-size: var(--font-size-6);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
		padding-bottom: var(--size-7);
	}

	.description {
		font-size: var(--font-size-2);
	}

  .details {
    align-self: end;
  }
</style>
