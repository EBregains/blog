export type Categories =
	| 'sveltekit'
	| 'svelte'
  | 'react'
  | 'angular'
	| 'test'
	| 'thoughts'
	| 'other'
	| 'accessibility'
	| 'javascript'
	| 'HTML'
	| 'entry-level'
	| 'project';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
	image: string;
};
