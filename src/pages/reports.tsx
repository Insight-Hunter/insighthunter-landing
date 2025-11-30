import { useEffect, useState } from "react";

export default function Reports() {
  const [reports, setReports] = useState<any[]>([]);
  const [role, setRole] = useState<"admin" | "editor" | "viewer" | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const [filters, setFilters] = useState({ email: "", start: "", end: "" });

  useEffect(() => {
    const loadReports = async () => {
      let query = "/reports/list";
      const params = new URLSearchParams();
      if (filters.email) params.append("email", filters.email);
      if (filters.start) params.append("start", filters.start);
      if (filters.end) params.append("end", filters.end);
      if (params.toString()) query += `?${params.toString()}`;

      const res = await fetch(query);
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
  }, [filters]);

  const toggleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const deleteSelected = async () => {
    const token = localStorage.getItem("ih_token");
    if (!token) return alert("Unauthorized");
    if (selected.length === 0) return alert("No reports selected");

    await fetch("/reports/cleanup", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: selected }),
    });

    setReports((prev) => prev.filter((r) => !selected.includes(r.id)));
    setSelected([]);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Report History</h1>

      {role === "admin" && (
        <div className="bg-white rounded shadow p-4 mb-6 flex gap-4 items-end">
          <div>
            <label className="block text-sm font-medium">Filter by Email</label>
            <input
              type="text"
              className="border p-2 rounded w-64"
              value={filters.email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
              placeholder="user@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              className="border p-2 rounded"
              value={filters.start}
              onChange={(e) => setFilters({ ...filters, start: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="date"
              className="border p-2 rounded"
              value={filters.end}
              onChange={(e) => setFilters({ ...filters, end: e.target.value })}
            />
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={() => setFilters({ email: "", start: "", end: "" })}
          >
            Clear Filters
          </button>
        </div>
      )}

      <div className="bg-white rounded shadow p-6">
        {reports.length === 0 ? (
          <p className="text-gray-600">No reports found.</p>
        ) : (
          <>
            {role === "admin" && selected.length > 0 && (
              <button
                onClick={deleteSelected}
                className="mb-4 bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete Selected ({selected.length})
              </button>
            )}
            <ul className="space-y-4">
              {reports.map((r) => (
                <li
                  key={r.id}
                  className="border-b pb-3 flex justify-between items-center"
                >
                  <div className="flex items-center gap-3">
                    {role === "admin" && (
                      <input
                        type="checkbox"
                        checked={selected.includes(r.id)}
                        onChange={() => toggleSelect(r.id)}
                      />
                    )}
                    <div>
                      <p className="font-semibold">Report #{r.id}</p>
                      <p className="text-sm text-gray-600">
                        {new Date(r.created_at).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">{r.email}</p>
                    </div>
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
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
