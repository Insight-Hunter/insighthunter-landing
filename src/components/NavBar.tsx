import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [role, setRole] = useState<"admin" | "editor" | "viewer" | null>(null);

  useEffect(() => {
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
    checkRole();
  }, []);

  return (
    <nav className="bg-black text-white px-6 py-3 flex gap-6 items-center">
      <Link to="/quiz" className="hover:text-orange-400 font-semibold">
        Quiz
      </Link>
      <Link to="/my-reports" className="hover:text-orange-400 font-semibold">
        My Reports
      </Link>
      {role === "admin" && (
        <Link to="/reports" className="hover:text-orange-400 font-semibold">
          Reports History
        </Link>
      )}
    </nav>
  );
}
