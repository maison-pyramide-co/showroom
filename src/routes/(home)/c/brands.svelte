<script lang="ts">
	import brand1I from '$lib/assets/images/home/brand1.png';
	import brand2I from '$lib/assets/images/home/brand2.png';
	import brand3I from '$lib/assets/images/home/brand3.png';
	import brand4I from '$lib/assets/images/home/brand4.png';
</script>

<section>
	<div class="t">
		<img src={brand1I} alt="" />
		<img src={brand2I} alt="" />
		<img src={brand3I} alt="" />
		<img src={brand4I} alt="" />
	</div>
	<div class="b">
		<h2>BRANDS</h2>
		<a href="/brands">DISCOVER OUR BRANDS</a>
	</div>
</section>

<style>
	section {
		padding: 160rem 90rem;
	}
	.t {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
	.b {
		margin-top: 24rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h2 {
		font-size: 30rem;
		font-weight: 450;
	}
	a {
		font-size: 14rem;
		padding: 4rem 24rem;
		background-color: black;
		color: white;
		border-radius: 99rem;
	}
</style>
