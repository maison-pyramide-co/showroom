<script lang="ts">
	import Logo from '$lib/assets/icons/logo-w.svelte';
	import banI from '$lib/assets/images/home/ban.png';
	import banMI from '$lib/assets/images/home/ban-m.png';
</script>

<section>
	<picture>
		<source srcset={banI} media="(min-width: 770px)" />
		<img src={banMI} width="auto" height="auto" alt="logo" />
	</picture>

	<div class="logo">
		<Logo />
	</div>

	<div class="date">
		30.09.2026<br />
		07.10.2026
	</div>

	<div class="location">
		45 , AVENUE MARCEAU <br />
		PARIS, FRANCE 75116
	</div>

	<div class="season">
		<div>SS</div>
		<div>27</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: 100dvh;
		padding-inline: var(--p-i);
		padding-bottom: 32rem;
		display: flex;
		flex-direction: column;
		color: white;
		position: relative;
		@media (width < 770px) {
			height: 800rem;
			padding-bottom: 24rem;
		}
	}
	picture {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.logo {
		padding-top: 72rem;
	}
	.date {
		margin-top: 24rem;
		font-weight: bold;
		font-size: 55rem;
		line-height: 1;
		@media (width < 770px) {
			margin-top: auto;
			font-size: 40rem;
		}
	}
	.location {
		margin-top: 120rem;
		font-size: 55rem;
		line-height: 1;
		text-align: right;
		align-items: flex-end;
		@media (width < 770px) {
			margin-top: 80rem;
			font-size: 40rem;
		}
	}
	.season {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		font-size: 112rem;
		@media (width < 770px) {
			margin-top: 32rem;
			font-size: 80rem;
		}
	}
</style>
