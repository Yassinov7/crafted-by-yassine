// src/components/sections/AboutSection.tsx

export default function AboutSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="w-full px-6 py-20 max-w-7xl mx-auto text-center space-y-6">
      <h2 className="text-3xl font-bold">
        {isAr ? 'عنّي' : 'About Me'}
      </h2>
      <p className="text-muted text-lg leading-relaxed">
        {isAr
          ? 'أنا محمد، مطوّر واجهات أمامية أستخدم React وNext.js لبناء تطبيقات ويب سريعة وجذابة. أؤمن بتجربة المستخدم النظيفة، والكود المنظم، والتعلم المستمر.'
          : "I'm Mohammed, a frontend developer using React and Next.js to build fast and delightful web apps. I care about clean UX, maintainable code, and continuous learning."}
      </p>
    </section>
  );
}
