export const onRequestGet = async ({ env }) => {
  const result = await env.INSIGHT_DB.prepare(
    "SELECT id, email, answers, created_at, file_url FROM reports ORDER BY created_at DESC"
  ).all();

  return new Response(JSON.stringify(result.results), {
    headers: { "Content-Type": "application/json" },
  });
};
