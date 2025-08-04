'use client';

import FadeInSection from '@/components/motion/FadeInSection';

export default function BlogPaginationSection({ lang, currentPage, totalPages, onPageChange }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section className="w-full px-6 py-8 max-w-5xl mx-auto flex justify-center gap-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          {isAr ? 'السابق' : 'Previous'}
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px - 4 py - 2 rounded - lg ${
    currentPage === index + 1
        ? 'bg-accent text-background'
        : 'border border-accent text-accent'
} `}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
        >
          {isAr ? 'التالي' : 'Next'}
        </button>
      </section>
    </FadeInSection>
  );
}