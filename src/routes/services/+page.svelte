<script lang="ts">
	import Hero from './c/hero.svelte';
	import Services from './c/services.svelte';
</script>

<main>
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
