
import { NextRequest, NextResponse } from 'next/server';

// Dummy authentication check function
function isAuthenticated(request: NextRequest): boolean {
  // Example: Assume a cookie named "user-auth" means logged in
  return Boolean(request.cookies.get('user-auth'));
}

// Dummy analytics reporting (in production, use external API or queue/buffer)
function recordAnalytics(request: NextRequest) {
  // Replace with your real analytics (HTTP post, API call, etc.)
  console.log('Analytics hit:', {
    url: request.url,
    ip: request.ip,
    timestamp: new Date().toISOString()
  });
}

export function middleware(request: NextRequest) {
  // Only run this middleware for landing-related routes
  if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname.startsWith('/landing')
  ) {
    // 1. Record analytics event for landing visits
    recordAnalytics(request);

    // 2. Check authentication for special routes (e.g., /landing/secure)
    if (request.nextUrl.pathname.startsWith('/landing/secure')) {
      if (!isAuthenticated(request)) {
        // Redirect unauthenticated users to login
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }

    // 3. Add custom header for tracking
    const response = NextResponse.next();
    response.headers.set('X-Site', 'InsightHunterLanding');
    return response;
  }

  // Default: let other requests continue
  return NextResponse.next();
}

// Limit middleware to relevant routes
export const config = {
  matcher: ['/', '/landing/:path*'],
};
