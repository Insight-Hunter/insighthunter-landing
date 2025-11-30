export const onRequestGet = async ({ env }) => {
  const result = await env.INSIGHT_DB.prepare("SELECT * FROM testimonials").all();
  return new Response(JSON.stringify(result.results), {
    headers: { "Content-Type": "application/json" },
  });
};

export const onRequestPost = async ({ request, env }) => {
  const { name, company, quote, image_url, rating } = await request.json();
  await env.INSIGHT_DB.prepare(
    "INSERT INTO testimonials (name, company, quote, image_url, rating) VALUES (?, ?, ?, ?, ?)"
  ).bind(name, company, quote, image_url, rating).run();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const onRequestDelete = async ({ request, env }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  await env.INSIGHT_DB.prepare("DELETE FROM testimonials WHERE id = ?").bind(id).run();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
