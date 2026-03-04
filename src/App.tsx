/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
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
import GlobalPlayer, { Track } from './components/GlobalPlayer';
import BackToTop from './components/BackToTop';
import { Language, translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('sl');
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const playerRef = useRef<any>(null);

  const t = translations[lang];

  const handleProgress = (state: { played: number }) => {
    if (!seeking) setPlayed(state.played);
  };

  const handleDuration = (dur: number) => setDuration(dur);
  const handleSeekMouseDown = () => setSeeking(true);
  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => setPlayed(parseFloat(e.target.value));
  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    setSeeking(false);
    if (playerRef.current) {
      const target = e.target as HTMLInputElement;
      playerRef.current.seekTo(parseFloat(target.value), 'fraction');
    }
  };

  const handlePlayTrack = (track: Track) => {
    if (currentTrack?.url === track.url) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setIsPlayerVisible(true);
    }
  };

  const handleClosePlayer = () => {
    setIsPlayerVisible(false);
    setIsPlaying(false);
    // Optional: delay clearing the track so the exit animation finishes smoothly
    setTimeout(() => setCurrentTrack(null), 300);
  };

  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-neon selection:text-darker pb-20">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Marquee text={lang === 'sl' ? 'DJ AKADEMIJA' : 'DJ ACADEMY'} />
      <Academy lang={lang} />
      <Marquee text={lang === 'sl' ? 'O MENI' : 'ABOUT'} />
      <About lang={lang} />
      <Marquee text={lang === 'sl' ? 'ZADNJA GLASBA' : 'LATEST MUSIC'} />
      <Music 
        lang={lang} 
        onPlayTrack={handlePlayTrack} 
        currentTrack={currentTrack} 
        isPlaying={isPlaying} 
        playerRef={playerRef}
        muted={muted}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onEnded={() => setIsPlaying(false)}
      />
      <Marquee text={lang === 'sl' ? 'PRIHAJAJOČI DOGODKI' : 'UPCOMING EVENTS'} />
      <Events lang={lang} />
      <Marquee text={lang === 'sl' ? 'GALERIJA' : 'GALLERY'} />
      <Gallery lang={lang} />
      <Marquee text={lang === 'sl' ? 'STOPITE V STIK' : 'GET IN TOUCH'} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <BackToTop />
      <GlobalPlayer 
        track={currentTrack} 
        isVisible={isPlayerVisible} 
        onClose={handleClosePlayer} 
        playing={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        played={played}
        duration={duration}
        muted={muted}
        onMuteToggle={() => setMuted(!muted)}
        onSeekMouseDown={handleSeekMouseDown}
        onSeekChange={handleSeekChange}
        onSeekMouseUp={handleSeekMouseUp}
      />
    </div>
  );
}
