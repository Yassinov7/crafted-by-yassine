'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';
export default function ProjectCard({ project, index, lang = 'en' }) {
    const isAr = lang === 'ar';
    const hasDetailsPage = project.slug;
    const projectPageLink = hasDetailsPage ? `/${lang}/projects/${project.slug}` : null;
    const externalLink = project.link;
    const imageUrl = project.image || '/images/projects/preview.png';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between text-text"
        >
            <div>
                <div className="rounded-lg overflow-hidden mb-4 border bg-background">
                    <Image
                        width={1200}
                        height={800}
                        src={imageUrl}
                        alt={project.title[lang]}
                        className="w-full h-48 object-cover"
                    />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-accent">
                    {project.title[lang]}
                </h3>

                <p className="text-sm mb-4 leading-relaxed text-muted">
                    {project.description[lang]}
                </p>

                {project.stack?.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-accent/90 text-white rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                {externalLink && (
                    <Button
                        as="a"
                        href={externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        className="text-sm flex-1"
                    >
                        {isAr ? 'زيارة الموقع ↗' : 'Visit Site ↗'}
                    </Button>
                )}

                {projectPageLink && (
                    <Button
                        as="a"
                        href={projectPageLink}
                        variant="default"
                        className="text-sm flex-1"
                    >
                        {isAr ? 'تفاصيل المشروع →' : 'Project Details →'}
                    </Button>
                )}
            </div>
        </motion.div>
    );
}