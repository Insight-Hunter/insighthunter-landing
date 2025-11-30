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

  doc.fontSize(20).text("InsightHunter Quiz Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Generated for: ${email}`);
  doc.moveDown();
  doc.fontSize(12).text("Answers:", { underline: true });
  Object.entries(answers).forEach(([k, v]) => doc.text(`${k}: ${v}`));
  doc.moveDown();
  doc.fontSize(12).text("Recommendation:", { underline: true });
  doc.text("Based on your inputs, InsightHunter recommends setting up dashboards with role-based access and automated reporting cadence.");

  doc.end();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=quiz-report.pdf`,
    },
  });

  // Upload to R2 bucket
  const key = `reports/${email}-${Date.now()}.pdf`;
  await env.INSIGHT_R2.put(key, pdfBuffer);


};

  });

  const pdfBuffer = await env.INSIGHT_DB.prepare(
       "INSERT INTO reports (email, answers, file_url) VALUES (?, ?, ?)"
        ).bind(email, JSON.stringify(answers), null).run(), 
        await done;

    },
  });
};
