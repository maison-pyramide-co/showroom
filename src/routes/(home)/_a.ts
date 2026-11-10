import { textsA } from '$lib/utils/animation';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const heroA = (q: gsap.utils.SelectorFunc) => {
	const logo = q('#s-hero .logo')[0];

	// .date and .location are single elements; .season expands to its two child divs
	const texts = [...q('#s-hero .date'), ...q('#s-hero .location'), ...q('#s-hero .season > div')];

	const splits = texts.map((el) => SplitText.create(el, { type: 'lines', mask: 'lines' }));

	const tl = gsap.timeline();
	tl.from(logo, { opacity: 0, duration: 1, ease: 'power1.out' });

	splits.forEach((split, i) => {
		tl.from(
			split.lines,
			{
				yPercent: 100,
				duration: 0.8,
				ease: 'power4.out',
				onComplete: () => {
					split.masks.forEach((m: HTMLElement) => (m.style.overflow = ''));
				}
			},
			i === 0 ? '>-0.3' : '>-0.6'
		);
	});

	return tl;
};

/*
const brandsA = () => {
	const $imgs = gsap.utils.toArray('#s-brands img');
	gsap.from($imgs, {
		autoAlpha: 0,
		duration: 1,
		ease: 'power4.out',
		stagger: 0.4,
		scrollTrigger: {
			trigger: '#s-brands .t',
			start: 'top 90%'
		}
	});
};
*/

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
			heroA(gsap.utils.selector(page));
			// brandsA();
			textsA();
			// prtnrshipsA(gsap.utils.selector(page));
			// introA();
		}, page);
	});

	return () => {
		destroyed = true;
		ctx?.revert();
	};
};

export default animation;
