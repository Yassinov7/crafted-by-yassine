type Props = {
  params: {
    lang: 'ar' | 'en';
  };
};

export default function ContactPage({ params }: Props) {
  const { lang } = params;

  return (
    <main className="min-h-screen">
      <h1>{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h1>
    </main>
  );
}
