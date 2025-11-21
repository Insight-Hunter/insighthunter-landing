import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Function to run shell commands
function runCommand(command: string): void {
  console.log(`Running: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

// Function to install dependencies
function installDependencies(): void {
  console.log('Installing dependencies...');
  runCommand('npm install react react-dom react-router-dom @mui/material @mui/icons-material');
  runCommand('npm install --save-dev typescript @types/react @types/react-dom @types/react-router-dom');
  runCommand('npm install --save-dev vite @vitejs/plugin-react');
}

// Function to create a basic Vite config
function createViteConfig(): void {
  const viteConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
`;

  fs.writeFileSync('vite.config.ts', viteConfig);
  console.log('Vite config created.');
}

// Function to create a basic tsconfig
function createTsConfig(): void {
  const tsConfig = `
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
`;

  fs.writeFileSync('tsconfig.json', tsConfig);
  console.log('tsconfig.json created.');
}

// Function to create a basic index.html
function createIndexHtml(): void {
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Insight Hunter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  fs.writeFileSync('public/index.html', indexHtml);
  console.log('index.html created.');
}

// Function to create a basic main.tsx
function createMainTsx(): void {
  const mainTsx = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
`;

  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  fs.writeFileSync('src/main.tsx', mainTsx);
  console.log('main.tsx created.');
}

// Function to create a basic App.tsx
function createAppTsx(): void {
  const appTsx = `
import React from 'react';

function App() {
  return (
    <div>
      <h1>Welcome to Insight Hunter</h1>
    </div>
  );
}

export default App;
`;

  fs.writeFileSync('src/App.tsx', appTsx);
  console.log('App.tsx created.');
}

// Main function
function main(): void {
  installDependencies();
  createViteConfig();
  createTsConfig();
  createIndexHtml();
  createMainTsx();
  createAppTsx();
  console.log('Setup complete.');
}

main();
