'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import FadeInSection from '@/components/motion/FadeInSection';
import PostForm from '@/components/admin/PostForm';

export default function AdminPage({ params }) {
  const { lang } = use(params);
  const isAr = lang === 'ar';
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

  // التحقق من المصادقة
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push(`/ ${ lang }/login`);
      } else {
    setUser(user);
}
    };
checkUser();
  }, [lang, router]);

// جلب التدوينات
useEffect(() => {
    const fetchPosts = async () => {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) {
            console.error('خطأ في جلب المقالات:', error);
        } else {
            setPosts(data);
        }
    };
    fetchPosts();
}, []);

// حذف تدوينة
const handleDelete = async (id) => {
    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (error) {
        console.error('خطأ في حذف المقال:', error);
    } else {
        setPosts(posts.filter((post) => post.id !== id));
    }
};

if (!user) {
    return (
        <div className="max-w-5xl mx-auto p-6 text-center">
            <p>{isAr ? 'جارٍ التحميل...' : 'Loading...'}</p>
        </div>
    );
}

return (
    <div className="w-full px-6 py-24 max-w-5xl mx-auto">
        <FadeInSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                {isAr ? 'لوحة التحكم' : 'Admin Dashboard'}
            </h1>
            <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />
        </FadeInSection>

        <FadeInSection>
            <button
                onClick={() => {
                    setSelectedPost(null);
                    setShowForm(true);
                }}
                className="mb-6 px-6 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/80 transition"
            >
                {isAr ? 'إنشاء مقال جديد' : 'Create New Post'}
            </button>
        </FadeInSection>

        {showForm && (
            <PostForm
                lang={lang}
                post={selectedPost}
                onSave={() => {
                    setShowForm(false);
                    setSelectedPost(null);
                    // إعادة جلب التدوينات
                    supabase
                        .from('posts')
                        .select('*')
                        .order('created_at', { ascending: false })
                        .then(({ data, error }) => {
                            if (!error) setPosts(data);
                        });
                }}
                onCancel={() => {
                    setShowForm(false);
                    setSelectedPost(null);
                }}
            />
        )}

        <FadeInSection>
            <h2 className="text-2xl font-bold text-accent mb-4">
                {isAr ? 'المقالات' : 'Posts'}
            </h2>
            <div className={`space-y-4 ${isAr ? 'direction-rtl' : ''}`}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="border rounded-lg p-4 bg-muted/10 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-accent">
                                {post.title[lang]}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {post.categories?.join(', ')}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    setSelectedPost(post);
                                    setShowForm(true);
                                }}
                                className="px-4 py-1 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition"
                            >
                                {isAr ? 'تعديل' : 'Edit'}
                            </button>
                            <button
                                onClick={() => handleDelete(post.id)}
                                className="px-4 py-1 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-background transition"
                            >
                                {isAr ? 'حذف' : 'Delete'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </FadeInSection>
    </div>
);
}
