import Intro from '@/components/projects/Intro';
import Technologies from '@/components/projects/Technologies';
import ProjectsList from '@/components/projects/ProjectsList';
import Extra from '@/components/projects/Extra';
import SectionDivider from  '@/components/layout/SectionDivider';

export default function ProjectsPage({ params }) {
  const { lang } = params;

  return (
    <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
      <Intro lang={lang} />
      <SectionDivider/>
      <Technologies lang={lang} />
      <SectionDivider/>
      <ProjectsList lang={lang} />
      <SectionDivider/>
      <Extra lang={lang} />
    </main>
  );
}
