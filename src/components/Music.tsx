import { motion } from 'motion/react';
import { Language, translations } from '../translations';

interface MusicProps {
  lang: Language;
}

const releases = [
  {
    title: 'Space Monkey Remix',
    label: 'Techburst',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23bf00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    image: 'https://picsum.photos/seed/space/400/400',
  },
  {
    title: 'Inferno',
    label: 'Eclipse',
    embed: 'https://open.spotify.com/embed/track/123456789?utm_source=generator&theme=0',
    image: 'https://picsum.photos/seed/inferno/400/400',
  },
  {
    title: 'Tehnika EP',
    label: 'DSR Digital',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987654321&color=%23bf00ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    image: 'https://picsum.photos/seed/tehnika/400/400',
  },
];

export default function Music({ lang }: MusicProps) {
  const t = translations[lang].music;

  return (
    <section id="music" className="py-24 md:py-32 px-6 bg-darker">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-outline mb-6">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="aspect-square overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={release.image}
                  alt={release.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-neon font-bold uppercase tracking-widest text-sm border border-neon px-6 py-3 rounded-full">
                    {t.listen}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">
                {release.title}
              </h3>
              <p className="text-neon font-medium uppercase tracking-widest text-sm mb-6">
                {release.label}
              </p>
              
              {/* Embeds */}
              <div className="w-full h-32 bg-dark rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={release.embed}
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
