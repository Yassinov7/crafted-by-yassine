type PageProps = {
  params: {
    lang: 'ar' | 'en';
  };
};

export default function AboutPage({ params }: PageProps) {
  const { lang } = params;

  return (
    <main className="min-h-screen">
      <h1>{lang === 'ar' ? 'من نحن' : 'About Us'}</h1>
    </main>
  );
}
