import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang].nav;

  const links = [
    { name: t.about, href: '#about' },
    { name: t.academy, href: '#academy' },
    { name: t.music, href: '#music' },
    { name: t.events, href: '#events' },
    { name: t.gallery, href: '#gallery' },
    { name: t.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-darker/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter uppercase">
          Tea <span className="text-neon">Vučkovič</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold hover:text-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/20 pl-6 ml-2">
            <Globe size={14} className="text-gray-500" />
            <button 
              onClick={() => setLang('sl')}
              className={`text-[10px] font-bold uppercase tracking-tighter transition-colors ${lang === 'sl' ? 'text-neon' : 'text-gray-500 hover:text-white'}`}
            >
              SL
            </button>
            <span className="text-gray-700 text-[10px]">/</span>
            <button 
              onClick={() => setLang('en')}
              className={`text-[10px] font-bold uppercase tracking-tighter transition-colors ${lang === 'en' ? 'text-neon' : 'text-gray-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <div className="flex items-center gap-2 mr-2">
            <button 
              onClick={() => setLang('sl')}
              className={`text-[10px] font-bold uppercase transition-colors ${lang === 'sl' ? 'text-neon' : 'text-gray-500'}`}
            >
              SL
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`text-[10px] font-bold uppercase transition-colors ${lang === 'en' ? 'text-neon' : 'text-gray-500'}`}
            >
              EN
            </button>
          </div>
          <button
            className="text-white hover:text-neon transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-darker/95 backdrop-blur-lg border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl uppercase tracking-widest font-bold hover:text-neon transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
