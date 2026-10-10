const CHOICES = ['rosey', 'momo', 'saki', 'suzu', 'chizuro'];
const CORS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
	async fetch(req, env) {
		if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
		const url = new URL(req.url);
		if (url.pathname !== '/votes') return new Response('Not found', { status: 404, headers: CORS });

		const counts = async () => {
			const out = {};
			for (const c of CHOICES) out[c] = parseInt(await env.VOTES.get('vote:' + c), 10) || 0;
			return out;
		};

		if (req.method === 'GET') {
			return Response.json(await counts(), { headers: CORS });
		}
		if (req.method === 'POST') {
			let choice;
			try { choice = (await req.json()).choice; } catch (e) {}
			if (!CHOICES.includes(choice)) {
				return new Response(JSON.stringify({ error: 'bad choice' }), { status: 400, headers: { ...CORS, 'Content-Type': 'application/json' } });
			}
			const key = 'vote:' + choice;
			const cur = parseInt(await env.VOTES.get(key), 10) || 0;
			await env.VOTES.put(key, String(cur + 1));
			return Response.json(await counts(), { headers: CORS });
		}
		return new Response('Method not allowed', { status: 405, headers: CORS });
	},
};
