import Intro from '@/components/projects/Intro';
import Technologies from '@/components/projects/Technologies';
import ProjectsList from '@/components/projects/ProjectsList';
import Extra from '@/components/projects/Extra';


export default function ProjectsPage({ params }) {
  const { lang } = params;

  return (
    <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
      <Intro lang={lang} />
      <Technologies lang={lang} />
      <ProjectsList lang={lang} />
      <Extra lang={lang} />
    </main>
  );
}
