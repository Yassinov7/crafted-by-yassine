import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import projects from '@/lib/projects';
import Image from 'next/image';

export async function generateMetadata({ params }) {
    const { lang, slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return {};
    }

    const isAr = lang === 'ar';
    const title = project.title[lang] || project.title.en;
    const description = project.description[lang] || project.description.en;

    return {
        title: `${title} | ${isAr ? 'مشاريع ياسينوف' : 'Yassinov Projects'}`,
        description,
        openGraph: {
            title,
            description,
            url: `https://crafted-by-yassine.vercel.app/${lang}/projects/${slug}`,
            images: [{ url: project.image || '/preview.png', width: 800, height: 600 }],
            locale: isAr ? 'ar_AR' : 'en_US',
            type: 'website',
        },
    };
}

export default async function ProjectDetailPage({ params }) {
    const { lang, slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    const isAr = lang === 'ar';
    const title = project.title[lang] || project.title.en;
    const description = project.longDescription?.[lang] || project.description[lang] || project.description.en;
    const hasExternalLink = project.link && project.link.startsWith('http');

    return (
        <main className="px-6 py-12 max-w-4xl mx-auto">
            <div className="mb-8">
                <Link
                    href={`/${lang}/projects`}
                    className="inline-flex items-center text-accent hover:underline mb-6"
                >
                    {isAr ? '← العودة للمشاريع' : '← Back to Projects'}
                </Link>

                <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">{title}</h1>

                <p className="text-lg text-text/80 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-accent/90 text-white rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <div className="mb-8">
                        <Button
                            as="a"
                            href={project.link}
                            target={hasExternalLink ? "_blank" : undefined}
                            rel={hasExternalLink ? "noopener noreferrer" : undefined}
                            variant="default"
                        >
                            {isAr ? 'عرض المشروع' : 'View Project'}
                            {hasExternalLink && (
                                <span className="ml-2">↗</span>
                            )}
                        </Button>
                    </div>
                )}

                {project.image && (
                    <div className="rounded-xl overflow-hidden border bg-background shadow-lg mb-8">
                        <Image
                            width={1200}
                            height={800}
                            src={project.image}
                            alt={title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )}

                <div className="text-sm text-text/60">
                    {isAr ? `تاريخ المشروع: ${new Date(project.date).toLocaleDateString('ar-EG')}` : `Project Date: ${new Date(project.date).toLocaleDateString('en-US')}`}
                </div>
            </div>
        </main>
    );
}