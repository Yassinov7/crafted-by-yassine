'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import IntroSection from '@/components/layout/IntroSection';
import BlogSearchSection from '@/components/blog/BlogSearchSection';
import BlogCategoriesSection from '@/components/blog/BlogCategoriesSection';
import PostCard from '@/components/blog/PostCard';
import FadeInSection from '@/components/motion/FadeInSection';
import SectionDivider from '@/components/layout/SectionDivider';
export default function BlogPage({ params }) {
    const isAr = params?.lang === 'ar';
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const title = isAr ? 'مدونتي' : 'My Blog';
    const description = isAr
        ? 'اكتشف مقالاتي حول البرمجة، التصميم، وأحدث التقنيات التي أشاركها لإلهامك.'
        : 'Explore my articles on programming, design, and the latest tech trends to inspire you.';
    const tagline = isAr
        ? '✦ شارك معي في رحلتي المعرفية ✦'
        : '✦ Join me on my knowledge journey ✦';

    // جلب البيانات من Supabase
    useEffect(() => {
        const fetchPostsAndCategories = async () => {
            // Fetch posts with category information
            const { data: postsData, error: postsError } = await supabase
                .from('posts')
                .select(`
          *,
          category:categories(name)
        `)
                .eq('status', 'published')
                .order('published_at', { ascending: false });

            if (postsError) {
                console.error('خطأ في جلب المقالات:', postsError);
                return;
            }

            setPosts(postsData);
            setFilteredPosts(postsData);

            // Fetch categories
            const { data: categoriesData, error: categoriesError } = await supabase
                .from('categories')
                .select('*')
                .order('name');

            if (categoriesError) {
                console.error('خطأ في جلب التصنيفات:', categoriesError);
                return;
            }

            setCategories(categoriesData);
        };

        fetchPostsAndCategories();
    }, []);

    // تصفية المقالات بناءً على البحث والتصنيف
    useEffect(() => {
        let result = posts;
        if (searchTerm) {
            result = result.filter((post) =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedCategory) {
            result = result.filter((post) => post.category_id === selectedCategory.id);
        }
        setFilteredPosts(result);
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, posts]);

    // حساب الصفحات
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto" id='#'>
            <IntroSection lang={params?.lang} title={title} description={description} tagline={tagline} />
            <SectionDivider />

            {/* Two-column layout for filters on medium screens and larger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl py-4 mx-auto w-full">
                <div>
                    <BlogSearchSection lang={params?.lang} onSearch={setSearchTerm} />
                </div>
                <div>
                    <BlogCategoriesSection
                        lang={params?.lang}
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategorySelect={setSelectedCategory}
                    />
                </div>
            </div>

            {/* Posts Grid */}
            <FadeInSection>
                <section id='posts' className="w-full px-6 py-12 max-w-5xl mx-auto">
                    {paginatedPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">
                                {isAr ? 'لا توجد مقالات متاحة' : 'No posts available'}
                            </p>
                        </div>
                    ) : (
                        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'direction-rtl' : ''}`}>
                            {paginatedPosts.map((post, index) => (
                                <FadeInSection key={post.id} delay={index * 0.1}>
                                    <PostCard post={post} lang={params?.lang} />
                                </FadeInSection>
                            ))}
                        </div>
                    )}
                </section>
            </FadeInSection>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center gap-2 py-6">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg bg-muted disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/20 transition-colors"
                    >
                        {isAr ? 'السابق' : 'Previous'}
                    </button>

                    <span className="px-4 py-2">
                        {currentPage} / {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg bg-muted disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/20 transition-colors"
                    >
                        {isAr ? 'التالي' : 'Next'}
                    </button>
                </div>
            )}
        </main>
    );
}