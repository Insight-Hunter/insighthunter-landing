const testimonials = [
  {
    name: 'Sarah Lee',
    company: 'TechCorp',
    quote: 'InsightHunter transformed our strategy. We saved 20 hours/week and doubled our lead quality.',
    image: '/images/sarah.webp',
    rating: 5,
  },
  {
    name: 'David Kim',
    company: 'MarketPilot',
    quote: 'The onboarding was seamless. Our analysts were productive within the first hour.',
    image: '/images/david.webp',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">What Our Users Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow">
              <div className="flex items-center mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <div className="mt-2 text-yellow-500">{'★'.repeat(t.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
