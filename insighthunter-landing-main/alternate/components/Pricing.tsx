'use client';
import { useState } from "react";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading font-bold mb-4">Simple, Transparent Pricing</h2>
        <div className="flex justify-center items-center gap-4 mb-12">
          <span>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className="relative w-14 h-8 bg-primary rounded-full p-1">
            <div className={`w-6 h-6 bg-white rounded-full transition ${annual ? 'translate-x-6' : ''}`} />
          </button>
          <span>Annual <span className="text-green-600">Save 20%</span></span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: annual ? 0 : 0, desc: "Free forever", features: ["100 scans/mo", "Basic AI", "Email support"] },
            { name: "Pro", price: annual ? 39 : 49, desc: "Most popular", features: ["Unlimited scans", "Advanced AI", "Priority support", "API access"], popular: true },
            { name: "Enterprise", price: "Custom", desc: "For teams", features: ["Everything in Pro", "Dedicated manager", "SLA", "Custom integrations"] },
          ].map((p, i) => (
            <div key={i} className={`p-8 rounded-xl border ${p.popular ? 'border-primary shadow-xl scale-105' : 'border-gray-300'} bg-white`}>
              {p.popular && <div className="bg-primary text-white text-sm px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>}
              <h3 className="text-2xl font-heading font-bold">{p.name}</h3>
              <p className="text-4xl font-bold my-4">{typeof p.price === "number" ? `$${p.price}` : p.price}<span className="text-sm font-normal">/mo</span></p>
              <p className="text-gray-600 mb-6">{p.desc}</p>
              <ul className="text-left mb-8 space-y-2">
                {p.features.map((f, j) => <li key={j}>✓ {f}</li>)}
              </ul>
              <a href="/signup" className={`block w-full py-3 rounded-lg font-semibold transition ${p.popular ? 'bg-primary text-white hover:bg-blue-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                {p.price === 0 ? "Get Started" : "Choose Plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
