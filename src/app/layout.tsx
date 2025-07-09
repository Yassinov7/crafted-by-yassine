// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Noto_Kufi_Arabic } from 'next/font/google';

const font = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-arabic',
});

export const metadata: Metadata = {
  title: 'Crafted By Yassine',
  description: 'Portfolio site built with love 💙',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  );
}
