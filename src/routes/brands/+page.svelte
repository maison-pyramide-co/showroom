<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import brands, { slugify } from '$lib/data/brands';
	import gsap from 'gsap';
	import { onMount } from 'svelte';

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

	let img: HTMLImageElement;
	let src = $state('');

	const show = (brand: { image: string }) => {
		src = brand.image;

		gsap.fromTo(
			img,
			{ autoAlpha: 0, scale: 0.9 },
			{ autoAlpha: 1, scale: 1, duration: 0.4, ease: 'power3.out', overwrite: true }
		);
	};

	const hide = () => {
		gsap.to(img, { autoAlpha: 0, duration: 0.3, ease: 'power2.out', overwrite: true });
	};

	let page: HTMLElement;

	onMount(() => {
		// return animation(page);
	});
</script>

<!-- <main id="p" style:opacity="0" bind:this={page}> -->
<main id="p">
	<a href="/">
		<LogoB />
	</a>

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
			<li onmouseenter={() => show(brand)} onmouseleave={hide}>
				<a href={`/brands/${slugify(brand.name)}`}>
					{brand.name}
				</a>
			</li>
		{/each}
	</ul>

	<img bind:this={img} {src} alt="" />
</main>

<style lang="scss">
	:global(#h) {
		mix-blend-mode: difference;
	}
	main {
		padding-top: calc(var(--h-h) + 32rem);
		padding-bottom: 80rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			padding-top: 64rem;
			padding-bottom: 72rem;
		}
	}
	nav {
		margin-top: 80rem;
		display: flex;
		justify-content: center;
		gap: 88rem;

		@media (width < 770px) {
			margin-top: 56rem;
			gap: 40rem;
		}
	}
	button {
		font-size: 20rem;
		font-weight: 500;
		text-transform: uppercase;
		@media (width < 770px) {
			font-size: 15rem;
		}
	}
	button.active {
		font-weight: bold;
	}
	ul {
		margin-top: 64rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		@media (width < 770px) {
			margin-top: 56rem;
		}
	}
	li {
		font-size: 60rem;
		line-height: 1;
		text-transform: capitalize;
		cursor: pointer;
		@media (width < 770px) {
			font-size: 30rem;
			line-height: 1.2;
		}
	}
	img {
		position: fixed;
		top: 370rem;
		left: 70rem;
		width: 320rem;
		aspect-ratio: 1;
		height: auto;
		pointer-events: none; /* never blocks the hover on the list */
		z-index: 10;
		opacity: 0;
		visibility: hidden;
		z-index: -1;
	}
</style>
