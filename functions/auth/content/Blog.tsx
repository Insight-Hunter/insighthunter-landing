export const onRequestGet = async ({ env }) => {
  const result = await env.INSIGHT_DB.prepare("SELECT * FROM blog_posts").all();
  return new Response(JSON.stringify(result.results), {
    headers: { "Content-Type": "application/json" },
  });
};

export const onRequestPost = async ({ request, env }) => {
  const { slug, title, excerpt, author, content } = await request.json();
  await env.INSIGHT_DB.prepare(
    "INSERT INTO blog_posts (slug, title, excerpt, author, content) VALUES (?, ?, ?, ?, ?)"
  ).bind(slug, title, excerpt, author, content).run();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
};

export const onRequestDelete = async ({ request, env }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  await env.INSIGHT_DB.prepare("DELETE FROM blog_posts WHERE slug = ?").bind(slug).run();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Content-Type": "application/json" },
  });
};
