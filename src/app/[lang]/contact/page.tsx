
export default function ContactPage({ params }: { params: { lang: 'ar' | 'en' } }) {
  const { lang } = params;

  return (
    <main className="min-h-screen">
      <h1>{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h1>
    </main>
  );
}
