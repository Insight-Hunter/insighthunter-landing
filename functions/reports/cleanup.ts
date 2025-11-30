export const onRequestPost = async ({ request, env }) => {
  const { ids } = await request.json(); // array of report IDs to delete

  if (!ids || !Array.isArray(ids)) {
    return new Response(JSON.stringify({ error: "Missing report IDs" }), { status: 400 });
  }

  try {
    for (const id of ids) {
      // Look up report record
      const record = await env.INSIGHT_DB.prepare(
        "SELECT file_url FROM reports WHERE id = ?"
      ).bind(id).first();

      if (record?.file_url) {
        // Delete from R2
        await env.INSIGHT_R2.delete(record.file_url);
      }

      // Delete from D1
      await env.INSIGHT_DB.prepare("DELETE FROM reports WHERE id = ?").bind(id).run();
    }

    return new Response(JSON.stringify({ ok: true, deleted: ids.length }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Cleanup failed" }), { status: 500 });
  }
};
