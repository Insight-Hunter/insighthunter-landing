export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-orange-600">InsightHunter.app</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700">Features</a>
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#blog" className="text-gray-700">Blog</a>
          <a href="/login" className="text-gray-700">Login</a>
          <a href="/signup" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500">Start Free Trial</a>
        </nav>
      </div>
    </header>
  );
}

