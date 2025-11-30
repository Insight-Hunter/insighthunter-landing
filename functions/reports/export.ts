export const onRequestGet = async ({ request, env }) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");

  let query = "SELECT id, email, answers, created_at, file_url FROM reports WHERE 1=1";
  const binds: any[] = [];

  if (email) {
    query += " AND email = ?";
    binds.push(email);
  }
  if (start) {
    query += " AND created_at >= ?";
    binds.push(start);
  }
  if (end) {
    query += " AND created_at <= ?";
    binds.push(end);
  }

  query += " ORDER BY created_at DESC";

  const result = await env.INSIGHT_DB.prepare(query).bind(...binds).all();

  // Build CSV
  const header = "id,email,answers,created_at,file_url\n";
  const rows = result.results
    .map(
      (r) =>
        `${r.id},"${r.email}","${r.answers.replace(/"/g, '""')}",${r.created_at},"${r.file_url}"`
    )
    .join("\n");

  const csv = header + rows;

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=reports-export.csv",
    },
  });
};
