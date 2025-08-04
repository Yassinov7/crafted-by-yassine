'use client';

import FadeInSection from '@/components/motion/FadeInSection';

export default function BlogCategoriesSection({ lang, categories, selectedCategory, onCategorySelect }) {
    const isAr = lang === 'ar';

    return (
        <FadeInSection>
            <section className="w-full px-6 py-8 max-w-5xl mx-auto">
                <h3 className="text-xl font-semibold text-accent mb-4 text-center">
                    {isAr ? 'التصنيفات' : 'Categories'}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategorySelect(category)}
                            className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === category
                                    ? 'bg-accent text-background'
                                    : 'border border-accent text-accent hover:bg-accent hover:text-background'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>
        </FadeInSection>
    );
}