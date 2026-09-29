<script lang="ts">
	import Logo from '$lib/assets/icons/logo-w.svelte';
	import banI from '$lib/assets/images/home/home-ban.png';
</script>

<section>
	<figure>
		<img src={banI} alt="" />
	</figure>
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
	}
	figure {
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
	}
	.location {
		margin-top: 120rem;
		font-size: 55rem;
		line-height: 1;
		text-align: right;
		align-items: flex-end;
	}
	.season {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		font-size: 112rem;
	}
</style>
