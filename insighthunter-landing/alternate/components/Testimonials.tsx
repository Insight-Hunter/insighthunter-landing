const testimonials = [
  { name: "Sarah Chen", role: "Data Lead, FinTech Inc.", text: "Doubled our efficiency. Game-changer.", rating: 5 },
  { name: "Mark Rivera", role: "CEO, GrowthCo", text: "40% faster insights. Worth every penny.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Trusted by Teams</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">{"⭐".repeat(t.rating)}</div>
              <p className="text-lg italic mb-4">"{t.text}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
