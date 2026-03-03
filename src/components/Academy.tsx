import { motion } from 'motion/react';
import { Headphones, Sliders, Mic2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface AcademyProps {
  lang: Language;
}

export default function Academy({ lang }: AcademyProps) {
  const t = translations[lang].academy;

  const courses = [
    {
      title: t.basic.title,
      description: t.basic.desc,
      icon: Headphones,
    },
    {
      title: t.intermediate.title,
      description: t.intermediate.desc,
      icon: Sliders,
    },
    {
      title: t.advanced.title,
      description: t.advanced.desc,
      icon: Mic2,
    },
  ];

  return (
    <section id="academy" className="py-24 md:py-32 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-outline mb-6">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-8" />
          
          {/* Requested Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 aspect-video"
          >
            <img 
              src="https://www.klubskascena.hr/wp-content/uploads/2025/08/tea-vuckovic2.jpg" 
              alt="Tea Vučkovič Academy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-darker p-10 rounded-2xl border border-white/5 hover:border-neon/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-neon transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <course.icon size={48} className="text-neon mb-8" />
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">
                {course.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {course.description}
              </p>
              <a
                href="mailto:info@teavuckovic.com"
                className="inline-flex items-center text-sm uppercase tracking-widest font-bold text-neon hover:text-white transition-colors"
              >
                {t.inquire} &rarr;
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-400 mb-6">
            {t.production}
          </p>
          <a
            href="mailto:info@teavuckovic.com"
            className="inline-block bg-neon text-darker px-10 py-5 uppercase tracking-widest font-black text-sm hover:bg-white transition-colors rounded-full"
          >
            {t.contactBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
