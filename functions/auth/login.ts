import { signJWT } from "../../src/lib/jwt";

export const onRequestPost = async ({ request, env }) => {
  const { email } = await request.json();
  let user = await env.INSIGHT_DB.prepare(
    "SELECT email, role FROM users WHERE email = ?"
  ).bind(email).first();

  if (!user) {
    await env.INSIGHT_DB.prepare(
      "INSERT INTO users (email, role) VALUES (?, ?)"
    ).bind(email, "viewer").run();
    user = { email, role: "viewer" };
  }

  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 8;
  const token = await signJWT({ sub: user.email, role: user.role, exp }, env.JWT_SECRET);

  return new Response(JSON.stringify({ token, role: user.role }), {
    headers: { "Content-Type": "application/json" }
  });
};
