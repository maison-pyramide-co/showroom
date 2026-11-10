<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper/bundle';
	import 'swiper/css';
	import partnerships from '$lib/data/partnerships';
	import ChevB from '$lib/assets/icons/chev-b.svelte';
	const srvs = [
		'Feedback on applicants and selection of winners',
		'Mentoring of Prize Winners',
		'Wholesale representation'
	];
	let index = $state(0);

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			spaceBetween: '0',
			loop: true,
			navigation: {
				nextEl: '.swiper_ .next-btn',
				prevEl: '.swiper_ .prev-btn'
			},
			pagination: {
				el: '.s-imp .pg',
				type: 'fraction',
				formatFractionCurrent: (number) => {
					return number < 10 ? `0${number}` : number;
				}
			}
		});

		swiper.on('slideChange', () => {
			index = swiper.realIndex;
		});
	});
</script>

<section id="s-prtnrships">
	<h2 data-ga="tr">PARTNERSHIPS</h2>

	<div class="h">
		<h3>{partnerships[index].name}</h3>
		<a href="/partnerships" class="d-o">VIEW ALL PARTNERSHIPS</a>
	</div>
	<div class="swiper_">
		<div class="services">
			<h3>SERVICES</h3>
			<p class="m-o">{srvs.join(' // ')}</p>
			<ul class="d-o">
				{#each srvs as srv, i}
					<li>
						{srv}
						{#if i < srvs.length - 1}
							<span>//</span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
		<div class="swiper">
			<div class="swiper-wrapper">
				{#each partnerships as psh}
					<div class="swiper-slide">
						<figure data-ga="ir">
							<img src={psh.image} alt={psh.name} />
						</figure>
					</div>
				{/each}
			</div>
		</div>
		<nav>
			<button class="prev-btn m-o">
				<ChevB />
			</button>
			<button class="next-btn">
				<ChevB />
			</button>
		</nav>
	</div>
</section>

<style lang="scss">
	section {
		padding-inline: var(--p-i);
	}
	h2 {
		font-size: 30rem;
		font-weight: 450;
		line-height: 1;
		@media (width < 770px) {
			font-size: 25rem;
			text-align: center;
		}
	}
	.h {
		margin-top: 8rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		padding-right: 56rem;

		@media (width < 770px) {
			padding-right: 0;
			justify-content: center;
		}
	}
	.h h3 {
		font-size: 50rem;
		line-height: 1;
		font-weight: 600;
		@media (width < 770px) {
			text-align: center;
			font-size: 30rem;
		}
	}
	a {
		padding-bottom: 2rem;
		border-bottom: 1px solid black;
	}
	.swiper_ {
		margin-top: 56rem;
		display: flex;
		justify-content: center;
		position: relative;
		@media (width < 770px) {
			margin-top: 40rem;
			flex-direction: column;
		}
	}
	.services {
		width: 220rem;
		position: absolute;
		left: 56rem;
		top: 50%;
		transform: translateY(-50%);

		@media (width < 770px) {
			order: 3;
			position: static;
			width: unset;
			transform: unset;
			margin-top: 32rem;
		}
	}
	.services h3 {
		font-size: 20rem;
		font-weight: 450;
		@media (width < 770px) {
			font-size: 16rem;
			text-align: center;
		}
	}
	ul {
		margin-top: 16rem;
		@media (width < 770px) {
			margin-top: 24rem;
		}
	}
	li {
		font-size: 15rem;
		line-height: 1;
		@media (width < 770px) {
			font-size: 12rem;
		}
	}
	.services p {
		text-align: center;
		line-height: 1;
		margin-top: 16rem;
	}
	.swiper {
		/* width: 690rem; */
		width: 500rem;
		@media (width < 770px) {
			width: 100%;
		}
	}
	figure {
		/* width: 690rem; */
		/* aspect-ratio: 4/3; */
		aspect-ratio: 4/5;
		width: 500rem;
		@media (width < 770px) {
			width: 100%;
		}
	}
	nav {
		position: absolute;
		top: 50%;
		right: 56rem;
		transform: translateY(-50%);
		@media (width < 770px) {
			position: static;
			width: unset;
			transform: unset;
			display: flex;
			justify-content: center;
			margin-top: 24rem;
		}
	}
	button:first-child {
		transform: rotate(180deg);
	}
	button :global(svg) {
		width: 24rem;
		@media (width < 770px) {
			width: 16rem;
		}
	}
</style>
