import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  
<<<<<<< HEAD
<<<<<<< HEAD
  // A+ Headers complets 2025
=======
  // Headers A+ complets
>>>>>>> 60c8500 (security: A+ headers via next.config.js + middleware (Vercel optimal))
=======
  // A+ Headers complets 2025
>>>>>>> 52e0eb3 (security: A+ MAX 9 headers (HSTS, CSP, COEP, COOP))
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()')
  response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp')
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
  
  return response
}

export const config = {
<<<<<<< HEAD
<<<<<<< HEAD
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
=======
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
>>>>>>> 60c8500 (security: A+ headers via next.config.js + middleware (Vercel optimal))
=======
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
>>>>>>> 52e0eb3 (security: A+ MAX 9 headers (HSTS, CSP, COEP, COOP))
}
