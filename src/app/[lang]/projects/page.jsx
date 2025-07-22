import Intro from '@/components/projects/Intro';
import Technologies from '@/components/projects/Technologies';
import ProjectsList from '@/components/projects/ProjectsList';
import Extra from '@/components/projects/Extra';
import SectionDivider from '@/components/layout/SectionDivider';

export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';

    const isAr = lang === 'ar';
    return {
      title: isAr ? 'مشاريعي | ياسينوف' : 'Projects | Yassinov',
      description: isAr
        ? 'تعرّف على أعمالي البرمجية ومشاريعي باستخدام React، Next.js، و Supabase.'
        : 'Browse my development projects using React, Next.js, and Supabase.',
      openGraph: {
        title: isAr ? 'مشاريع ياسينوف' : 'Yassinov Projects',
        description: isAr
          ? 'قائمة بمشاريعي وتجاربي البرمجية عبر السنوات.'
          : 'A showcase of my best coding projects and experience.',
        url: 'https://crafted-by-yassine.vercel.app/projects',
        images: [{ url: '/preview.png', width: 800, height: 600 }],
        locale: isAr ? 'ar_AR' : 'en_US',
        type: 'website',
      },
    };
  }


export default function ProjectsPage({ params }) {
  const { lang } = params;
  

  return (
    <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
      <Intro lang={lang} />
      <SectionDivider />
      <Technologies lang={lang} />
      <SectionDivider />
      <ProjectsList lang={lang} />
      <SectionDivider />
      <Extra lang={lang} />
    </main>
  );
}