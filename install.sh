#!/usr/bin/env bash
set -e

# === 1. Initialize project ===
echo "Initializing project..."
npm init -y

# Install dependencies
npm install react react-dom react-router-dom lottie-react pdfkit
npm install -D vite typescript @types/react @types/react-dom @vitejs/plugin-react \
  tailwindcss postcss autoprefixer eslint @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser ts-node

# === 2. Scaffold configs ===
echo "Scaffolding configs..."
cat > vite.config.ts <<'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
});
EOF

cat > tailwind.config.js <<'EOF'
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
EOF

cat > postcss.config.js <<'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
EOF

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "ESNext"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
EOF

# === 3. Scaffold frontend ===
echo "Scaffolding frontend..."
mkdir -p src/components src/pages src/lib public/animations

cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>InsightHunter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

cat > src/main.tsx <<'EOF'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
EOF

cat > src/App.tsx <<'EOF'
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
EOF

cat > src/styles.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# === 4. Scaffold backend functions ===
echo "Scaffolding backend functions..."
mkdir -p functions/auth functions/content functions/referral

cat > src/lib/jwt.ts <<'EOF'
import { SignJWT, jwtVerify } from "jose";

export async function signJWT(payload: any, secret: string) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(secret));
}

export async function verifyJWT(token: string, secret: string) {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload;
  } catch {
    return null;
  }
}
EOF

cat > functions/auth/login.ts <<'EOF'
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
EOF

cat > functions/auth/me.ts <<'EOF'
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
EOF

# === 5. Animations placeholders ===
echo "Adding animation placeholders..."
cat > public/animations/onboarding.json <<'EOF'
{ "v":"5.7.4","nm":"Onboarding Placeholder","layers":[] }
EOF

cat > public/animations/loading.json <<'EOF'
{ "v":"5.7.4","nm":"Loading Placeholder","layers":[] }
EOF

cat > public/animations/success.json <<'EOF'
{ "v":"5.7.4","nm":"Success Placeholder","layers":[] }
EOF

echo "✅ InsightHunter scaffold complete!"
echo "Run 'npm run dev' to start the site."
