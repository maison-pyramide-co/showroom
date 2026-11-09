<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/reset.css';
	import '$lib/styles/utils.css';
	import Header from '$lib/layout/header/header.svelte';
	import Footer from '$lib/layout/footer/footer.svelte';

	let { children } = $props();
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	const isHome = $derived(page.url.pathname === '/');

	const setBlend = (on: boolean) => gsap.set('#h', { mixBlendMode: on ? 'difference' : 'normal' });

	$effect(() => {
		if (!isHome) {
			setBlend(true);
			return;
		}

		setBlend(false);
		let st: ScrollTrigger | undefined;
		let cancelled = false;

		tick().then(() => {
			requestAnimationFrame(() => {
				const hero = document.querySelector('#s-hero');
				if (cancelled || !hero) return;

				st = ScrollTrigger.create({
					trigger: hero,
					start: 'bottom top+=60',
					onEnter: () => setBlend(true),
					onLeaveBack: () => setBlend(false),
					invalidateOnRefresh: true
				});
			});
		});

		return () => {
			cancelled = true;
			st?.kill();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MP SHOWROOM</title>
</svelte:head>

<Header />
{@render children()}
<Footer />
