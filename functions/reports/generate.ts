import PDFDocument from "pdfkit";

export const onRequestPost = async ({ request, env }) => {
  const { email, answers } = await request.json();

  // Create PDF in memory
  const doc = new PDFDocument();
  const chunks: Uint8Array[] = [];
  doc.on("data", (chunk) => chunks.push(chunk));
  const done = new Promise<Uint8Array>((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });

  // PDF content
  doc.fontSize(20).text("InsightHunter Quiz Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Generated for: ${email}`);
  doc.moveDown();

  doc.fontSize(12).text("Your Answers:", { underline: true });
  Object.entries(answers).forEach(([key, value]) => {
    doc.text(`${key}: ${value}`);
  });

  doc.moveDown();
  doc.fontSize(12).text("Recommendation:", { underline: true });
  doc.text("Based on your inputs, InsightHunter recommends setting up dashboards with role-based access and automated reporting cadence.");

  doc.end();

  const pdfBuffer = await env.INSIGHT_DB.prepare(
       "INSERT INTO reports (email, answers, file_url) VALUES (?, ?, ?)"
        ).bind(email, JSON.stringify(answers), null).run(), 
        await done;

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=quiz-report.pdf",
    },
  });
};
