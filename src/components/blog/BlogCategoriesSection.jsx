'use client';

import CategoryBadge from './CategoryBadge';

export default function BlogCategoriesSection({ lang, categories, selectedCategory, onCategorySelect }) {
    const isAr = lang === 'ar';

    const handleCategorySelect = (category) => {
        if (selectedCategory && selectedCategory.id === category.id) {
            onCategorySelect(null); // Deselect if same category is clicked
        } else {
            onCategorySelect(category);
        }
    };

    return (
        <section className="w-full px-6 pt-16 max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => onCategorySelect(null)}
                    className={`text-sm px-3 py-1 rounded-full transition-all duration-200 ${!selectedCategory
                        ? 'bg-accent text-background'
                        : 'bg-muted text-foreground hover:bg-accent/20'
                        }`}
                >
                    {isAr ? 'الكل' : 'All'}
                </button>

                {categories.map((category) => (
                    <CategoryBadge
                        key={category.id}
                        category={category}
                        onClick={handleCategorySelect}
                        active={selectedCategory && selectedCategory.id === category.id}
                    />
                ))}
            </div>
        </section>
    );
}