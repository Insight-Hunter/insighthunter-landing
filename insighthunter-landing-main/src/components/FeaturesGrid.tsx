const features = [
  {
    icon: '📊',
    title: 'Real-Time Data Aggregation',
    description: 'Connect multiple sources and unify your data instantly. No manual exports or delays.',
  },
  {
    icon: '🧠',
    title: 'AI-Powered Pattern Detection',
    description: 'Surface trends and anomalies with zero guesswork. Let machine learning do the heavy lifting.',
  },
  {
    icon: '📈',
    title: 'Customizable Dashboards',
    description: 'Tailor visualizations to your KPIs. Drag, drop, and share with your team.',
  },
  {
    icon: '📄',
    title: 'Automated PDF Reports',
    description: 'Schedule branded reports to email or R2. Perfect for clients, investors, or internal ops.',
  },
  {
    icon: '🔐',
    title: 'Secure Role-Based Access',
    description: 'Granular permissions for contributors, reviewers, and admins. Built for scale and compliance.',
  },
  {
    icon: '⚡',
    title: 'Instant Onboarding',
    description: 'Animated walkthroughs, seeded previews, and contributor docs. Get started in minutes.',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Features That Drive Decisions</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
