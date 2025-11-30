import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [role, setRole] = useState<"admin" | "editor" | "viewer" | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("ih_token");
      if (!token) return setRole(null);
      const res = await fetch("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setRole(data.role);
        setEmail(data.email);
      }
    };
    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("ih_token");
    setRole(null);
    setEmail(null);
    navigate("/login"); // redirect to login page
  };

  return (
    <nav className="bg-black text-white px-6 py-3 flex gap-6 items-center justify-between">
      <div className="flex gap-6">
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
      </div>
      <div className="flex gap-4 items-center">
        {email ? (
          <>
            <span className="text-sm text-gray-300">{email}</span>
            <button
              onClick={logout}
              className="bg-red-600 px-3 py-1 rounded text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-orange-600 px-3 py-1 rounded text-white"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
