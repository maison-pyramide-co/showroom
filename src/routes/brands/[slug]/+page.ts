// import { error } from '@sveltejs/kit';
import { getBrand, brands, getRelatedBrands } from '$lib/data/brands';

export const load = ({ params }) => {
	const brand = getBrand(params.slug);
	// if (!brand) error(404, 'Brand not found');
	if (!brand) return;
	return { brand, related: getRelatedBrands(brand) };
};

// optional: only if you use adapter-static / want these prerendered
export const entries = () => brands.map((b) => ({ slug: b.slug }));
export const prerender = true;
