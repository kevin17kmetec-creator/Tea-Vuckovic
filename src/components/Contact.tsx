import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { Language, translations } from '../translations';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-dark">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="bg-darker p-10 rounded-2xl border border-white/5 hover:border-neon/50 transition-colors">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-1">
                    {t.bookings}
                  </h3>
                  <a
                    href="mailto:bookings@teavuckovic.com"
                    className="text-gray-400 hover:text-neon transition-colors"
                  >
                    bookings@teavuckovic.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-darker p-10 rounded-2xl border border-white/5 hover:border-neon/50 transition-colors">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-16 h-16 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-1">
                    {t.academy}
                  </h3>
                  <a
                    href="mailto:info@teavuckovic.com"
                    className="text-gray-400 hover:text-neon transition-colors"
                  >
                    info@teavuckovic.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-darker p-10 rounded-2xl border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    placeholder={t.form.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">
                  {t.form.subject}
                </label>
                <select
                  id="subject"
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors appearance-none"
                >
                  <option value="booking">{t.form.subjects.booking}</option>
                  <option value="academy">{t.form.subjects.academy}</option>
                  <option value="other">{t.form.subjects.other}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest font-bold text-gray-400 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon transition-colors resize-none"
                  placeholder="..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neon text-darker font-black uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} /> {t.form.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
