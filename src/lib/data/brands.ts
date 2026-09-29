// const brandss = [
// 	'Burc Akyol',
// 	'Roksanda',
// 	'Mantu',
// 	'SEV',
// 	'Vivetta',
// 	'Arrita Studio',
// 	'Baro Lucas',
// 	'1972Desa',
// 	'Morphine',
// 	'Celia B',
// 	"L'atelier Nawbar",
// 	'Christopher Esber',
// 	'Pedro Garcia',
// 	'Laquan Smith',
// 	'Levuma',
// 	'K Salamoon',
// 	'Eera',
// 	'Lehona',
// 	'Ilio Smeraldo',
// 	'Paris Georgia',
// 	'Yasmin Mansour',
// 	'Menghi',
// 	'Rosantica'
// ];

const brands = [
	{
		id: 1,
		name: 'menghi',
		category: ['ftw/acc'],
		joorLink: '',
		description:
			'Menghi elevates plastic footwear into a luxury product through Made in Italy craftsmanship, innovation and over 40 years of technical expertise. Its collection explores new shapes, materials and production processes across footwear, bags and accessories, with a focus on customization and more sustainable, certified materials.'
	},

	{
		id: 2,
		name: 'Morphine',
		category: ['rtw'],
		joorLink: '',
		description:
			'MORPHINE.ONLINE is a genderfluid, ageless and seasonless collective built around sustainability, fashion, craft and individualism. Through curated vintage and upcycled deadstock, the platform gives existing designs and materials a renewed life through limited, one-of-a-kind pieces.'
	},
	{
		id: 3,
		name: 'Christopher Esber',
		category: ['rtw'],
		joorLink: 'https://www.jooraccess.com/christopheresber',
		description:
			'Christopher Esber has built a global reputation for contemporary tailoring with a sophisticated approach, in the mixing of traditional techniques and mastering a restrained method for cut-out-clad silhouettes. The collections radiate confidence and strength reflecting an unwavering quality and innovation in cut and developed textiles; with a luxurious yet easy to wear approach.'
	},
	{
		id: 4,
		name: 'Celia B',
		category: ['rtw'],
		joorLink: 'https://www.jooraccess.com/celiab',
		description:
			'Celia B is an ode to freedom, a celebration of the joy of life in all its forms. We design fun, statement and timeless pieces with a passion for textiles, a slight obsession over quality and a sensibility for craftsmanship.'
	},
	{
		id: 5,
		name: 'PEDRO GARCIA',
		category: ['ftw/acc'],
		joorLink: '',
		description:
			'Pedro Garcia is a Spanish footwear brand rooted in a family shoemaking tradition dating back to 1925. Handcrafted in Elda, Spain, the brand combines artisanal expertise, refined materials and contemporary design to create timeless shoes and accessories with a distinctly modern Mediterranean spirit.'
	},
	{
		id: 6,
		name: "L'Atelier Nawbar",
		category: ['jwl'],
		joorLink: 'https://www.jooraccess.com/lateliernawbar',
		description:
			'Stemming from a long-standing family of jewelers, L’Atelier Nawbar offers outstanding fine jewelry, as well as an engaging experience with traditional craftsmanship. Three generations of Nawbar jewelers preceded them, beginning with their great-great-grandfather, who founded the first family store in Beirut’s gold souk in 1881. Sisters Tania and Dima are the fourth generation of Nawbar jewelers, and have introduced a contemporary edge to their age-old family tradition.'
	},
	{
		id: 7,
		name: 'Eera',
		category: ['jwl'],
		description:
			'Crafted in Italy from precious materials, the pieces stand out through bold color, polished finishes, and a distinctive contemporary attitude that feels both refined and expressive. Designed to be worn daily and styled freely, EERA delivers jewelry that is minimal in form yet statement making in presence.'
	},
	{
		id: 8,
		name: 'SEV',
		category: ['rtw'],
		joorLink: 'https://www.jooraccess.com/sophieetvoila',
		description:
			'Sophie et Voilà, a Basque brand, has made its mark in the wedding dress market over the past decade. The brand offers timeless designs characterised by a mix of tradition and innovation.'
	},
	{
		id: 9,
		name: 'ROKSANDA',
		category: ['rtw'],
		joorLink: '',
		description:
			'ROKSANDA is a luxury womenswear brand known for its woman-centred approach to dressing and unmistakable visual language. Defined by bold colour, sculptural silhouettes, modern cuts and refined detailing, the brand creates sophisticated pieces that feel both empowering and instantly recognisable.'
	},
	{
		id: 10,
		name: 'MANTU',
		category: ['rtw'],
		joorLink: '',
		description:
			'Mantù is an Italian womenswear label named after Mantova, founded in 2008 under the fashion expertise of the Castor company. Built on meticulous Made in Italy craftsmanship, the brand delivers refined wardrobe pieces that combine clean design with an effortless, modern attitude.'
	},
	{
		id: 11,
		name: 'VIVETTA',
		category: ['rtw'],
		joorLink: '',
		description:
			'Vivetta is an Italian Made in Italy brand where craftsmanship, visual culture and surrealist imagination come together. With nostalgic references, playful femininity and unexpected details such as embroidered hands and faces, the brand creates whimsical pieces with a distinctive sense of personality.'
	},
	{
		id: 12,
		name: 'ILIO SMERALDO',
		category: ['ftw/acc'],
		joorLink: '',
		description:
			'Ilio Smeraldo is a Florence and Tuscany-made brand built around local artisan craftsmanship, using Italian leather and locally sourced materials. With a collaborative, creator-led identity, the brand blends heritage techniques with a modern, insider fashion point of view.'
	},

	{
		id: 14,
		name: 'Arrita Studio',
		category: ['rtw'],
		joorLink: '',
		description:
			'Founded in 2022, Arrita Studio creates womenswear defined by thoughtful silhouettes, refined textures and understated femininity. With an emphasis on lasting quality over trends, the brand balances strength and softness through carefully sourced materials and a quiet, considered approach to contemporary dressing.'
	},
	{
		id: 15,
		name: 'Baro Lucas',
		category: ['rtw'],
		joorLink: '',
		description:
			'Founded by Álvaro Lucas in 2021, Baro Lucas is a Spanish fashion label based in Tordesillas, Valladolid. Rooted in tailoring and craftsmanship, the brand brings a contemporary perspective to luxury through precise construction, architectural silhouettes and an approach that finds distinction in simplicity.'
	},
	{
		id: 16,
		name: 'Burc Akyol',
		category: ['rtw'],
		joorLink: '',
		description:
			'Launched in Paris in 2019, Burc Akyol explores the tension between sensuality and austerity through a distinctly genderless approach to fashion. Developed in the designer’s Paris studio, its collections combine artisanal craftsmanship, refined materials and influences drawn from Akyol’s personal experiences and Ottoman heritage.'
	},
	{
		id: 17,
		name: 'K salamoon',
		category: ['jwl'],
		joorLink: '',
		description:
			'Led by Karole Salamoun, K Salamoon carries forward a family jewelry legacy dating back to 1907. Blending more than a century of savoir-faire with a contemporary and responsible approach, the house creates fine jewelry with a focus on craftsmanship, considered sourcing and enduring design.'
	},
	{
		id: 18,
		name: 'Laquan Smith',
		category: ['rtw'],
		joorLink: '',
		description:
			'Founded by Queens-born designer LaQuan Smith, the New York label has become known for its bold, confident approach to luxury womenswear. Formally launched in 2013, the brand combines sculpted silhouettes and meticulous craftsmanship with an unapologetically glamorous sensibility, with its collections headquartered and manufactured in New York City.'
	},
	{
		id: 19,
		name: 'Lehona',
		category: ['jwl'],
		joorLink: '',
		description:
			'LeHona is a jewelry brand built around the concept of “Jewellbeing,” connecting personal expression with a sense of identity and well-being. Its pieces are conceived as meaningful objects to wear and interact with, designed to reflect individual values and serve as reminders of authenticity and self-expression.'
	},
	{
		id: 20,
		name: 'Levuma',
		category: ['jwl'],
		joorLink: '',
		description:
			'Rooted in a diamond heritage that began with the Khalil family in the 1930s, LEVUMA is an Antwerp-based high jewelry maison shaped by generations of expertise. The house combines traditional craftsmanship and exceptional stones with a contemporary approach to design, creating pieces defined by precision, artistry and enduring quality.'
	},
	{
		id: 21,
		name: 'Okhtein',
		category: ['jwl'],
		joorLink: '',
		description:
			'Founded by Egyptian sisters Aya and Mounaz Abdelraouf, OKHTEIN is a Cairo-rooted luxury house that brings together heritage, storytelling and craftsmanship. Drawing from art, history and cultural memory, the brand transforms Middle Eastern references into sculptural, handcrafted pieces through a refined contemporary lens.'
	},
	{
		id: 22,
		name: 'Paris Georgia',
		category: ['rtw'],
		joorLink: '',
		description:
			'Founded in 2015 by Paris Mitchell Temple and Georgia Cherrie, Paris Georgia is a New Zealand womenswear label known for its refined take on modern minimalism. Its collections celebrate the female form through sculpted silhouettes, subtle detailing and luxurious fabrics, balancing simplicity with a distinctly contemporary sensibility.'
	},

	{
		id: 24,
		name: 'Yasmin Mansour',
		category: ['ftw/acc'],
		joorLink: '',
		description:
			'Rooted in Qatar, Yasmin Mansour is a prêt-à-couture house exploring a more purposeful approach to luxury fashion. Reimagined in 2020 around the creative potential of discarded materials, the brand combines high-end design with a focus on transformation, responsible creation and pushing the possibilities of sustainable fashion.'
	}
];

export default brands;
