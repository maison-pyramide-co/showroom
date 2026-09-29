<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/reset.css';
	import '$lib/styles/utils.css';
	import Header from '$lib/layout/header/header.svelte';
	import Footer from '$lib/layout/footer/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>MP SHOWROOM</title>
</svelte:head>

<Header />
{@render children()}
<Footer />
