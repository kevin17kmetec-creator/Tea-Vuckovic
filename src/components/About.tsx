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
            src="https://scontent-fra3-1.xx.fbcdn.net/v/t39.30808-6/467514825_1129069125888385_1507072227617104279_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=d7wUrYOoKAcQ7kNvwHRrHgZ&_nc_oc=AdmQ-YQ9-l3vBUk3J8MlHG_ujXdToR-JFZ5tgC93oYVzZTJZlPGqh_lMcKmnwBfo775aguhoKt5XAysmxna1eeQ9&_nc_zt=23&_nc_ht=scontent-fra3-1.xx&_nc_gid=HOpbwgCzSASS5zjRhTNweQ&_nc_ss=8&oh=00_Afx7j1M9OHA_3tJ20yCQOPFb-ogIe5FrUFdXrANio0KOBQ&oe=69AC8529"
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
