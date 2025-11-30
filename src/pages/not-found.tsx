// src/pages/not-found.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-700 mb-4">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="bg-black text-white px-4 py-2 rounded">Go home</Link>
    </main>
  );
}
