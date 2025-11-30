// src/pages/admin/index.tsx
import { useEffect, useState } from "react";
import BlogForm from "./BlogForm";
import TestimonialForm from "./TestimonialForm";
import PricingForm from "./PricingForm";
import AdminOnboardingModal from "../../components/AdminOnboardingModal";

export default function AdminDashboard() {
  const [role, setRole] = useState<"admin" | "editor" | "viewer" | null>(null);
  const [tab, setTab] = useState<"Blog" | "Testimonials" | "Pricing">("Blog");

  useEffect(() => {
    const token = localStorage.getItem("ih_token");
    if (!token) {
      window.location.href = "/";
      return;
    }
    // In production, verify with /auth/me
    setRole("admin");
  }, []);

  if (!role) return null;

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      <AdminOnboardingModal />
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Admin</h1>
        <div className="flex gap-2">
          {(["Blog", "Testimonials", "Pricing"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded ${
                tab === t ? "bg-orange-600 text-white" : "bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </header>

      {tab === "Blog" && <BlogForm />}
      {tab === "Testimonials" && <TestimonialForm />}
      {tab === "Pricing" && <PricingForm />}
    </section>
  );
}
