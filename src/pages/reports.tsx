import { useEffect, useState } from "react";

export default function ReportsHistory() {
  const [reports, setReports] = useState<any[]>([]);
  const email = "demo@insighthunter.app"; // replace with logged-in user email

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/reports/history?email=${email}`);
      const data = await res.json();
      setReports(data);
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Report History</h1>
      <ul className="space-y-4">
        {reports.map((r) => (
          <li key={r.id} className="bg-white rounded shadow p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">Report #{r.id}</div>
              <div className="text-sm text-gray-600">
                {new Date(r.created_at).toLocaleString()}
              </div>
            </div>
            <button
              className="bg-orange-600 text-white px-3 py-1 rounded"
              onClick={async () => {
                const res = await fetch("/reports/generate", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email, answers: JSON.parse(r.answers) }),
                });
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                window.open(url, "_blank");
              }}
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
