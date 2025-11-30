import { createJWT } from "../../src/lib/jwt";
import bcrypt from "bcryptjs";

export const onRequestPost = async ({ request, env }) => {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  // Check if user already exists
  const existing = await env.INSIGHT_DB.prepare(
    "SELECT id FROM users WHERE email = ?"
  ).bind(email).first();

  if (existing) {
    return new Response(JSON.stringify({ error: "Email already registered" }), { status: 409 });
  }

  // Hash password
  const hash = await bcrypt.hash(password, 10);

  // Insert new user (default role = viewer)
  await env.INSIGHT_DB.prepare(
    "INSERT INTO users (email, password, role) VALUES (?, ?, ?)"
  ).bind(email, hash, "viewer").run();

  // Issue JWT
  const token = await createJWT({ email, role: "viewer" }, env.JWT_SECRET);

  return new Response(JSON.stringify({ token }), {
    headers: { "Content-Type": "application/json" },
  });
};
