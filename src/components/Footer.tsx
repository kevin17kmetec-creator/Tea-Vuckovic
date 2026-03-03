import { Instagram, Facebook, Music, Disc } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
  lang: Language;
}

const socials = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'SoundCloud', icon: Music, href: '#' },
  { name: 'Beatport', icon: Disc, href: '#' },
];

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-darker py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold tracking-tighter uppercase inline-block mb-2">
            Tea <span className="text-neon">Vučkovič</span>
          </a>
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {t.rights}
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-gray-400 hover:text-neon transition-colors"
              aria-label={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
