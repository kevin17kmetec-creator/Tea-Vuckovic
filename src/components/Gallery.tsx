import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface GalleryProps {
  lang: Language;
}

const images = [
  'https://picsum.photos/seed/dj1/600/800',
  'https://picsum.photos/seed/dj2/800/600',
  'https://picsum.photos/seed/dj3/600/600',
  'https://picsum.photos/seed/dj4/800/800',
  'https://picsum.photos/seed/dj5/600/800',
  'https://picsum.photos/seed/dj6/800/600',
];

export default function Gallery({ lang }: GalleryProps) {
  const t = translations[lang].gallery;

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-darker">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-outline mb-6 break-words">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
