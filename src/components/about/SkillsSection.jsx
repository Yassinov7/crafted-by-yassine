import FadeInSection from '@/components/motion/FadeInSection';


// Skills data
const skills = {
    en: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'MySQL', level: 90 },
        { name: 'UI/UX Design', level: 80 },
    ],
    ar: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'PHP', level: 75 },
        { name: 'MySQL', level: 90 },
        { name: 'UI/UX Design', level: 80 },
    ]
};

export default function SkillsSection({ lang }) {
    const isAr = lang === 'ar';
    const skillList = skills[lang] || [];

    return (
        <section id='skills' className="w-full px-6 py-24 max-w-6xl mx-auto scroll-mt-20">
            {/* Skills Section */}
            <FadeInSection>

                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    {isAr ? 'المهارات' : 'Skills'}
                </h2>
                <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skillList.map((skill, index) => (
                        <div key={index} className="bg-background border border-muted rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-text">{skill.name}</span>
                                <span className="text-accent">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                                <div
                                    className="bg-accent h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
}
