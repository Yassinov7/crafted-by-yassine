import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootRedirectPage() {
  const headersList = headers();
  const acceptLanguage = (await headersList).get('accept-language');

  // حاول التقاط اللغة الأولى من المتصفح
  const preferredLang = acceptLanguage?.split(',')[0].toLowerCase();

  // نختار اللغة الأقرب
  const targetLang = preferredLang?.startsWith('ar') ? 'ar' : 'en';

  redirect(`/${targetLang}`);
}
