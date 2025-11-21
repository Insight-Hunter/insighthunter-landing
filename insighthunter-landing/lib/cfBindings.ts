export const D1 = {
  blog_posts: {
    async get(slug: string) {
      return await INSIGHT_DB.prepare('SELECT * FROM blog_posts WHERE slug = ?').bind(slug).first();
    },
    async put(post: { slug: string; title: string; excerpt: string; author: string; content: string }) {
      return await INSIGHT_DB.prepare(
        'INSERT INTO blog_posts (slug, title, excerpt, author, content, created_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)'
      ).bind(post.slug, post.title, post.excerpt, post.author, post.content).run();
    },
  },
  testimonials: {
    async list() {
      return await INSIGHT_DB.prepare('SELECT * FROM testimonials ORDER BY id DESC LIMIT 10').all();
    },
  },
};

export const KV = {
  async getToken(email: string) {
    return await INSIGHT_KV.get(`lead_tokens:${email}`);
  },
  async setToken(email: string, token: string) {
    return await INSIGHT_KV.put(`lead_tokens:${email}`, token);
  },
};

export const Durable = {
  async trackReferral(code: string) {
    const id = INSIGHT_DO.idFromName(`referral-${code}`);
    const obj = INSIGHT_DO.get(id);
    return await obj.fetch('https://track');
  },
};
