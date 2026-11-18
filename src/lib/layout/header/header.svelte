<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import animation from './_a';
	import Menu from './menu.svelte';

	let menuOpened = $state(false);
	let headerHidden = $state(false);

	$effect(() => {
		if (page.url.pathname) menuOpened = false;
		let lastY = window.scrollY;
		const threshold = 10; // ignore trackpad/sensor jitter
		const revealZone = 80; // always show near the very top

		function onScroll() {
			const y = window.scrollY;
			const delta = y - lastY;

			if (Math.abs(delta) < threshold) return;

			headerHidden = y > revealZone && delta > 0;
			lastY = y;
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	onMount(() => {
		animation();
	});
</script>

<header id="h" style:opacity="0" class:hidden={headerHidden && !menuOpened}>
	<div class="l d-o">
		<a href="/brands">brands</a>
		<a href="/services">services</a>
		<a href="/partnerships">partnerships</a>
	</div>
	<div class="r d-o">
		<a href="/contact">contact us</a>
	</div>

	<button
		class={menuOpened ? 'open m-o' : 'm-o'}
		onclick={() => {
			menuOpened = !menuOpened;
		}}
		aria-label="menu"
	>
		<span class="y"></span>
		<span class="y"></span>
	</button>
</header>

{#if menuOpened}
	<Menu />
{/if}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		width: 100%;
		padding-inline: var(--p-i);
		/* mix-blend-mode: difference; */
		display: flex;
		justify-content: space-between;
		padding-top: 24rem;
		@media (width < 770px) {
			justify-content: flex-end;
		}
	}
	header.hidden {
		transform: translateY(-100%);
		opacity: 0 !important;
	}
	div {
		display: flex;
		gap: 40rem;
		color: white;
	}
	a {
		/* font-size: 15rem; */
		text-transform: uppercase;
		font-weight: 450;
	}
	button {
		display: flex;
		flex-direction: column;
		gap: 8rem;
		overflow: visible !important;
		--line-h: 2rem;
		--gap: 8rem;
	}

	button .y {
		display: block;
		width: 34rem;
		height: 2rem;
		background: white;
		transform-origin: center;
		transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
	}
	button.open .y:first-of-type {
		transform: translateY(calc(var(--gap) / 2 + var(--line-h) / 2)) rotate(35deg);
	}
	button.open .y:last-of-type {
		transform: translateY(calc(-1 * (var(--gap) / 2 + var(--line-h) / 2))) rotate(-35deg);
	}
</style>
