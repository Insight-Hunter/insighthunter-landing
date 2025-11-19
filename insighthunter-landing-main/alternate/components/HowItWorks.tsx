const steps = [
  { num: "1", title: "Connect Your Data", desc: "CSV, API, Google Sheets, databases." },
  { num: "2", title: "AI Analyzes", desc: "Detects patterns, anomalies, trends." },
  { num: "3", title: "Get Insights", desc: "Clear reports, visuals, recommendations." },
  { num: "4", title: "Act & Export", desc: "Download, share, or automate." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
