// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Quiz from "./pages/quiz";
import Referral from "./pages/referral";
import AdminDashboard from "./pages/admin";
import NotFound from "./pages/not-found";
import Reports from "./pages/reports";
import MyReports from "./pages/my-reports";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/referral/:code" element={<Referral />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
