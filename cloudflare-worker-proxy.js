// Cloudflare Worker — proxies requests to the Anthropic API using your own key,
// so visitors to discoveringatlas.com never need a Claude account.
//
// SETUP (in Claude Code):
// 1. `npm install -g wrangler` (Cloudflare's CLI)
// 2. `wrangler login`
// 3. `wrangler secret put ANTHROPIC_API_KEY` — paste your key from console.anthropic.com
// 4. `wrangler deploy`
// 5. Point the concierge/veg-finder's fetch() at your new worker URL instead of
//    https://api.anthropic.com/v1/messages directly

export default {
  async fetch(request, env) {
    // Only allow requests from your actual site
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = [
      "https://discoveringatlas.com",
      "https://www.discoveringatlas.com"
    ];

    const corsHeaders = {
      "Access-Control-Allow-Origin": allowedOrigins.includes(origin) ? origin : "",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    if (!allowedOrigins.includes(origin)) {
      return new Response("Forbidden", { status: 403, headers: corsHeaders });
    }

    try {
      const body = await request.json();

      const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify(body),
      });

      const data = await anthropicResponse.json();

      return new Response(JSON.stringify(data), {
        status: anthropicResponse.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Proxy error", details: String(err) }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
