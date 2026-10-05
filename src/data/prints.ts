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
	/** Downloadable model file (STL/3MF/etc.). */
	file?: string;
	/** Short label for the download button, e.g. "3MF" or "STL". */
	fileLabel?: string;
	/** Longer description shown in the "About" section on the detail page. */
	about: string;
}

export const prints: Print[] = [
	{
		slug: 'chizuro-figurine',
		title: 'Chizuro Figurine - No AMS',
		name: 'Chizuro Figurine',
		images: [
			'/prints/chizuro-figurine-1.png',
			'/prints/chizuro-figurine-2.png',
		],
		model: '/prints/chizuro-figurine.glb',
		file: '/prints/chizuro-figurine.3mf',
		fileLabel: '3MF',
		about:
			"A cute 3D-printable figurine of Chizuro, one of the PuchiPaws! This version is designed to print without an AMS — no multi-color setup or filament swapping needed, just print and go. The file is provided as a 3MF, ready to slice in Bambu Studio, OrcaSlicer, or PrusaSlicer. Print it, paint it if you like, and display your favorite sleepy PuchiPaw!",
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
];
