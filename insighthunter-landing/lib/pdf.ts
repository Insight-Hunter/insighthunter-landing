import PDFDocument from 'pdfkit';

export async function generateReport(data: { name: string; score: number; insights: string[] }) {
  const doc = new PDFDocument();
  const buffers: Buffer[] = [];

  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});

  doc.fontSize(20).text(`InsightHunter Report for ${data.name}`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Data Maturity Score: ${data.score}/100`);
  doc.moveDown();

  doc.fontSize(12).text('Key Insights:', { underline: true });
  data.insights.forEach((insight, i) => {
    doc.text(`${i + 1}. ${insight}`);
  });

  doc.end();

  return Buffer.concat(buffers);
}
