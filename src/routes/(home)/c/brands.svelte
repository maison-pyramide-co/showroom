<script lang="ts">
	import { brands } from '$lib/data/brands'; // whatever you export from that file
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';

	const images = brands.map((b) => b.image).filter(Boolean);

	const SLOTS = 4;
	let shown = $state(images.slice(0, SLOTS));
	let imgEls: HTMLImageElement[] = [];

	let next = SLOTS; // index of the next image to bring in
	let slot = 0; // which placeholder to replace

	const preload = (src: string) =>
		new Promise<void>((resolve) => {
			const i = new Image();
			i.onload = i.onerror = () => resolve();
			i.src = src;
		});

	const swap = async () => {
		const i = slot;
		const el = imgEls[i];
		const src = images[next % images.length];

		slot = (slot + 1) % SLOTS;
		next++;

		await preload(src); // no flash while the new image loads

		gsap
			.timeline()
			// .to(el, { autoAlpha: 0, duration: 0., ease: 'power2.in' })
			.add(() => (shown[i] = src));
		// .to(el, { autoAlpha: 1, duration: 0.4, ease: 'power3.out' });
	};

	onMount(() => {
		const id = setInterval(swap, 2000);
		return () => clearInterval(id);
	});
</script>

<section id="s-brands">
	<h2 class="m-o">BRANDS</h2>
	<div class="t">
		{#each shown as src, i}
			<img bind:this={imgEls[i]} {src} alt="" />
		{/each}
	</div>
	<div class="b">
		<h2 class="d-o">BRANDS</h2>
		<a href="/brands">DISCOVER OUR BRANDS</a>
	</div>
</section>

<style>
	section {
		padding: 160rem 90rem;
		@media (width < 770px) {
			padding: 48rem var(--p-i) 80rem;
		}
	}
	.t {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		@media (width < 770px) {
			grid-template-columns: 1fr 1fr;
			margin-top: 32rem;
		}
	}
	.b {
		margin-top: 24rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (width < 770px) {
			margin-top: 32rem;
			justify-content: center;
		}
	}
	h2 {
		font-size: 30rem;
		font-weight: 450;
		@media (width < 770px) {
			font-size: 25rem;
			text-align: center;
		}
	}
	a {
		font-size: 14rem;
		padding: 4rem 24rem;
		background-color: black;
		color: white;
		border-radius: 99rem;
	}
</style>
