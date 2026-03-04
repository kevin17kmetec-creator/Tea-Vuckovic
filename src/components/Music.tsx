import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import ReactPlayer from 'react-player';
import { Language, translations } from '../translations';
import { Track } from './GlobalPlayer';

interface MusicProps {
  lang: Language;
  onPlayTrack: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
  playerRef: any;
  muted: boolean;
  volume: number;
  onProgress: (state: { played: number }) => void;
  onDuration: (dur: number) => void;
  onEnded: () => void;
}

const releases = [
  {
    title: 'Live DJ Set',
    label: 'YouTube',
    url: 'https://www.youtube-nocookie.com/watch?v=63WeqRLtPkQ',
    image: 'https://img.youtube.com/vi/63WeqRLtPkQ/maxresdefault.jpg',
  },
  {
    title: 'Be Willing',
    label: 'Tea Vuckovic Music',
    url: 'https://soundcloud.com/teavuckovic-music/be-willing',
    image: 'https://i1.sndcdn.com/artworks-itQgngSuvgui-0-t500x500.jpg',
  },
  {
    title: 'Space Monkey',
    label: 'Mark Sherry',
    url: 'https://soundcloud.com/marksherrydj/space-monkey-tea-vuckovic',
    image: 'https://i1.sndcdn.com/artworks-oKzbUL2mDogv-0-t500x500.jpg',
  },
];

export default function Music({ 
  lang, onPlayTrack, currentTrack, isPlaying, 
  playerRef, muted, volume, onProgress, onDuration, onEnded 
}: MusicProps) {
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
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-outline mb-6 break-words">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {releases.map((release, index) => {
            const isActive = currentTrack?.url === release.url;
            
            return (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div 
                className={`aspect-square overflow-hidden rounded-2xl mb-6 relative ${isActive ? 'ring-2 ring-neon ring-offset-4 ring-offset-darker' : ''} cursor-pointer`}
                onClick={() => onPlayTrack({ title: release.title, url: release.url, label: release.label })}
              >
                {isActive && release.url.includes('youtube') ? (
                  <div className="absolute inset-0 z-10 bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${release.url.split('v=')[1].split('&')[0]}?rel=0&modestbranding=1`}
                      width="100%"
                      height="100%"
                      title={release.title}
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={release.image}
                    alt={release.title}
                    className={`object-cover w-full h-full transition-all duration-700 scale-100 group-hover:scale-105 ${isActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'} ${isActive && release.url.includes('youtube') ? 'hidden' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {isActive && !release.url.includes('youtube') && (
                  <div className="hidden">
                    <ReactPlayer
                      ref={playerRef}
                      url={release.url}
                      playing={isPlaying}
                      muted={muted}
                      volume={volume}
                      onProgress={onProgress}
                      onDuration={onDuration}
                      onEnded={onEnded}
                      width="0"
                      height="0"
                    />
                  </div>
                )}

                {(!isActive || !release.url.includes('youtube')) && (
                  <div className={`absolute inset-0 bg-darker/60 transition-opacity duration-500 flex items-center justify-center z-10 ${isActive ? 'opacity-0 hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <span className="text-neon font-bold uppercase tracking-widest text-sm border border-neon px-6 py-3 rounded-full flex items-center gap-2 bg-darker/50 backdrop-blur-sm">
                      {isActive && isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />} 
                      {isActive ? (isPlaying ? (lang === 'sl' ? 'Pavza' : 'Pause') : t.listen) : t.listen}
                    </span>
                  </div>
                )}
              </div>
              <h3 className={`text-2xl font-bold uppercase tracking-wide mb-2 ${isActive ? 'text-neon' : ''}`}>
                {release.title}
              </h3>
              <p className="text-neon font-medium uppercase tracking-widest text-sm mb-6">
                {release.label}
              </p>
              
              {/* Custom Play Button */}
              <div 
                onClick={() => onPlayTrack({ title: release.title, url: release.url, label: release.label })}
                className={`w-full h-32 rounded-xl border flex flex-col items-center justify-center overflow-hidden cursor-pointer transition-colors group/btn ${isActive ? 'bg-neon/10 border-neon' : 'bg-dark border-white/10 hover:border-neon/50'}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors mb-2 ${isActive ? 'bg-neon text-darker' : 'bg-neon/10 text-neon group-hover/btn:bg-neon group-hover/btn:text-darker'}`}>
                  {isActive && isPlaying ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" className="ml-1" size={20} />}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-neon' : 'text-gray-400 group-hover/btn:text-white'}`}>
                  {isActive ? (isPlaying ? (lang === 'sl' ? 'Predvajanje...' : 'Playing...') : (lang === 'sl' ? 'Pavzirano' : 'Paused')) : (lang === 'sl' ? 'Predvajaj' : 'Play Track')}
                </span>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}

