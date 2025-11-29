import { verifyJWT } from "../../src/lib/jwt";

export const onRequestGet = async ({ request, env }) => {
  const auth = request.headers.get("Authorization") || "";
  if (!auth.startsWith("Bearer ")) return new Response("Unauthorized", { status: 401 });

  const token = auth.slice(7);
  const payload = await verifyJWT(token, env.JWT_SECRET);
  if (!payload) return new Response("Invalid token", { status: 401 });

  return new Response(JSON.stringify({ email: payload.sub, role: payload.role }), {
    headers: { "Content-Type": "application/json" }
  });
};
