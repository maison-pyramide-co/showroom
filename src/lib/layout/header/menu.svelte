<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';

	const menu = [
		{
			title: 'brands',
			link: '/brands' as const
		},
		{
			title: 'services',
			link: '/services' as const
		},
		{
			title: 'partnerships',
			link: '/partnerships' as const
		},
		{
			title: 'contact us',
			link: '/contact' as const
		}
	];
</script>

<div id="menu" class="menu">
	<nav>
		{#each menu as item, i}
			<a href={item.link}>
				<div class="y_">
					<div class="ti">{item.title}</div>
				</div>
			</a>
		{/each}
	</nav>
	<div class="b">
		<LogoB />
		<div>
			<a href="https://www.instagram.com/maisonpyramideshowroom/">INSTAGRAM</a>
			<a href="mailto:showroom@maisonpyramide.com">SHOWROOM@MAISONPYRAMIDE.COM</a>
		</div>
	</div>
</div>

<style lang="scss">
	:global(#h) {
		mix-blend-mode: difference;
	}
	.menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
		background-color: white;
		padding-inline: var(--p-i);
		padding-top: var(--h-h);
		height: 100vh;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 80rem;
		padding-bottom: 80rem;
	}
	/* MENU NAV */
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20rem;
	}

	nav a {
		font-size: 30rem;
		line-height: 1;
		letter-spacing: 10%;
		font-weight: 600;
		text-transform: uppercase;
	}
	.b {
		padding-inline: var(--p-i);
		position: absolute;
		bottom: 40rem;
		left: 0;
	}
	.b div {
		margin-top: 16rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12rem;
	}

	.b a:first-child {
		font-weight: 450;
	}
	.b a:last-child {
		font-weight: 300;
	}
</style>
