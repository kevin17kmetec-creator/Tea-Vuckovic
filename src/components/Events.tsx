import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface EventsProps {
  lang: Language;
}

const events = [
  {
    date: 'OCT 24',
    location: 'Ljubljana, SI',
    venue: 'K4 Club',
    event: 'Tehnika Showcase',
  },
  {
    date: 'NOV 05',
    location: 'Berlin, DE',
    venue: 'Tresor',
    event: 'DSR Digital Night',
  },
  {
    date: 'NOV 18',
    location: 'Zagreb, HR',
    venue: 'Boogaloo',
    event: 'Eclipse Label Party',
  },
  {
    date: 'DEC 02',
    location: 'Maribor, SI',
    venue: 'Stuk',
    event: 'Tea Vučkovič All Night Long',
  },
];

export default function Events({ lang }: EventsProps) {
  const t = translations[lang].events;

  return (
    <section id="events" className="py-24 md:py-32 px-6 bg-dark">
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

        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-darker border border-white/5 hover:border-neon/50 rounded-2xl transition-all duration-300 hover:bg-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 w-full md:w-auto mb-6 md:mb-0">
                <div className="flex items-center gap-4 text-neon font-black text-2xl uppercase tracking-tighter w-32">
                  <Calendar size={24} className="text-white/50" />
                  {event.date}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-1">
                    {event.event}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-widest">
                    <MapPin size={14} />
                    {event.venue} &middot; {event.location}
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-white hover:text-neon transition-colors border border-white/20 hover:border-neon px-6 py-3 rounded-full"
              >
                {t.explore} <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
