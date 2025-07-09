import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      <title>Crafted by Yassine</title>
      <meta name="description" content="A modern portfolio by Mohamed Yassine. Made with love 💙" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#111111" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}
