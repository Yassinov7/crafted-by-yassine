'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import FadeInSection from '@/components/motion/FadeInSection';

export default function PostForm({ lang, post, onSave, onCancel }) {
    const isAr = lang === 'ar';
    const [title, setTitle] = useState(post ? post.title : { ar: '', en: '' });
    const [categories, setCategories] = useState(post ? post.categories.join(', ') : '');
    const [coverImage, setCoverImage] = useState(post ? post.cover_image : null);
    const [slug, setSlug] = useState(post ? post.slug : '');

    // Initialize Tiptap editors with immediatelyRender: false
    const editorAr = useEditor({
        extensions: [StarterKit, Image, Link],
        content: post ? post.content.ar : '',
        immediatelyRender: false, // Prevent SSR rendering
    });
    const editorEn = useEditor({
        extensions: [StarterKit, Image, Link],
        content: post ? post.content.en : '',
        immediatelyRender: false, // Prevent SSR rendering
    });

    // Ensure editors are only used client-side
    useEffect(() => {
        if (!editorAr || !editorEn) return;

        // Optionally, set content again if needed
        if (post) {
            editorAr.commands.setContent(post.content.ar);
            editorEn.commands.setContent(post.content.en);
        }
    }, [editorAr, editorEn, post]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const { data, error } = await supabase.storage
            .from('blog-covers')
            .upload(`public/${Date.now()}-${file.name}`, file);
        if (error) {
            console.error('خطأ في رفع الصورة:', error);
            return;
        }
        const { data: { publicUrl } } = supabase.storage
            .from('blog-covers')
            .getPublicUrl(data.path);
        setCoverImage(publicUrl);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editorAr || !editorEn) return;

        const content = {
            ar: editorAr.getJSON(),
            en: editorEn.getJSON(),
        };
        const postData = {
            title,
            content,
            cover_image: coverImage,
            slug,
            categories: categories.split(',').map((cat) => cat.trim()),
        };

        if (post) {
            // Update post
            const { error } = await supabase
                .from('posts')
                .update(postData)
                .eq('id', post.id);
            if (error) {
                console.error('خطأ في تحديث المقال:', error);
            } else {
                onSave();
            }
        } else {
            // Create new post
            const { error } = await supabase.from('posts').insert([postData]);
            if (error) {
                console.error('خطأ في إنشاء المقال:', error);
            } else {
                onSave();
            }
        }
    };

    return (
        <FadeInSection>
            <form
                onSubmit={handleSubmit}
                className={`max-w-4xl mx-auto p-6 space-y-4 ${isAr ? 'direction-rtl' : ''}`}
            >
                <h2 className="text-2xl font-bold text-accent">
                    {isAr ? (post ? 'تعديل المقال' : 'إنشاء مقال جديد') : (post ? 'Edit Post' : 'Create New Post')}
                </h2>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'العنوان (عربي)' : 'Title (Arabic)'}
                    </label>
                    <input
                        type="text"
                        value={title.ar}
                        onChange={(e) => setTitle({ ...title, ar: e.target.value })}
                        className="w-full p-3 border border-accent rounded-full bg-muted/10 text-accent"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'العنوان (إنجليزي)' : 'Title (English)'}
                    </label>
                    <input
                        type="text"
                        value={title.en}
                        onChange={(e) => setTitle({ ...title, en: e.target.value })}
                        className="w-full p-3 border border-accent rounded-full bg-muted/10 text-accent"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'الرابط (Slug)' : 'Slug'}
                    </label>
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full p-3 border border-accent rounded-full bg-muted/10 text-accent"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'التصنيفات (مفصولة بفواصل)' : 'Categories (comma-separated)'}
                    </label>
                    <input
                        type="text"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                        className="w-full p-3 border border-accent rounded-full bg-muted/10 text-accent"
                        placeholder={isAr ? 'مثال: تقنية, برمجة' : 'Example: Technology, Programming'}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'صورة الغلاف' : 'Cover Image'}
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-3 border border-accent rounded-lg bg-muted/10 text-accent"
                    />
                    {coverImage && (
                        <img src={coverImage} alt="Cover Preview" className="mt-2 w-32 h-32 object-cover rounded-lg" />
                    )}
                </div>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'المحتوى (عربي)' : 'Content (Arabic)'}
                    </label>
                    {editorAr && <EditorContent editor={editorAr} className="border p-4 rounded-lg bg-background" />}
                </div>
                <div>
                    <label className="block mb-2 text-accent">
                        {isAr ? 'المحتوى (إنجليزي)' : 'Content (English)'}
                    </label>
                    {editorEn && <EditorContent editor={editorEn} className="border p-4 rounded-lg bg-background" />}
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/80 transition"
                    >
                        {isAr ? 'حفظ' : 'Save'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 py-2 border border-accent text-accent rounded-full hover:bg-accent hover:text-background transition"
                    >
                        {isAr ? 'إلغاء' : 'Cancel'}
                    </button>
                </div>
            </form>
        </FadeInSection>
    );
}