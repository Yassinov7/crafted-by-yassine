'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ProjectCard({ project, index, lang = 'en' }) {
    const isAr = lang === 'ar';
    const hasDetailsPage = project.slug;
    const link = hasDetailsPage ? `/${lang}/projects/${project.slug}` : project.link;

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

            <div className="text-end mt-auto">
                <Button
                    as="a"
                    href={link}
                    target={hasDetailsPage ? undefined : '_blank'}
                    rel={hasDetailsPage ? undefined : 'noopener noreferrer'}
                    variant="outline"
                    className="text-sm"
                >
                    {isAr ? 'عرض المشروع →' : 'View Project →'}
                </Button>
            </div>
        </motion.div>
    );
}
