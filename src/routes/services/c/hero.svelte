<script lang="ts">
	import LogoW from '$lib/assets/icons/logo-w.svelte';
	import banI from '$lib/assets/images/services/ban.png';
	import banMI from '$lib/assets/images/services/ban-m.png';
</script>

<section>
	<picture>
		<source srcset={banI} media="(min-width: 770px)" />
		<img src={banMI} width="auto" height="auto" alt="logo" />
	</picture>

	<a href="/" class="logo">
		<LogoW />
	</a>
	<div class="txt1">
		CONNECTING BRANDS WITH THE RIGHT MARKETS, RETAILERS AND OPPORTUNITIES WORLDWIDE.
	</div>
	<div class="txt2">
		BUILDING BRANDS WITH
		<span>CLARITY, PURPOSE</span>
		AND LONG-TERM VISION
	</div>
	<div class="txt3">WE HELP BRANDS ENTER NEW MARKETS & BUILD THE RIGHT DISTRIBUTION.</div>
</section>

<style>
	section {
		min-height: 100vh;
		min-height: 100dvh;
		padding-inline: var(--p-i);
		padding-bottom: 32rem;
		display: flex;
		flex-direction: column;
		color: white;
		position: relative;
		@media (width < 770px) {
			height: 800rem;
			min-height: unset;
			padding-bottom: 48rem;
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
	.txt1 {
		width: 450rem;
		margin-top: 80rem;
		margin-right: 100rem;
		margin-left: auto;
		line-height: 1;
		@media (width < 770px) {
			width: 240rem;
			margin-top: 100rem;
			margin-right: 0;
		}
	}
	.txt2 {
		margin-top: 128rem;
		font-size: 56rem;
		line-height: 85%;
		margin-left: auto;
		line-height: 85%;
		@media (width < 770px) {
			font-size: 25rem;
			margin-top: 180rem;
		}
	}
	.txt2 span {
		display: block;
		margin-right: 32rem;
		text-align: right;
	}
	.txt3 {
		margin-top: 128rem;
		width: 480rem;
		font-size: 20rem;
		line-height: 1;
		@media (width < 770px) {
			width: 300rem;
			margin-top: 180rem;
		}
	}
</style>
