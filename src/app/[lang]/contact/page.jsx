export default function ContactPage({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen">
      <h1>{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h1>
    </main>
  );
}
