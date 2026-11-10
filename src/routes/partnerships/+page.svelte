<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import partnerships from '$lib/data/partnerships';
	import { onMount } from 'svelte';
	import animation from './_a';

	let page: HTMLElement;

	onMount(() => {
		return animation(page);
	});
</script>

<main id="p" style:opacity="0" bind:this={page}>
	<a href="/" class="logo" data-ga="ir">
		<LogoB />
	</a>
	<h1 data-ga="tr">CONNECTING TALENT, MARKETS<br />AND GLOBAL OPPORTUNITY.</h1>
	<ul>
		{#each partnerships as prt}
			<li>
				<div>
					<span data-ga="tr">{prt.client}</span>
					<figure style:width={`${prt.width}px`} data-ga="ir">
						<img src={prt.image} alt="" />
					</figure>
					<span data-ga="tr">{prt.country}</span>
				</div>

				<h3 data-ga="tr">{prt.name}</h3>
				<p data-ga="tr">{prt.description}</p>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding-block: 80rem;
	}
	.logo {
		display: block;
		padding-inline: var(--p-i);
	}
	h1 {
		margin-top: 88rem;
		font-size: 55rem;
		text-align: center;
		font-weight: bold;
		line-height: 1;
		@media (width < 770px) {
			margin-top: 48rem;
			font-size: 20rem;
		}
	}
	ul {
		margin-top: 80rem;
		padding-inline: 72rem;
		@media (width < 770px) {
			margin-top: 48rem;
			padding-inline: var(--p-i);
		}
	}
	li {
		margin-top: 40rem;
	}
	li div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h3 {
		margin-top: 8rem;
		font-size: 30rem;
		font-weight: bold;
		text-align: center;
		@media (width < 770px) {
			font-size: 15rem;
		}
	}
	p {
		width: 750rem;
		margin-top: 8rem;
		font-size: 30rem;
		/* text-transform: uppercase; */
		text-align: center;
		margin-inline: auto;
		line-height: 1;
		@media (width < 770px) {
			width: 300rem;
			font-size: 13rem;
		}
	}
	span {
		width: 300rem;
		flex-shrink: 0;
		text-transform: uppercase;
		@media (width < 770px) {
			width: 90rem;
			font-size: 10rem;
		}
	}
	span:last-child {
		text-align: right;
	}
</style>
