import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|.*\\.(?:png|jpg|jpeg|svg|gif|ico|webp)).*)',
  ],
};

export function middleware(req: any) {
  let lng;
  const cookieLng = req.cookies.get(cookieName)?.value;
  if (cookieLng) lng = acceptLanguage.get(cookieLng);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  const pathname = req.nextUrl.pathname;
  const currentLng = languages.find((loc) => pathname.startsWith(`/${loc}`));

  // Agar til allaqachon URL da bo'lsa va cookie bilan mos kelsa, redirect qilish shart emas
  if (currentLng === lng) {
    return NextResponse.next();
  }

  // Redirect faqat til noto'g'ri bo'lsa
  if (!currentLng && !pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url));
  }

  const response = NextResponse.next();
  if (cookieLng !== lng) {
    response.cookies.set(cookieName, lng);
  }

  return response;
}