import TitleSection from '@/components/about/TitleSection';
import AboutSection from '@/components/about/AboutSection';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import SectionDivider from '@/components/layout/SectionDivider';
import CertificatesSection from '@/components/about/CertificatesSection';
import GoalSection from '@/components/about/GoalSection';

export default function AboutPage({ params }) {
  const { lang } = params;

  return (
    <>
      <TitleSection lang={lang} />
      <SectionDivider />
      <AboutSection lang={lang} />
      <SectionDivider />
      <ExperienceTimeline lang={lang} />
      <SectionDivider />
      <CertificatesSection lang={lang} />
      <SectionDivider />
      <GoalSection lang={lang} />
    </>
  );
}
