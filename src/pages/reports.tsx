import { useEffect, useState } from "react";

export default function Reports() {
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/reports/list");
      const data = await res.json();
      setReports(data);
    };
    load();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Report History</h1>
      <div className="bg-white rounded shadow p-6">
        {reports.length === 0 ? (
          <p className="text-gray-600">No reports yet.</p>
        ) : (
          <ul className="space-y-4">
            {reports.map((r) => (
              <li key={r.id} className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{r.email}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(r.created_at).toLocaleString()}
                    </p>
                  </div>
                  {r.file_url ? (
                    <a
                     href={`/reports/file?key=${encodeURIComponent(r.file_url)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-orange-600 text-white px-3 py-1 rounded"
                    >
                       View PDF
                     </a>
                
                  ) : (
                    <span className="text-gray-500">No file stored</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
