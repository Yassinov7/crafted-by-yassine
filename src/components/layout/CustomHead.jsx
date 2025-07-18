// src/components/layout/CustomHead.tsx

import Head from 'next/head';

export default function CustomHead({ lang }) {
  const isAr = lang === 'ar';

  return (
    <Head>
      <title>{isAr ? 'صُنع بإتقان بواسطة محمد ياسين' : 'Crafted By Yassine'}</title>
      <meta name="description" content={isAr ? 'موقع بورتفوليو شخصي' : 'Personal portfolio website'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#f5fbfc" />


      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      

      {/* Open Graph / SEO tags (اختياري) */}
      <meta property="og:locale" content={isAr ? 'ar_AR' : 'en_US'} />
      <meta property="og:site_name" content="Yassine Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={isAr ? 'بورتفوليو م. محمد ياسين' : 'Eng. Mohammad Yassine Portfolio'} />
      <meta property="og:description" content={isAr ? 'تعرف على مشاريعي ومهاراتي' : 'Discover my projects and skills'} />
      <meta property="og:image" content="/preview.png" />
      <meta property="og:url" content="https://crafted-by-yassine.vercel.app/" />
    </Head>
  );
}
