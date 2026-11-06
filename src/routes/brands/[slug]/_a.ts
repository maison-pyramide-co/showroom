import { textsA } from '$lib/utils/animation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const heroA = (q: gsap.utils.SelectorFunc) => {
	const $logo = q('.logo')[0];
	const $image = q('.brand_image')[0];
	const $brand_name = q('.brand_name')[0];
	const $brand_desc = q('.brand_desc')[0];

	// .date and .location are single elements; .season expands to its two child divs
	const texts = [$brand_name, $brand_desc];

	const splits = texts.map((el) => SplitText.create(el, { type: 'lines', mask: 'lines' }));

	const tl = gsap.timeline();
	tl.from($logo, { opacity: 0, duration: 1, ease: 'power1.out' });

	splits.forEach((split, i) => {
		tl.from(
			split.lines,
			{
				yPercent: 100,
				duration: 1,
				ease: 'power4.out',
				onComplete: () => {
					split.masks.forEach((m: HTMLElement) => (m.style.overflow = ''));
				}
			},
			'>-0.6'
		);
	});

	return tl;
};

const animation = (page: HTMLElement) => {
	let ctx: gsap.Context | null = null;
	let destroyed = false;
	const isMobile = window.innerWidth < 770;

	document.fonts.ready.then(() => {
		if (destroyed) return;

		const p = document.querySelector('#p');
		const h = document.querySelector('#h');

		if (p) {
			gsap.set(p, { autoAlpha: 1 });
		}

		if (h && isMobile) {
			gsap.set(h, { autoAlpha: 1 });
		}

		ctx = gsap.context(() => {
			if (!isMobile) {
				//
			} else {
				//
			}
			const q = gsap.utils.selector(page);
			heroA(q);
			textsA();
		}, page);
	});

	return () => {
		destroyed = true;
		ctx?.revert();
	};
};

export default animation;
