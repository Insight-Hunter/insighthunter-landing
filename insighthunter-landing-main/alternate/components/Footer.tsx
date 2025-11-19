export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div><h3 className="font-bold mb-4">InsightHunter</h3><p className="text-sm">AI-powered insights for modern teams.</p></div>
        <div><h4 className="font-semibold mb-2">Product</h4><ul className="text-sm space-y-1"><li><a href="#">Features</a></li></ul></div>
        <div><h4 className="font-semibold mb-2">Company</h4><ul className="text-sm space-y-1"><li><a href="#">About</a></li></ul></div>
        <div><h4 className="font-semibold mb-2">Connect</h4><input placeholder="Email" className="w-full p-2 rounded mb-2" /><button className="bg-primary w-full py-2 rounded">Subscribe</button></div>
      </div>
      <div className="text-center text-sm mt-8">© 2025 InsightHunter. All rights reserved.</div>
    </footer>
  );
}
