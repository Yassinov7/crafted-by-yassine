'use client';

import { useEffect, useState } from 'react';
import FadeInSection from '@/components/motion/FadeInSection';

export default function AboutSection({ lang }) {
  const isAr = lang === 'ar';

  const lines = isAr
    ? [
      // Arabic version (array of arrays: each item is an array of [text, color])
      [
        ['const', 'purple'],
        [' ', 'white'],
        ['عنّي', 'blue'],
        [' = ', 'white'],
        ['{', 'white'],
      ],
      [
        ['  الاسم', 'cyan'],
        [': ', 'white'],
        ['"محمد ياسين"', 'red'],
        [',', 'white'],
      ],
      [
        ['  العمر', 'cyan'],
        [': ', 'white'],
        ['23', 'yellow'],
        [',', 'white'],
      ],
      [
        ['  الموقع', 'cyan'],
        [': ', 'white'],
        ['"درعا، سوريا"', 'red'],
        [',', 'white'],
      ],
      [
        ['  اللغات', 'cyan'],
        [': ', 'white'],
        ['["العربية", "الإنجليزية"]', 'yellow'],
        [',', 'white'],
      ],
      [
        ['  التقنيات', 'cyan'],
        [': ', 'white'],
        ['["React", "Next.js", "Supabase"]', 'red'],
        [',', 'white'],
      ],
      [
        ['  المشاريع', 'cyan'],
        [': ', 'white'],
        ['["ستلايت الرجاء", "UniRide", "EduConnect"]', 'yellow'],
        [',', 'white'],
      ],
      [
        ['  الهدف', 'cyan'],
        [': ', 'white'],
        ['"تقديم حلول تقنية فعالة تركز على المستخدم."', 'red'],
      ],
      [['}', 'white']],
    ]
    : [
      [
        ['const', 'purple'],
        [' ', 'white'],
        ['aboutMe', 'blue'],
        [' = ', 'white'],
        ['{', 'white'],
      ],
      [
        ['  name', 'cyan'],
        [': ', 'white'],
        ['"Mohammed Yassine"', 'red'],
        [',', 'white'],
      ],
      [
        ['  age', 'cyan'],
        [': ', 'white'],
        ['23', 'yellow'],
        [',', 'white'],
      ],
      [
        ['  location', 'cyan'],
        [': ', 'white'],
        ['"Daraa, Syria"', 'red'],
        [',', 'white'],
      ],
      [
        ['  languages', 'cyan'],
        [': ', 'white'],
        ['["Arabic", "English"]', 'yellow'],
        [',', 'white'],
      ],
      [
        ['  techStack', 'cyan'],
        [': ', 'white'],
        ['["React", "Next.js", "Supabase"]', 'red'],
        [',', 'white'],
      ],
      [
        ['  projects', 'cyan'],
        [': ', 'white'],
        ['["Satellite Al-Raja", "UniRide", "EduConnect"]', 'yellow'],
        [',', 'white'],
      ],
      [
        ['  goal', 'cyan'],
        [': ', 'white'],
        ['"Deliver impactful, user-focused software solutions."', 'red'],
      ],
      [['}', 'white']],
    ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentLineText, setCurrentLineText] = useState([]);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const fullLine = lines[currentLineIndex];
    const fullText = fullLine.map(([text]) => text).join('');

    const timeout = setTimeout(() => {
      const typed = fullText.slice(0, currentCharIndex + 1);
      const updated = [];
      let counter = 0;

      for (const [text, color] of fullLine) {
        const partLength = Math.min(text.length, Math.max(0, typed.length - counter));
        const part = text.slice(0, partLength);
        counter += text.length;
        updated.push([part, color]);
      }

      setCurrentLineText(updated);

      if (typed.length >= fullText.length) {
        setDisplayedLines((prev) => [...prev, fullLine]);
        setCurrentLineText([]);
        setCurrentCharIndex(0);
        setCurrentLineIndex((prev) => prev + 1);
      } else {
        setCurrentCharIndex((prev) => prev + 1);
      }
    }, 25);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentLineIndex, lines]);

  return (
    <section id="about" className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20">
      <FadeInSection>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {isAr ? 'عنّي' : 'About Me'}
        </h2>

        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />

        <div
          dir={isAr ? 'rtl' : 'ltr'}
          className="bg-[#1e1e1e] text-green-400 font-mono rounded-lg shadow-xl p-6 max-w-3xl mx-auto text-sm sm:text-base overflow-hidden leading-relaxed"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <span className="text-white block mb-2">
            {isAr ? '// تعريفي الشخصي' : '// Personal Introduction'}
          </span>

          {displayedLines.map((line, idx) => (
            <div key={idx}>
              {line.map(([text, color], i) => (
                <span key={i} className={getColor(color)}>
                  {text}
                </span>
              ))}
            </div>
          ))}

          {/* current line typing */}
          <div>
            {currentLineText.length > 0 && (
              <div>
                {currentLineText.map(([text, color], i) => (
                  <span key={i} className={getColor(color)}>
                    {text}
                  </span>
                ))}
                <span className="animate-pulse">|</span>
              </div>
            )}

            <span className="animate-pulse">|</span>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

// Helper to map color names to Tailwind classes
function getColor(name) {
  switch (name) {
    case 'purple':
      return 'text-purple-400';
    case 'blue':
      return 'text-blue-400';
    case 'white':
      return 'text-white';
    case 'cyan':
      return 'text-cyan-400';
    case 'yellow':
      return 'text-yellow-300';
    case 'red':
      return 'text-red-400';
    default:
      return 'text-green-400';
  }
}
