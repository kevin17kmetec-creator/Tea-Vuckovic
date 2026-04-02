import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-darker relative">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
        >
          <img
            src="https://lh3.googleusercontent.com/d/17FfdpUBnbmfHnj1aELQhgIHVqBfaifRF"
            alt="Tea Vučkovič"
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-outline break-words">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-neon" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300">
            {t.bio1}
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t.bio2}
          </p>
          <div className="pt-8">
            <a
              href="#contact"
              className="inline-block border border-white/20 px-8 py-4 uppercase tracking-widest font-bold text-sm hover:bg-white hover:text-darker transition-colors"
            >
              {t.bookings}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
