import { useEffect, useState } from "react";

export default function Reports() {
  const [reports, setReports] = useState<any[]>([]);
  const [role, setRole] = useState<"admin" | "editor" | "viewer" | null>(null);
  const email = "demo@insighthunter.app"; // replace with logged-in user email

  useEffect(() => {
    const loadReports = async () => {
      const res = await fetch("/reports/list");
      const data = await res.json();
      setReports(data);
    };

    const checkRole = async () => {
      const token = localStorage.getItem("ih_token");
      if (!token) return setRole(null);
      const res = await fetch("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setRole(data.role);
      }
    };

    loadReports();
    checkRole();
  }, []);

  const deleteReport = async (id: number) => {
    const token = localStorage.getItem("ih_token");
    if (!token) return alert("Unauthorized");

    await fetch("/reports/cleanup", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: [id] }),
    });

    setReports((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Report History</h1>
      <div className="bg-white rounded shadow p-6">
        {reports.length === 0 ? (
          <p className="text-gray-600">No reports yet.</p>
        ) : (
          <ul className="space-y-4">
            {reports.map((r) => (
              <li key={r.id} className="border-b pb-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold">Report #{r.id}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(r.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/reports/file?key=${encodeURIComponent(r.file_url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 text-white px-3 py-1 rounded"
                  >
                    View PDF
                  </a>
                  {role === "admin" && (
                    <button
                      onClick={() => deleteReport(r.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
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
