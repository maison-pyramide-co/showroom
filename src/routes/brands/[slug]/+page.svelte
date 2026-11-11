<script lang="ts">
	// import { onMount } from 'svelte';
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import animation from './_a.ts';

	let { data } = $props();
	let page: HTMLElement;

	const brand = $derived(data.brand)!;
	const related = $derived(data.related);

	const labels: Record<string, string> = {
		rtw: 'Ready to wear',
		'ftw/acc': 'Footwear & accessories',
		jwl: 'Jewelry'
	};

	const categoryLabel = $derived(brand.category.map((c) => labels[c] ?? c).join(' · '));

	$effect(() => {
		data.brand?.slug; // read it so the effect re-runs when the brand changes

		return animation(page); // cleanup (ctx.revert) runs before each re-run
	});

	// onMount(() => {
	// 	return animation(page);
	// });
</script>

<svelte:head>
	<title>{brand.name}</title>
	<meta name="description" content={brand.description} />
</svelte:head>

<main id="p" style:opacity="0" bind:this={page}>
	<a href="/" class="logo">
		<LogoB />
	</a>

	{#key brand.slug}
		<h1 class="brand_name">{brand.name}</h1>
	{/key}
	<figure class="brand_image">
		<img src={brand.image} alt="" />
	</figure>

	{#key brand.slug}
		<p class="brand_desc">{brand.description}</p>
	{/key}

	<h3>EXPLORE {categoryLabel} BRANDS</h3>
	<ul>
		{#each related as item, i (item.id)}
			<li>
				<a href="/brands/{item.slug}">{item.name}</a>
				{#if i < related.length - 1}<span>,</span>{/if}
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding-top: 80rem;
		padding-bottom: 120rem;
		@media (width < 770px) {
			padding-inline: var(--p-i);
		}
	}
	.logo {
		display: block;
		padding-inline: var(--p-i);
	}
	h1 {
		margin-top: 80rem;
		text-align: center;
		font-size: 30rem;
		text-transform: uppercase;
		font-weight: 600;
		@media (width < 770px) {
			margin-top: 64rem;
		}
	}
	figure {
		margin-top: 64rem;
		margin-inline: auto;
		aspect-ratio: 5/5.5;
		width: 350rem;
		@media (width < 770px) {
			width: 290rem;
			margin-top: 40rem;
			width: 290rem;
		}
	}
	p {
		width: 500rem;
		margin-inline: auto;
		line-height: 1;
		font-weight: 450;
		text-align: center;
		margin-top: 24rem;
		@media (width < 770px) {
			width: 290rem;
		}
	}
	h3 {
		margin-top: 120rem;
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
		@media (width < 770px) {
			margin-top: 80rem;
		}
	}
	ul {
		margin-top: 64rem;
		display: flex;
		width: 700rem;
		margin-inline: auto;
		flex-wrap: wrap;
		justify-content: center;
		@media (width < 770px) {
			width: 100%;
		}
	}
	li {
		font-size: 40rem;
		line-height: 1;
		display: flex;
		opacity: 0.7;
		&:hover {
			opacity: 1;
		}
		@media (width < 770px) {
			font-size: 24rem;
		}
	}
	span {
		padding-right: 8rem;
	}
</style>
