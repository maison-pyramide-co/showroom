<script lang="ts">
	import Chev from '$lib/assets/icons/chev.svelte';
	import LogoB from '$lib/assets/icons/logo-b.svelte';
	import MpgLogo from '$lib/assets/icons/mpg-logo.svelte';
	import { page } from '$app/state';
	const isContact = page.url.pathname == '/contact';
</script>

<footer id="f">

	<div class="t">
		<div class="newsletter">
			<h4>SIGN UP FOR <span>MP SHOWROOM</span> UPDATES</h4>
			<form action="">
				<input type="email" placeholder="Email" />
				<button type="submit">
					<Chev />
				</button>
			</form>
			<p>
				By entering your email address above, you agree to receive marketing messages from MP
				SHOWROOM and agree to our terms of service and privacy policy.
			</p>
		</div>
		<nav>
			<a href="/about">About</a>
			<a href="/contact">Contact Us</a>
			<a href="/faq">Careers</a>
		</nav>
		<nav class="d-o">
			<a href="/privacy">Privacy Policy</a>
			<a href="/careers">FAQ</a>
			<a href="/faq">Book An Appointment</a>
		</nav>
	</div>

	<div class="logo">
		<LogoB />
	</div>

	<div class="b">
		<div class="l">
			<MpgLogo />
		</div>
		<div class="r">
			<a href="/">INSTAGRAM</a>
			<a href="mailto:showroom@maisonpyramide.com">SHOWROOM@MAISONPYRAMIDE.COM</a>
		</div>
	</div>

	<nav class="m-o">
		<a href="/privacy">Privacy Policy</a>
		<a href="/careers">FAQ</a>
	</nav>
</footer>

<style>
	footer {
		padding: 32rem var(--p-i);
		@media (width < 770px) {
			padding-block: 16rem var(--p-i);
		}
	}
	.t {
		display: flex;
		@media (width < 770px) {
			flex-direction: column;
			max-width: 300rem;
			margin-inline: auto;
		}
	}
	.newsletter {
		flex: 4;
	}
	h4 {
		font-weight: 450;
	}
	h4 span {
		font-weight: bold;
	}
	form {
		width: 320rem;
		margin-top: 32rem;
		border-bottom: 1px solid black;
		position: relative;
		@media (width < 770px) {
			width: unset;
		}
	}
	input {
		padding-bottom: 12rem;
	}
	input::placeholder {
		opacity: 50%;
	}
	form button {
		position: absolute;
		right: 0;
		bottom: 12rem;
		width: 16rem;
	}
	.newsletter p {
		margin-top: 32rem;
		width: 430rem;
		font-size: 12rem;
		font-weight: 300;
		line-height: 1;
		@media (width < 770px) {
			width: unset;
			text-align: center;
		}
	}

	nav {
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 16rem;
		@media (width < 770px) {
			flex-direction: row;
			justify-content: center;
			margin-top: 40rem;
		}
	}
	nav a {
		font-weight: 14rem;
		font-weight: 300;
	}
	.logo {
		margin-top: 120rem;
		@media (width < 770px) {
			margin-top: 48rem;
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
	nav.m-o {
		margin-top: 24rem;
		justify-content: space-between;
		font-size: 10rem;
	}
</style>
