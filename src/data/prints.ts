export interface Print {
	slug: string;
	/** Full product title shown on the card and detail page. */
	title: string;
	/** Short name used in the "About the …" heading. Falls back to title. */
	name?: string;
	/** Gallery images — the first one is used as the listing thumbnail. */
	images: string[];
	/** Optional interactive 3D model (GLB) shown as an extra carousel slide. */
	model?: string;
	/** Optional initial model-viewer camera orbit, e.g. "0deg 60deg 110%". */
	cameraOrbit?: string;
	/** Downloadable model file (STL/3MF/etc.). */
	file?: string;
	/** Short label for the download button, e.g. "3MF" or "STL". */
	fileLabel?: string;
	/** Longer description shown in the "About" section on the detail page. */
	about: string;
}

export const prints: Print[] = [
	{
		slug: 'rosey-figurine',
		title: 'Rosey Figurine',
		name: 'Rosey Figurine',
		images: [
			'/prints/rosey-figurine-1.png',
			'/prints/rosey-figurine-2.png',
		],
		model: '/prints/rosey-figurine.glb',
		file: '/prints/rosey-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable figurine of Rosey! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and give Rosey a home on your shelf!",
	},
	{
		slug: 'momo-figurine',
		title: 'Momo Figurine',
		name: 'Momo Figurine',
		images: [
			'/prints/momo-figurine-1.png',
			'/prints/momo-figurine-2.png',
		],
		model: '/prints/momo-figurine.glb',
		file: '/prints/momo-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable figurine of Momo (Doodlemo) — my very own character! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and bring Momo home!",
	},
	{
		slug: 'saki-figurine',
		title: 'Saki Figurine',
		name: 'Saki Figurine',
		images: [
			'/prints/saki-figurine-1.png',
			'/prints/saki-figurine-2.png',
		],
		model: '/prints/saki-figurine.glb',
		file: '/prints/saki-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable figurine of Saki, the sweet and creative PuchiPaw kitty with her little flower! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and show off your favorite PuchiPaw!",
	},
	{
		slug: 'chizuro-figurine',
		title: 'Chizuro Figurine',
		name: 'Chizuro Figurine',
		images: [
			'/prints/chizuro-figurine-1.png',
			'/prints/chizuro-figurine-2.png',
		],
		model: '/prints/chizuro-figurine.glb',
		file: '/prints/chizuro-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A cute 3D-printable figurine of Chizuro, one of the PuchiPaws! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it if you like, and display your favorite sleepy PuchiPaw!",
	},
	{
		slug: 'suzu-figurine',
		title: 'Suzu Figurine',
		name: 'Suzu Figurine',
		images: [
			'/prints/suzu-figurine-1.png',
			'/prints/suzu-figurine-2.png',
		],
		model: '/prints/suzu-figurine.glb',
		file: '/prints/suzu-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable figurine of Suzu, the playful blue PuchiPaw with a big fluffy tail! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and show off your favorite fluffy PuchiPaw!",
	},
	{
		slug: 'rosey-curry-figurine',
		title: 'Rosey Curry Figurine',
		name: 'Rosey Curry Figurine',
		images: [
			'/prints/rosey-curry-figurine-1.png',
			'/prints/rosey-curry-figurine-2.png',
		],
		model: '/prints/rosey-curry-figurine.glb',
		cameraOrbit: '0deg 68deg 110%',
		file: '/prints/rosey-curry-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Rosey curry figurine — our fluffy Yorkie shaped in rice, nestled in a plate of kawaii curry with carrots and potato! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and serve up some cuteness!",
	},
	{
		slug: 'puchipaws-dango-figurine',
		title: 'PuchiPaws Dango Figurine',
		name: 'PuchiPaws Dango Figurine',
		images: [
			'/prints/puchipaws-dango-figurine-1.png',
			'/prints/puchipaws-dango-figurine-2.png',
		],
		model: '/prints/puchipaws-dango-figurine.glb',
		file: '/prints/puchipaws-dango-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable dango stack of all three PuchiPaws — Saki, Suzu, and Chizuro skewered like cute kawaii dango! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and display the whole PuchiPaws trio!",
	},
	{
		slug: 'saki-omurice-figurine',
		title: 'Saki Omurice Figurine',
		name: 'Saki Omurice Figurine',
		images: [
			'/prints/saki-omurice-figurine-1.png',
			'/prints/saki-omurice-figurine-2.png',
		],
		model: '/prints/saki-omurice-figurine.glb',
		cameraOrbit: '0deg 68deg 110%',
		file: '/prints/saki-omurice-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Saki omurice figurine — the sweet PuchiPaw kitty peeking over a fluffy omurice with a ketchup heart! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and serve up some cuteness!",
	},
	{
		slug: 'momo-taiyaki-figurine',
		title: 'Momo Taiyaki Figurine',
		name: 'Momo Taiyaki Figurine',
		images: [
			'/prints/momo-taiyaki-figurine-1.png',
			'/prints/momo-taiyaki-figurine-2.png',
		],
		model: '/prints/momo-taiyaki-figurine.glb',
		file: '/prints/momo-taiyaki-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Momo taiyaki figurine — Momo (Doodlemo) peeking out of a cute fish-shaped taiyaki! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it, and enjoy this sweet treat!",
	},
	{
		slug: 'saki-paw-dish',
		title: 'Saki Paw Dish',
		name: 'Saki Paw Dish',
		images: [
			'/prints/saki-paw-dish-1.png',
			'/prints/saki-paw-dish-2.png',
		],
		model: '/prints/saki-paw-dish.glb',
		cameraOrbit: '0deg 68deg 110%',
		file: '/prints/saki-paw-dish.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Saki paw dish — a kawaii cat-paw trinket tray with Saki peeking over the top! Perfect for rings, earrings, or other little treasures. The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it and paint it!",
	},
	{
		slug: 'suzu-paw-dish',
		title: 'Suzu Paw Dish',
		name: 'Suzu Paw Dish',
		images: [
			'/prints/suzu-paw-dish-1.png',
			'/prints/suzu-paw-dish-2.png',
		],
		model: '/prints/suzu-paw-dish.glb',
		cameraOrbit: '0deg 68deg 110%',
		file: '/prints/suzu-paw-dish.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Suzu paw dish — a kawaii cat-paw trinket tray with Suzu peeking over the top! Perfect for rings, earrings, or other little treasures. The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it and paint it!",
	},
	{
		slug: 'chizuro-charm',
		title: 'Chizuro Pocket Pet Charm',
		name: 'Chizuro Pocket Pet Charm',
		images: [
			'/prints/chizuro-charm-1.png',
			'/prints/chizuro-charm-2.png',
		],
		model: '/prints/chizuro-charm.glb',
		file: '/prints/chizuro-charm.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Chizuro pocket pet charm — a cute little Chizuro pendant to clip onto your bag, keys, or zipper! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it and paint it!",
	},
	{
		slug: 'rosey-paint-charm',
		title: 'Rosey Paint Tube Charm',
		name: 'Rosey Paint Tube Charm',
		images: [
			'/prints/rosey-paint-charm-1.png',
			'/prints/rosey-paint-charm-2.png',
		],
		model: '/prints/rosey-paint-charm.glb',
		file: '/prints/rosey-paint-charm.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Rosey paint tube charm — a kawaii paint-tube pendant featuring Rosey, perfect for clipping onto your bag or keys! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it and paint it!",
	},
	{
		slug: 'chizuro-envelope-charm',
		title: 'Chizuro Envelope Charm',
		name: 'Chizuro Envelope Charm',
		images: [
			'/prints/chizuro-envelope-charm-1.png',
			'/prints/chizuro-envelope-charm-2.png',
		],
		model: '/prints/chizuro-envelope-charm.glb',
		file: '/prints/chizuro-envelope-charm.3mf',
		fileLabel: '3MF',
		about:
			"A 3D-printable Chizuro envelope charm — a sweet little love-letter envelope with Chizuro peeking out, ready to clip onto your bag or keys! The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it and paint it!",
	},
];
