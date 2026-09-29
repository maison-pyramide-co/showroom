<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import brands from '$lib/data/brands';
	const categories = ['all', 'rtw', 'jwl', 'ftw / acc'];
	let activeCategory = $state('all');

	const toggleActiveCategory = (cat: string) => {
		if (activeCategory == cat) return;
		activeCategory = cat;
	};

	let filteredBrands = $derived(
		activeCategory && activeCategory !== 'all'
			? brands.filter((b) => b.category.includes(activeCategory.replace(/\s/g, '')))
			: brands
	);
</script>

<main>
	<LogoB />

	<nav>
		{#each categories as category (category)}
			<button
				onclick={() => toggleActiveCategory(category)}
				class:active={activeCategory === category}>{category}</button
			>
		{/each}
	</nav>

	<ul>
		{#each filteredBrands as brand (brand.id)}
			<li>{brand.name}</li>
		{/each}
	</ul>
</main>

<style lang="scss">
	:global(#h) {
		mix-blend-mode: difference;
	}
	main {
		padding-top: calc(var(--h-h) + 32rem);
		padding-bottom: 80rem;
		padding-inline: var(--p-i);
	}
	nav {
		margin-top: 80rem;
		display: flex;
		justify-content: center;
		gap: 88rem;
	}
	button {
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
	}
	button.active {
		font-weight: bold;
	}
	ul {
		margin-top: 64rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	li {
		font-size: 60rem;
		line-height: 1;
		text-transform: capitalize;
	}
</style>
