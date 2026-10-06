<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';

	let { data } = $props();
	const brand = $derived(data.brand);
	const related = $derived(data.related);

	const labels: Record<string, string> = {
		rtw: 'Ready to wear',
		'ftw/acc': 'Footwear & accessories',
		jwl: 'Jewelry'
	};

	const categoryLabel = $derived(brand.category.map((c) => labels[c] ?? c).join(' · '));
</script>

<svelte:head>
	<title>{brand.name}</title>
	<meta name="description" content={brand.description} />
</svelte:head>

<main id="page">
	<a href="/" class="logo">
		<LogoB />
	</a>

	<h1>{brand.name}</h1>
	<figure>
		<img src={brand.image} alt="" />
	</figure>

	<p>{brand.description}</p>

	<h3>EXPLORE {categoryLabel} BRANDS</h3>
	<ul>
		{#each related as item (item.id)}
			<li>
				<a href="/brands/{item.slug}">{item.name}</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding-top: 80rem;
		padding-bottom: 120rem;
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
	}
	figure {
		margin-top: 64rem;
		margin-inline: auto;
		aspect-ratio: 5/5.5;
		width: 350rem;
	}
	p {
		width: 500rem;
		margin-inline: auto;
		line-height: 1;
		font-weight: 450;
		text-align: center;
		margin-top: 24rem;
	}
	h3 {
		margin-top: 120rem;
		text-transform: uppercase;
		text-align: center;
		font-weight: 500;
	}
	ul {
		margin-top: 64rem;
		display: flex;
		width: 700rem;
		margin-inline: auto;
	}
	li {
		font-size: 40rem;
		line-height: 1;
	}
</style>
