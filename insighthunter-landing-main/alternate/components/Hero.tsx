'use client';
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-primary">
      <div className="absolute inset-0 bg-wave opacity-20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
          Uncover Hidden Insights That Propel Your Business Forward
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Join 5,000+ teams using AI to make faster, data-backed decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/signup" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
            Get Started Free
          </a>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
            <Play size={20} /> Watch 60-Second Demo
          </button>
        </div>
      </div>
    </section>
  );
}
