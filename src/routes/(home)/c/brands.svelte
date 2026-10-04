<script lang="ts">
	import brand1I from '$lib/assets/images/home/brand1.png';
	import brand2I from '$lib/assets/images/home/brand2.png';
	import brand3I from '$lib/assets/images/home/brand3.png';
	import brand4I from '$lib/assets/images/home/brand4.png';
</script>

<section>
	<h2 class="m-o">BRANDS</h2>
	<div class="t">
		<img src={brand1I} alt="" />
		<img src={brand2I} alt="" />
		<img src={brand3I} alt="" />
		<img src={brand4I} alt="" />
	</div>
	<div class="b">
		<h2 class="d-o">BRANDS</h2>
		<a href="/brands">DISCOVER OUR BRANDS</a>
	</div>
</section>

<style>
	section {
		padding: 160rem 90rem;
		@media (width < 770px) {
			padding: 48rem var(--p-i);
		}
	}
	.t {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		@media (width < 770px) {
			grid-template-columns: 1fr 1fr;
			margin-top: 32rem;
		}
	}
	.b {
		margin-top: 24rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (width < 770px) {
			margin-top: 32rem;
			justify-content: center;
		}
	}
	h2 {
		font-size: 30rem;
		font-weight: 450;
		@media (width < 770px) {
			font-size: 25rem;
			text-align: center;
		}
	}
	a {
		font-size: 14rem;
		padding: 4rem 24rem;
		background-color: black;
		color: white;
		border-radius: 99rem;
	}
</style>
