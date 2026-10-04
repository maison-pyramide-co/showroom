<script lang="ts">
	import services from '$lib/data/services';
	import Service from './service.svelte';
	let activeService = $state(null);

	const toggleActiveService = (i: any) => {
		activeService = activeService === i ? null : i;
	};
</script>

<section>
	<h2>SERVICES</h2>
	<ul>
		{#each services as service, i}
			<li>
				<Service {service} open={activeService == i} toggle={() => toggleActiveService(i)} />
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		padding-top: 64rem;
		@media (width < 770px) {
			padding-top: 48rem;
		}
	}
	h2 {
		font-size: 20rem;
		font-weight: 500;
		text-align: center;
	}
	ul {
		margin-top: 96rem;
		max-width: 1050rem;
		margin-inline: auto;
		@media (width < 770px) {
			margin-top: 40rem;
			padding-inline: var(--p-i);
		}
	}
</style>
