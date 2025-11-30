export const onRequestGet = async ({ request, env }) => {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (!key) {
    return new Response(JSON.stringify({ error: "Missing key" }), { status: 400 });
  }

  try {
    // Get object from R2
    const object = await env.INSIGHT_R2.get(key);
    if (!object) {
      return new Response(JSON.stringify({ error: "File not found" }), { status: 404 });
    }

    // Stream file back
    return new Response(object.body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename=${key.split("/").pop()}`,
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error retrieving file" }), { status: 500 });
  }
};
