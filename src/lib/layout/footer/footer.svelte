<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import MpgLogoB from '$lib/assets/icons/mpg-logo-b.svelte';
</script>

<footer id="f">
	<div class="t">
		<nav>
			<a href="/contact">Contact Us</a>
			<a href="/privacy">Privacy Policy</a>
			<a href="/terms">Terms and Conditions</a>
		</nav>
		<a class="d-o btn" href="mailto:showroom@maisonpyramide.com">BOOK AN APPOINTMENT</a>
	</div>

	<div class="logo">
		<LogoB />
	</div>

	<a class="m-o btn" href="mailto:showroom@maisonpyramide.com">BOOK AN APPOINTMENT</a>

	<div class="b">
		<a class="l" href="https://www.maisonpyramidegroup.com/" target="_blank">
			<MpgLogoB />
		</a>
		<div class="r">
			<a href="https://www.instagram.com/maisonpyramideshowroom/" target="_blank">INSTAGRAM</a>
			<a href="mailto:showroom@maisonpyramide.com" target="_blank">SHOWROOM@MAISONPYRAMIDE.COM</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 32rem var(--p-i);
		display: flex;
		flex-direction: column;
		background-color: white;
		@media (width < 770px) {
			padding-block: 16rem var(--p-i);
		}
	}

	.t {
		display: flex;
		@media (width < 770px) {
			order: 3;
			flex-direction: column;
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
	.btn {
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
			flex-direction: column-reverse;
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
