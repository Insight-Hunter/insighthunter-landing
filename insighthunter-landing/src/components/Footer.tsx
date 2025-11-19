export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold mb-4">Company</h5>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Product</h5>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Legal</h5>
          <ul className="space-y-2">
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/terms" className="hover:underline">Terms</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Connect</h5>
          <ul className="space-y-2">
            <li><a href="/affiliate" className="hover:underline">Affiliate Program</a></li>
            <li><a href="#" className="hover:underline">Newsletter Signup</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-400">© 2025 InsightHunter, Inc.</div>
    </footer>
  );
}
