'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { use } from 'react';
import BlogTitleSection from '@/components/blog/BlogTitleSection';
import BlogSearchSection from '@/components/blog/BlogSearchSection';
import BlogCategoriesSection from '@/components/blog/BlogCategoriesSection';
import BlogListSection from '@/components/blog/BlogListSection';
import BlogPaginationSection from '@/components/blog/BlogPaginationSection';

export default function BlogPage({ params }) {
    const { lang } = use(params); // استخدام React.use للوصول إلى params
    const isAr = lang === 'ar';
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

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
                post.title[lang]?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedCategory) {
            result = result.filter((post) => post.categories?.includes(selectedCategory));
        }
        setFilteredPosts(result);
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, posts, lang]);

    // حساب الصفحات
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    return (
        <div>
            <BlogTitleSection lang={lang} />
            <BlogSearchSection lang={lang} onSearch={setSearchTerm} />
            <BlogCategoriesSection
                lang={lang}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
            />
            <BlogListSection lang={lang} posts={paginatedPosts} />
            <BlogPaginationSection
                lang={lang}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}