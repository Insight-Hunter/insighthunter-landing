const features = [
  { title: "Lightning Fast Analysis", desc: "Process 100K+ data points in under 10 seconds.", icon: "⚡" },
  { title: "AI Pattern Detection", desc: "Auto-identify trends humans miss.", icon: "🧠" },
  { title: "Precision Targeting", desc: "Industry-specific filters. No noise.", icon: "🎯" },
  { title: "Real-Time Dashboards", desc: "Live updates, no refresh needed.", icon: "📊" },
  { title: "Export & Share", desc: "PDF, CSV, API — your way.", icon: "📤" },
  { title: "Secure & Compliant", desc: "GDPR, SOC 2, encrypted at rest.", icon: "🔒" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
