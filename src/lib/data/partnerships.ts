import p1 from '$lib/assets/images/partnerships/p1.webp';
import p2 from '$lib/assets/images/partnerships/p2.webp';
import p3 from '$lib/assets/images/partnerships/p3.webp';
import p4 from '$lib/assets/images/partnerships/p4.webp';
import p5 from '$lib/assets/images/partnerships/p5.webp';

const partnerships = [
	{
		id: 1,
		name: 'SAUDI100 BRANDS',
		description:
			'Powering the next generation of Saudi fashion talent through expert guidance, mentorship, and global market opportunities.',
		client: 'SAUdi FASHION COMMISSION',
		country: 'KSA',
		services: [
			'Programming',
			'Brand Building Mentoring',
			'Program Operations Management ',
			'Vendor Management ',
			'Talent Booking & Management ',
			'Experiential Activations Ideation & Execution',
			'Branding & Creative Content',
			'Digital and Social Media Management'
		],
		image: p1,
		width: 420
	},
	{
		id: 2,
		name: 'MADRID FASHION WEEK',
		description:
			'Expanding Madrid Fashion Week’s reach into the Middle East, MP Showroom connects selected designers with key industry players across the region and wider EMEA market.',
		client: 'MADRID FASHION WEEK',
		services: [
			'International Buyer & Media Guestlist Curation',
			'Guest Operational Management',
			'Programming',
			'MP Showroom Prize Design & Jury Evaluation',
			'Selection of Prize Winners',
			'Collection Reviews & Commercial Feedback',
			' Mentoring of Prize Winners',
			'Visibility & Media Support',
			'Post-Campaign Feedback & Strategic Recommendations'
		],
		country: 'MADRID',
		image: p2,
		width: 400
	},
	{
		id: 3,
		name: 'RIYADH FASHION WEEK',
		description:
			'MP SHOWROOM led press, showroom, sales and talent management for Riyadh Fashion Week, connecting designers with buyers, media and global talent while amplifying RFW’s presence across the region and beyond.',
		client: 'SAUDI FASHION COMMISSION',
		services: [
			'Guestlist Management',
			'Logistics Management',
			'Sales Management',
			'PR Management',
			'Talent Management',
			'Showroom Operations'
		],
		country: 'KSA',
		image: p3,
		width: 540
	},
	{
		id: 4,
		name: 'FASHION TRUST ARABIA PRIZE',
		description:
			'As a Fashion Trust Arabia Prize Partner, MP Showroom brings winning designers to Paris Fashion Week, connecting them with buyers, editors and industry leaders, alongside expert mentorship and advisory.',
		client: 'FASHION TRUST ARABIA',
		services: [
			'Feedback on applicants and selection of winners',
			'Mentoring of Prize Winners',
			'Wholesale representation'
		],
		country: 'QATAR',
		image: p4,
		width: 540
	},
	{
		id: 5,
		name: 'PARIS FASHION WEEK',
		description:
			'Maison Pyramide led press, showroom, sales and talent management for Riyadh Fashion Week, connecting designers with buyers, media and global talent while amplifying RFW’s presence across the region and beyond.',
		client: 'SAUDI FASHION COMMISSION',
		services: [
			'Brand Selection and Preparation ',
			'Operations Management',
			'Production Management',
			'Vendor Management',
			'Sales Management',
			'PR Management'
		],
		country: 'PARIS',
		image: p5,
		width: 400
	}
];

export default partnerships;
