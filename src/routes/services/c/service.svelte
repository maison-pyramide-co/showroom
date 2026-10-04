<script lang="ts">
	const { service, open, toggle } = $props();
	let contentEl: any;
	let contentHeight = $derived(open ? contentEl.offsetHeight : 0);
</script>

<div class="acc" class:active={open}>
	<div class="acc_h">
		<span>//0{service.id}</span>
		{service.name}

		<button type="button" onclick={toggle}>
			{open ? 'READ LESS' : 'READ MORE'}
		</button>
	</div>

	<div class="acc_b_" style="height: {contentHeight + 'px'}; ">
		<div class="acc_b" bind:this={contentEl}>
			<figure>
				<img src={service.image} alt="" />
			</figure>
			<p>{service.description}</p>
		</div>
	</div>
</div>

<style>
	.acc {
		padding-block: 12rem;
	}

	.acc_h {
		padding-left: 160rem;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		font-size: 20rem;
		font-weight: 450;
		text-transform: uppercase;
		@media (width < 770px) {
			padding-left: 50rem;
			font-size: 12rem;
			gap: 24rem;
		}
	}
	.acc_h span {
		font-weight: 500;
		position: absolute;
		left: 0;
		@media (width < 770px) {
			font-size: 10rem;
		}
	}
	button {
		justify-self: flex-end;
		font-size: 14rem;
		border-bottom: 1px solid black;
		flex-shrink: 0;

		@media (width < 770px) {
			font-size: 10rem;
		}
	}
	.acc_b_ {
		height: 0;
		overflow: hidden;
		transition: height 0.2s ease-out;
	}
	.acc_b {
		padding-block: 56rem 40rem;
		padding-left: 160rem;
		display: flex;
		gap: 40rem;
		align-items: flex-end;
		@media (width < 770px) {
			padding-left: 50rem;
			padding-block: 24rem 40rem;
			gap: 16rem;
		}
	}
	.acc_b figure {
		flex-shrink: 0;
		width: 530rem;
		@media (width < 770px) {
			width: 180rem;
		}
	}
	.acc_b p {
		font-size: 15rem;
		line-height: 1;
		font-weight: 450;
		text-transform: uppercase;
		@media (width < 770px) {
			font-size: 12rem;
		}
	}
</style>
