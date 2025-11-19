export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Unlock Actionable Insights in Minutes – Not Months</h2>
      <p className="text-lg md:text-xl mb-6">AI-powered analytics for businesses ready to scale. Join 10,000+ users driving 2x faster decisions.</p>
      <div className="flex space-x-4">
        <a href="/signup" className="bg-orange-600 px-6 py-3 rounded text-white hover:bg-orange-500">Start Free Trial</a>
        <a href="/demo" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-gray-900">Watch Demo</a>
      </div>
    </section>
  );
}
