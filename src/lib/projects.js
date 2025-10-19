// Project data constants
const projects = [
    {
        slug: 'satellite-al-rajaa',
        title: {
            ar: 'ستلايت الرجاء',
            en: 'Satellite Al-Rajaa',
        },
        description: {
            ar: 'منصة لعرض الخدمات والعروض في الكويت بواجهة أنيقة وسريعة.',
            en: 'A platform to showcase services and offers in Kuwait with a fast, elegant UI.',
        },
        longDescription: {
            ar: 'منصة لعرض الخدمات والعروض في الكويت بواجهة أنيقة وسريعة. تم تطويرها باستخدام Next.js و Supabase و Tailwind CSS لتوفير تجربة مستخدم سلسة وسريعة.',
            en: 'A platform to showcase services and offers in Kuwait with a fast, elegant UI. Developed using Next.js, Supabase, and Tailwind CSS to provide a seamless and fast user experience.',
        },
        link: 'https://satellitealrajaa.com',
        stack: ['Next.js', 'Supabase', 'Tailwind'],
        image: '/preview.png',
        date: '2023-06-15',
    },
    {
        slug: 'uniride',
        title: {
            ar: 'UniRide',
            en: 'UniRide',
        },
        description: {
            ar: 'نظام لتنظيم تنقل الطلاب بين الجامعات والمناطق، مع إدارة المشرفين.',
            en: 'A system for managing university ride-sharing for students and supervisors.',
        },
        longDescription: {
            ar: 'نظام لتنظيم تنقل الطلاب بين الجامعات والمناطق، مع إدارة المشرفين. يوفر النظام حلولاً فعالة لمشكلة التنقل للطلاب، مع لوحة تحكم لإدارة الرحلات والمستخدمين.',
            en: 'A system for managing university ride-sharing for students and supervisors. The system provides effective solutions to student transportation problems, with a dashboard for managing trips and users.',
        },
        stack: ['React', 'Supabase', 'Zustand'],
        image: '/preview.png',
        date: '2023-09-20',
    },
    {
        slug: 'educonnect',
        title: {
            ar: 'EduConnect',
            en: 'EduConnect',
        },
        description: {
            ar: 'منصة تعليمية تفاعلية باستخدام React و Supabase، مشروع تخرجي.',
            en: 'Interactive learning platform built with React and Supabase – my graduation project.',
        },
        longDescription: {
            ar: 'منصة تعليمية تفاعلية باستخدام React و Supabase، مشروع تخرجي. تتيح المنصة للطلاب التفاعل مع المحتوى التعليمي ومشاركة المعرفة بطريقة مبتكرة وم engaging.',
            en: 'Interactive learning platform built with React and Supabase – my graduation project. The platform allows students to interact with educational content and share knowledge in an innovative and engaging way.',
        },
        stack: ['React', 'Supabase', 'Tiptap'],
        image: '/preview.png',
        date: '2023-12-10',
    },
];

export default projects;