<script lang="ts">
	import ChevW from '$lib/assets/icons/chev-w.svelte';
	import ChevB from '$lib/assets/icons/chev-b.svelte';
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import MpgLogoW from '$lib/assets/icons/mpg-logo-w.svelte';
	import MpgLogoB from '$lib/assets/icons/mpg-logo-b.svelte';
	import { page } from '$app/state';
	import LogoW from '$lib/assets/icons/logo-w.svelte';
	const isBlack = $derived(page.url.pathname === '/contact');
</script>

<footer id="f" class:black={isBlack}>
	<div class="t">
		<nav>
			<a href="/contact">Contact Us</a>
			<a href="/privacy">Privacy Policy</a>
			<a href="/terms">Terms and Conditions</a>
		</nav>
		<button class="d-o">BOOK AN APPOINTMENT</button>
		<!-- <nav class="d-o">
			<a href="/">Privacy Policy</a>
			<a href="/">FAQ</a>
			<a href="/">Book An Appointment</a>
		</nav> -->
	</div>

	<div class="logo">
		{#if isBlack}
			<LogoW />
		{:else}
			<LogoB />
		{/if}
	</div>

	<button class="m-o">BOOK AN APPOINTMENT</button>

	<div class="b">
		<div class="l">
			{#if isBlack}
				<MpgLogoW />
			{:else}
				<MpgLogoB />
			{/if}
		</div>
		<div class="r">
			<a href="https://www.instagram.com/maisonpyramideshowroom/">INSTAGRAM</a>
			<a href="mailto:showroom@maisonpyramide.com">SHOWROOM@MAISONPYRAMIDE.COM</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 32rem var(--p-i);
		display: flex;
		flex-direction: column;
		@media (width < 770px) {
			padding-block: 16rem var(--p-i);
		}
	}
	footer.black {
		background-color: black;
		color: white;
	}

	.t {
		display: flex;
		@media (width < 770px) {
			order: 3;
			flex-direction: column;
			/* max-width: 300rem; */
			/* margin-inline: auto; */
		}
	}

	nav {
		flex: 2;
		display: flex;
		gap: 120rem;
		@media (width < 770px) {
			justify-content: space-between;
			margin-top: 40rem;
			gap: unset;
		}
	}
	nav a {
		font-size: 14rem;
		font-weight: 300;
	}
	button {
		font-size: 14rem;
		padding: 4rem 24rem;
		border-radius: 99rem;
		border: 1px solid black;
		@media (width < 770px) {
			margin-top: 40rem;
			align-self: center;
		}
	}

	.logo {
		margin-top: 56rem;
		@media (width < 770px) {
			margin-top: 0;
		}
	}
	.b {
		margin-top: 32rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;

		@media (width < 770px) {
			flex-direction: column;
			align-items: center;
			gap: 20rem;
		}
	}
	.b .l {
		width: 360rem;
		@media (width < 770px) {
			width: 300rem;
		}
	}
	.b .r {
		display: flex;
		gap: 40rem;

		@media (width < 770px) {
			font-size: 12rem;
		}
	}
	.b .r a:first-child {
		font-weight: 450;
	}
	.b .r a:last-child {
		font-weight: 300;
	}
</style>
