const posts = [
  {
    title: 'Top 5 AI Trends for 2025',
    excerpt: 'Explore the future of predictive analytics, generative models, and real-time decision engines.',
    author: 'James M. Turner',
    readTime: '4 min read',
    image: '/images/blog-ai.webp',
    slug: 'ai-trends-2025',
  },
  {
    title: 'How to Benchmark Your Data Maturity',
    excerpt: 'Learn the 4 stages of data maturity and how to accelerate your organization’s growth.',
    author: 'InsightHunter Team',
    readTime: '5 min read',
    image: '/images/blog-maturity.webp',
    slug: 'data-maturity-benchmark',
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">From the Blog</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <a key={idx} href={`/blog/${post.slug}`} className="block bg-gray-50 rounded shadow hover:shadow-lg transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                <p className="text-gray-600 mb-2">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.author} · {post.readTime}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <form className="inline-flex items-center">
            <input type="email" placeholder="Your email" className="px-4 py-2 border rounded-l" />
            <button className="bg-orange-600 text-white px-4 py-2 rounded-r hover:bg-orange-500">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
