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
	}

	.logo {
		position: relative;
		z-index: 1;
	}

	figure {
		margin-top: -56rem;
		width: 560rem;
		margin-inline: auto;
	}
	h2 {
		position: absolute;
		bottom: 80rem;
		font-size: 200rem;
		text-align: center;
		width: 100%;
		line-height: 1;
	}
</style>
