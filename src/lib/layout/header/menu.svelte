<script lang="ts">
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
		gap: 80rem;
	}
	/* MENU NAV */
	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20rem;
	}

	a {
		font-size: 30rem;
		line-height: 1;
		letter-spacing: 10%;
		font-weight: 500;
		text-transform: uppercase;
	}
</style>
