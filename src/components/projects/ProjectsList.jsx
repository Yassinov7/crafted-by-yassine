// src/components/projects/ProjectsList.tsx
'use client';

const projects = [
  {
    title: { ar: 'منصة تعليمية', en: 'EduConnect Platform' },
    description: {
      ar: 'منصة تفاعلية لتعليم البرمجة باستخدام React وSupabase.',
      en: 'An interactive platform for learning coding using React and Supabase.',
    },
    link: 'https://educonnect.example.com',
    stack: ['React', 'Supabase', 'Tailwind'],
  },
  // أضف المزيد لاحقًا
];

export default function ProjectsList({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 max-w-6xl mx-auto px-6" id="projects">
      <h2 className="text-2xl font-bold mb-10 text-center">{isAr ? 'المشاريع' : 'Projects'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.link} className="border rounded-lg p-6 bg-background shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">{project.title[lang]}</h3>
            <p className="text-sm text-muted mb-4">{project.description[lang]}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-accent text-white rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              {isAr ? 'عرض المشروع' : 'View Project'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
