/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Academy from './components/Academy';
import Music from './components/Music';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language, translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('sl');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-neon selection:text-darker">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Marquee text={lang === 'sl' ? 'DJ AKADEMIJA' : 'DJ ACADEMY'} />
      <Academy lang={lang} />
      <Marquee text={lang === 'sl' ? 'O MENI' : 'ABOUT'} />
      <About lang={lang} />
      <Marquee text={lang === 'sl' ? 'ZADNJA GLASBA' : 'LATEST MUSIC'} />
      <Music lang={lang} />
      <Marquee text={lang === 'sl' ? 'PRIHAJAJOČI DOGODKI' : 'UPCOMING EVENTS'} />
      <Events lang={lang} />
      <Marquee text={lang === 'sl' ? 'GALERIJA' : 'GALLERY'} />
      <Gallery lang={lang} />
      <Marquee text={lang === 'sl' ? 'STOPITE V STIK' : 'GET IN TOUCH'} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
