'use client';

import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';
import FadeInSection from '@/components/motion/FadeInSection';

const services = {
  ar: [
    {
      title: 'تطوير الويب',
      description: 'مواقع وتطبيقات ويب حديثة وسريعة باستخدام أحدث التقنيات',
      icon: Code,
      features: ['React/Next.js', 'تصميم متجاوب', 'تحسين الأداء']
    },
    {
      title: 'تصميم UI/UX',
      description: 'تجارب مستخدم بديهية وجذابة تركز على المستخدم',
      icon: Palette,
      features: ['_wireframing', 'تصميم تفاعلي', 'نماذج أولية']
    },
    {
      title: 'تطوير التطبيقات',
      description: 'تطبيقات محمولة عالية الجودة لأنظمة iOS و Android',
      icon: Smartphone,
      features: ['React Native', 'واجهات أصلية', 'تكامل APIs']
    },
    {
      title: 'إدارة قواعد البيانات',
      description: 'حلول قواعد بيانات آمنة وقابلة للتوسع',
      icon: Database,
      features: ['Supabase', 'PostgreSQL', 'الأمان']
    },
    {
      title: 'تحسين الأداء',
      description: 'تحسين سرعة ومرونة مواقع الويب والتطبيقات',
      icon: Zap,
      features: ['تحليل الأداء', 'تحسين التحميل', 'التخزين المؤقت']
    },
    {
      title: 'استضافة المواقع',
      description: 'استضافة موثوقة وآمنة لمواقع الويب والتطبيقات',
      icon: Globe,
      features: ['Vercel', 'Netlify', 'أمان SSL']
    }
  ],
  en: [
    {
      title: 'Web Development',
      description: 'Modern, fast websites and web applications using cutting-edge technologies',
      icon: Code,
      features: ['React/Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user experiences focused on the user',
      icon: Palette,
      features: ['Wireframing', 'Interactive Design', 'Prototyping']
    },
    {
      title: 'App Development',
      description: 'High-quality mobile applications for iOS and Android systems',
      icon: Smartphone,
      features: ['React Native', 'Native Interfaces', 'API Integration']
    },
    {
      title: 'Database Management',
      description: 'Secure and scalable database solutions',
      icon: Database,
      features: ['Supabase', 'PostgreSQL', 'Security']
    },
    {
      title: 'Performance Optimization',
      description: 'Improving speed and scalability of websites and applications',
      icon: Zap,
      features: ['Performance Analysis', 'Load Optimization', 'Caching']
    },
    {
      title: 'Website Hosting',
      description: 'Reliable and secure hosting for websites and applications',
      icon: Globe,
      features: ['Vercel', 'Netlify', 'SSL Security']
    }
  ]
};

export default function ServicesGridSection({ lang }) {
  const isAr = lang === 'ar';
  const serviceList = services[lang];

  return (
    <FadeInSection>
      <section className="w-full py-12 max-w-7xl mx-auto" id='services'>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {isAr ? 'خدماتي' : 'My Services'}
          </h2>
          <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {isAr 
              ? 'أقدم حلولاً رقمية شاملة تناسب احتياجات عملائك بدقة' 
              : 'I provide comprehensive digital solutions tailored precisely to your clients\' needs'}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isAr ? 'rtl' : 'ltr'}`}>
          {serviceList.map((service, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <div className="group flex flex-col h-full border rounded-2xl p-6 bg-muted/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 text-accent">
                  <service.icon size={40} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="mb-4 text-muted-foreground flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}