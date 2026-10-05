<script>
	import im1 from '$lib/assets/images/contact/form1.png';
	import im2 from '$lib/assets/images/contact/form2.png';
</script>

<section>
	<div class="l">
		<figure>
			<img src={im1} alt="" />
		</figure>
		<figure>
			<img src={im2} alt="" />
		</figure>
	</div>
	<div class="r">
		<h2>SEND US A MESSAGE</h2>
		<form action="">
			<input type="text" placeholder="Subject" />
			<input type="text" placeholder="Name" />
			<input type="text" placeholder="Email Address" />
			<input type="text" placeholder="Message" />
			<button type="submit">SEND</button>
		</form>
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 72rem;
		justify-content: space-between;
		padding-right: var(--p-i);
		padding-top: 100rem;
		@media (width < 770px) {
			margin-top: 160rem;
			padding-right: 0;
			flex-direction: column-reverse;
		}
	}
	.l {
		display: flex;
		gap: 24rem;
		align-items: center;
	}
	figure {
		width: 310rem;
		@media (width < 770px) {
			width: unset;
		}
	}
	.r {
		width: 710rem;
		@media (width < 770px) {
			width: unset;
			padding-inline: var(--p-i);
		}
	}
	h2 {
		font-size: 30rem;
		font-weight: 400rem;
		@media (width < 770px) {
			font-size: 25rem;
		}
	}
	form {
		margin-top: 48rem;
		display: flex;
		flex-direction: column;
		gap: 48rem;
	}
	input {
		padding-bottom: 16rem;
		border-bottom: 1px solid white;
		width: 100%;
		color: white;
		font-size: 20rem;
	}
	input::placeholder {
		color: white;
		opacity: 70%;
	}
	button {
		padding: 10rem 24rem;
		border: 1px solid white;
		border-radius: 100rem;
		align-self: flex-end;
		color: white;
		margin-top: 40rem;
		@media (width < 770px) {
			align-self: flex-start;
		}
	}
</style>
