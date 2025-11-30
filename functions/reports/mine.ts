export const onRequestGet = async ({ request, env }) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return new Response(JSON.stringify({ error: "Missing email" }), { status: 400 });
  }

  const result = await env.INSIGHT_DB.prepare(
    "SELECT id, email, answers, created_at, file_url FROM reports WHERE email = ? ORDER BY created_at DESC"
  ).bind(email).all();

  return new Response(JSON.stringify(result.results), {
    headers: { "Content-Type": "application/json" },
  });
};
