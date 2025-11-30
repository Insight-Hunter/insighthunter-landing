import { verifyJWT } from "../../src/lib/jwt";

export const onRequestPost = async ({ request, env }) => {
  // Check Authorization header
  const auth = request.headers.get("Authorization") || "";
  if (!auth.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const token = auth.slice(7);
  const payload = await verifyJWT(token, env.JWT_SECRET);
  if (!payload || payload.role !== "admin") {
    return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
  }

  const { ids } = await request.json(); // array of report IDs
  if (!ids || !Array.isArray(ids)) {
    return new Response(JSON.stringify({ error: "Missing report IDs" }), { status: 400 });
  }

  try {
    for (const id of ids) {
      const record = await env.INSIGHT_DB.prepare(
        "SELECT file_url FROM reports WHERE id = ?"
      ).bind(id).first();

      if (record?.file_url) {
        await env.INSIGHT_R2.delete(record.file_url);
      }

      await env.INSIGHT_DB.prepare("DELETE FROM reports WHERE id = ?").bind(id).run();
    }

    return new Response(JSON.stringify({ ok: true, deleted: ids.length }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Cleanup failed" }), { status: 500 });
  }
};
