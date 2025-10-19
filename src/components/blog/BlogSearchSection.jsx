
'use client';

import { useState } from 'react';
import FadeInSection from '@/components/motion/FadeInSection';

export default function BlogSearchSection({ lang, onSearch }) {
    const isAr = lang === 'ar';
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <FadeInSection>
            <section className="w-full px-6 pt-14 max-w-5xl mx-auto">
                <input
                    type="text"
                    placeholder={isAr ? 'ابحث في المقالات...' : 'Search articles...'}
                    value={searchTerm}
                    onChange={handleSearch}
                    className={`w-full max-w-md mx-auto p-3 border border-accent rounded-full bg-muted/10 text-accent placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent ${isAr ? 'text-right' : 'text-left'}`}
                />
            </section>
        </FadeInSection>
    );
}