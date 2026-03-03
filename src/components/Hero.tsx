import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Image as ImageIcon } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-darker">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-60">
          <img
            src="https://www.klubskascena.hr/wp-content/uploads/2025/08/tea-vuckovic-nova.jpg"
            alt="Tea Vučkovič"
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/50 to-darker" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none"
        >
          Tea <span className="text-neon block md:inline">Vučkovič</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg md:text-2xl font-medium tracking-widest uppercase text-gray-400"
        >
          {t.subtitle}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-px h-16 bg-gradient-to-b from-neon to-transparent"
      />
    </section>
  );
}
