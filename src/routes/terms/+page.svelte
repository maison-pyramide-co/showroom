<script lang="ts">
	import LogoB from '$lib/assets/icons/logo-b.svelte';
</script>

<main>
	<a href="/">
		<LogoB />
	</a>

	<h1>TERMS OF USE</h1>
	<p>
		The present General Terms of Use (hereinafter the “Terms of Use”) are those of the Maison
		Pyramide’s Group of companies (the “Group”) consisting of the legal entities forming the group
		being the Showroom (Offshore) S.A.L and the Factory Egypt. Your relationship with either entity
		of the Group on this Website shall be regulated separately by the present Terms of Use. In
		addition, Your relationship with either entity of the Group shall be separate and distinct from
		Your possible relationship with another entity of the Group. Under no circumstances whatsoever,
		shall the entities of the Group be deemed or held jointly and severally liable towards You, on
		any grounds whatsoever.
		<br />
		<br />

		<strong>GENERAL</strong>
		<br />
		<br />

		On the Group’s website showroom.maisonpyramide.com (the “Website”), professional buyers
		retailers (hereinafter the “Professional Buyer Retailer (s)”) and professional brands
		(hereinafter the “Professional Brand (s)”) are offered a unique and global access fo a unique
		electronic showroom experience during major world fashion-weeks, as well as to an online
		ordering experience and system, during and after the major world fashion-weeks, with regard to
		global professional fashion brands’ products displayed during showroom events organized by the
		entities of the Group. These Terms of Use shall govern the relationship between you (“You”,
		“Your”) as a Professional Buyer Retailer or a Professional Brand as the case may be visitor of
		the Website and the entity of the Group with whom You are dealing (hereinafter referred to by
		“We”, “Us”, “Our”) including without limitation regarding the use of the Website and the use of
		the information, content and data publicly available on the Website. For the Professional Brand
		(s), You hereby acknowledge and agree that Your relationship with the relevant entity of the
		Group with whom You are dealing shall be governed by Your E-Showroom contract including without
		limitation in relation to the services the relevant entity of the Group provides to You (the
		“E-Showroom Contract”) as entered into with such entity of the Group in addition to these Terms
		of Use and only to the extent that such Terms of Use are not in contradiction with the E-
		Showroom Contract entered into whereby in such latter instance the E-Showroom Contract shall
		prevail.

		<br />
		<br />
		<!-- <span class="red"> -->
		THESE TERMS OF USE INCLUDE OUR PRIVACY POLICY WHICH IS INCORPORATED AND MADE A PART OF THESE TERMS
		OF USE. BY ACCESSING OR USING OUR WEBSITE, YOU AGREE TO BE BOUND BY THESE TERMS, INCLUDING OUR PRIVACY
		POLICY.
		<!-- </span> -->
	</p>
</main>

<style lang="scss">
	main {
		padding-top: calc(var(--h-h) + 32rem);
		padding-bottom: 80rem;
		padding-inline: var(--p-i);
		@media (width < 770px) {
			padding-top: 64rem;
			padding-bottom: 72rem;
		}
	}
	h1 {
		font-size: 30rem;
		font-weight: 600;
		text-align: center;
		margin-top: 80rem;
		@media (width < 770px) {
			text-align: left;
		}
	}
	p {
		max-width: 800rem;
		font-size: 15rem;
		font-weight: 450;
		margin-top: 80rem;
		margin-inline: auto;
		text-align: center;
		@media (width < 770px) {
			text-align: left;
		}
	}
	.red {
		color: red;
	}
</style>
