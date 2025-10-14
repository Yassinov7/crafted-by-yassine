'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import IntroSection from '@/components/layout/IntroSection';
import BlogSearchSection from '@/components/blog/BlogSearchSection';
import BlogCategoriesSection from '@/components/blog/BlogCategoriesSection';
import BlogListSection from '@/components/blog/BlogListSection';
import BlogPaginationSection from '@/components/blog/BlogPaginationSection';

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
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: true });
            if (error) {
                console.error('خطأ في جلب المقالات:', error);
                return;
            }
            setPosts(data);
            setFilteredPosts(data);

            // استخراج التصنيفات الفريدة
            const allCategories = data.flatMap((post) => post.categories || []);
            setCategories([...new Set(allCategories)]);
        };

        fetchPosts();
    }, []);

    // تصفية المقالات بناءً على البحث والتصنيف
    useEffect(() => {
        let result = posts;
        if (searchTerm) {
            result = result.filter((post) =>
                post.title[params?.lang]?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedCategory) {
            result = result.filter((post) => post.categories?.includes(selectedCategory));
        }
        setFilteredPosts(result);
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, posts, params?.lang]);

    // حساب الصفحات
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
            <IntroSection lang={params?.lang} title={title} description={description} tagline={tagline} />
            <BlogSearchSection lang={params?.lang} onSearch={setSearchTerm} />
            <BlogCategoriesSection
                lang={params?.lang}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />
            <BlogListSection lang={params?.lang} posts={paginatedPosts} />
            <BlogPaginationSection
                lang={params?.lang}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </main>
    );
}