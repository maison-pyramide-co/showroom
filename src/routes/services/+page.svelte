<script lang="ts">
	import { onMount } from 'svelte';
	import animation from './_a';
	import Hero from './c/hero.svelte';
	import Services from './c/services.svelte';

	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<Hero />
	<Services />
</main>

<style>
	main {
		padding-bottom: 120rem;

		@media (width < 770px) {
			padding-bottom: 80rem;
		}
	}
</style>
