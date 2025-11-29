import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Quiz from './pages/quiz';
import Referral from './pages/referral';
import AdminDashboard from './pages/admin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/referral/:code" element={<Referral />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
