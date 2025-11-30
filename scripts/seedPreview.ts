/**
 * Seed preview data into Cloudflare D1 for Blog, Testimonials, and Pricing.
 * Run with: npm run seed:preview
 */

export default async function seedPreview(env: any) {
  // Blog posts
  await env.INSIGHT_DB.prepare(
    "INSERT INTO blog_posts (slug, title, excerpt, author, content) VALUES (?, ?, ?, ?, ?)"
  ).bind(
    "preview-post",
    "Preview Blog Post",
    "This is a seeded blog post for preview builds.",
    "InsightHunter Bot",
    "Welcome to the preview environment! This post demonstrates seeded content."
  ).run();

  // Testimonials
  await env.INSIGHT_DB.prepare(
    "INSERT INTO testimonials (name, company, quote, image_url, rating) VALUES (?, ?, ?, ?, ?)"
  ).bind(
    "Jane Doe",
    "Acme Corp",
    "InsightHunter made our reporting effortless!",
    "https://placehold.co/100x100",
    5
  ).run();

  // Pricing plans
  await env.INSIGHT_DB.prepare(
    "INSERT INTO pricing_plans (name, price, features) VALUES (?, ?, ?)"
  ).bind(
    "Preview Plan",
    "$29/mo",
    JSON.stringify(["Seeded feature A", "Seeded feature B", "Seeded feature C"])
  ).run();

  console.log("✅ Preview data seeded successfully");
}
