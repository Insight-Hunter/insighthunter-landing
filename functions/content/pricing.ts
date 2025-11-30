export const onRequestGet = async ({ env }) => {
  const result = await env.INSIGHT_DB.prepare("SELECT * FROM pricing_plans").all();
  return new Response(JSON.stringify(result.results), {
    headers: { "Content-Type": "application/json" },
  });
};

export const onRequestPost = async ({ request, env }) => {
  const { name, price, features } = await request.json();
  await env.INSIGHT_DB.prepare(
    "INSERT INTO pricing_plans (name, price, features) VALUES (?, ?, ?)"
  ).bind(name, price, JSON.stringify(features)).run();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const onRequestDelete = async ({ request, env }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  await env.INSIGHT_DB.prepare("DELETE FROM pricing_plans WHERE id = ?").bind(id).run();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
