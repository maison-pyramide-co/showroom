import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const headerA = (q: gsap.utils.SelectorFunc) => {
	const links = q('#h a');
	const splits = links.map((el) => SplitText.create(el, { type: 'lines', mask: 'lines' }));
	const tl = gsap.timeline();

	tl.from(
		splits.flatMap((s) => s.lines),
		{
			yPercent: 100,
			duration: 0.8,
			ease: 'power4.out',
			stagger: 0.1,
			onComplete: () => {
				splits.forEach((s) => s.masks.forEach((m: HTMLElement) => (m.style.overflow = '')));
			}
		}
	);

	return tl;
};

const animation = async () => {
	await Promise.all([document.fonts.load("800 16px 's'"), document.fonts.load("200 16px 'gt'")]);
	const q = gsap.utils.selector(document);
	gsap.set('#h', { autoAlpha: 1 });
	headerA(q);
};

export default animation;
