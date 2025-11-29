// src/pages/index.tsx
import { Link } from "react-router-dom";
import LottiePlayer from "../components/LottiePlayer";
import onboardingAnimation from "/public/animations/onboarding.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">InsightHunter</h1>
        <nav className="flex items-center gap-4">
          <Link className="text-gray-700 hover:text-black" to="/quiz">Quiz</Link>
          <Link className="text-gray-700 hover:text-black" to="/admin">Admin</Link>
          <a className="bg-orange-600 text-white px-4 py-2 rounded" href="#pricing">Get started</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center py-10">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Turn raw signals into clear insight.</h2>
          <p className="text-gray-700 mb-6">
            Launch dashboards, collect feedback, and ship reports with premium polish—
            all secured and automated on Cloudflare.
          </p>
          <div className="flex gap-3">
            <Link to="/quiz" className="bg-black text-white px-4 py-2 rounded">Take the quiz</Link>
            <Link to="/referral/alpha" className="border px-4 py-2 rounded">Referral demo</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <LottiePlayer animation={onboardingAnimation} className="h-64 w-64" />
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded shadow p-6">
            <h4 className="font-semibold">Starter</h4>
            <p className="text-gray-600">$19/mo</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h4 className="font-semibold">Pro</h4>
            <p className="text-gray-600">$49/mo</p>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h4 className="font-semibold">Teams</h4>
            <p className="text-gray-600">Custom</p>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600">
        © {new Date().getFullYear()} InsightHunter, Inc.
      </footer>
    </main>
  );
}
