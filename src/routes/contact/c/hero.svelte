<script lang="ts">
	import LogoW from '$lib/assets/icons/logo-w.svelte';
	import banI from '$lib/assets/images/contact/ban.png';
</script>

<section>
	<div class="logo">
		<LogoW />
	</div>
	<figure>
		<img src={banI} alt="" />
	</figure>
	<h2>LET'S TALK</h2>
</section>

<style>
	section {
		padding-top: 80rem;
		padding-inline: var(--p-i);
		position: relative;
		@media (width < 770px) {
		}
	}

	.logo {
		position: relative;
		z-index: 1;
	}

	figure {
		margin-top: -56rem;
		width: 560rem;
		margin-inline: auto;

		@media (width < 770px) {
			margin-top: 64rem;
			width: 290rem;
			height: 520rem;
		}
	}
	h2 {
		position: absolute;
		bottom: 80rem;
		font-size: 200rem;
		text-align: center;
		width: 100%;
		line-height: 1;
		@media (width < 770px) {
			font-size: 100rem;
			font-width: 600;
			bottom: -80rem;
			left: 0;
		}
	}
</style>
