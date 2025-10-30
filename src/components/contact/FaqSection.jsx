import FadeInSection from '@/components/motion/FadeInSection';

// FAQ Data
const faqs = {
    en: [
        {
            question: "What's your typical response time?",
            answer: "I usually respond to emails and messages within 24 hours during weekdays. For urgent matters, you can reach me via WhatsApp for a faster response."
        },
        {
            question: "What types of projects do you take on?",
            answer: "I specialize in web development projects including React applications, Next.js websites, and full-stack solutions. I'm also open to consulting and mentoring opportunities."
        },
        {
            question: "Do you work with clients outside Syria?",
            answer: "Yes, I work with clients globally. All communication and project management can be handled remotely through various digital platforms."
        },
        {
            question: "What's your preferred method of communication?",
            answer: "I'm most responsive via email and WhatsApp. For project discussions, I prefer calls or meeting to ensure clear communication."
        }
    ],
    ar: [
        {
            question: "ما هي مدة الرد المعتادة لديك؟",
            answer: "عادة أرد على الرسائل الإلكترونية والرسائل خلال 24 ساعة في أيام الأسبوع. للأمور العاجلة، يمكنك التواصل معي عبر واتساب للحصول على رد أسرع."
        },
        {
            question: "ما أنواع المشاريع التي تتولى تنفيذها؟",
            answer: "أتخصص في مشاريع تطوير الويب بما في ذلك تطبيقات React، ومواقع Next.js، والحلول الكاملة. كما أنني منفتح لفرص الاستشارة والإرشاد."
        },
        {
            question: "هل تعمل مع عملاء خارج سوريا؟",
            answer: "نعم، أعمل مع عملاء من جميع أنحاء العالم. يمكن التعامل مع جميع عمليات التواصل وإدارة المشاريع عن بُعد من خلال منصات رقمية متنوعة."
        },
        {
            question: "ما هي طريقتك المفضلة للتواصل؟",
            answer: "أنا الأكثر استجابة عبر البريد الإلكتروني وواتساب. ولمناقشات المشاريع، أفضل المكالمات او اجتماع لضمان التواصل الواضح."
        }
    ]
};

export default function FaqSection({ lang }) {
    const isAr = lang === 'ar';

    const faqList = isAr ? faqs.ar : faqs.en;

    return (
        <>
            {/* FAQ Section */}
            <FadeInSection>
                <section id="faq" className="w-full px-6 py-12 max-w-6xl mx-auto scroll-mt-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                    </h2>
                    <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-12" />

                    <div className="space-y-6 max-w-3xl mx-auto">
                        {faqList.map((faq, index) => (
                            <div key={index} className="bg-background border border-muted rounded-xl p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-accent mb-3">{faq.question}</h3>
                                <p className="text-muted">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>
        </>
    );
}
