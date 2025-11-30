// src/pages/referral.tsx
import { useParams } from "react-router-dom";

export default function Referral() {
  const { code } = useParams();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <div className="bg-white rounded shadow p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-2">Referral</h1>
        <p className="text-gray-700 mb-4">
          Welcome! You’ve landed via referral code: <span className="font-mono">{code}</span>
        </p>
        <a
          className="bg-orange-600 text-white px-4 py-2 rounded inline-block"
          href="/"
        >
          Explore InsightHunter
        </a>
      </div>
    </main>
  );
}
