<script lang="ts">
	import { onMount } from 'svelte';
	import animation from './_a';
	import Brands from './c/brands.svelte';
	import Hero from './c/hero.svelte';
	import Prtnrships from './c/prtnrships.svelte';

	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<Hero />
	<Brands />
	<Prtnrships />
</main>

<style>
	main {
		padding-bottom: 120rem;
	}
</style>
