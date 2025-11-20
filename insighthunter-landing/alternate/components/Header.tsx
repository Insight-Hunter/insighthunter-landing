'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-heading font-bold text-primary">InsightHunter</a>
        <nav className="hidden md:flex gap-8 items-center">
          {["Features", "How It Works", "Pricing", "Blog"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-gray-700 hover:text-primary transition">
              {item}
            </a>
          ))}
          <a href="/login" className="text-gray-700">Login</a>
          <a href="/signup" className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">Start Free Trial</a>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {["Features", "How It Works", "Pricing", "Blog", "Login", "Start Free Trial"].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-primary">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
