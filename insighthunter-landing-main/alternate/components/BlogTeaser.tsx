// BlogTeaser.tsx
export default function BlogTeaser() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a href="/blog/ai-trends" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">5 AI Trends Reshaping Data Analytics in 2026</h3>
            <p className="text-gray-600">From predictive clustering to real-time sentiment tracking...</p>
          </a>
          {/* Repeat */}
        </div>
      </div>
    </section>
  );
}
