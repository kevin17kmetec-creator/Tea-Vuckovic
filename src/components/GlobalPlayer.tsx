import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, X, Volume2, VolumeX } from 'lucide-react';

export interface Track {
  title: string;
  url: string;
  label: string;
}

interface GlobalPlayerProps {
  track: Track | null;
  isVisible: boolean;
  onClose: () => void;
  playing: boolean;
  onTogglePlay: () => void;
  played: number;
  duration: number;
  muted: boolean;
  onMuteToggle: () => void;
  onSeekMouseDown: () => void;
  onSeekChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSeekMouseUp: (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => void;
}

export default function GlobalPlayer({ 
  track, isVisible, onClose, playing, onTogglePlay,
  played, duration, muted, onMuteToggle,
  onSeekMouseDown, onSeekChange, onSeekMouseUp
}: GlobalPlayerProps) {

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  if (!track) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 w-full bg-darker/95 backdrop-blur-xl border-t border-neon/30 z-[100] px-4 py-3 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-white/10 group cursor-pointer">
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onMouseDown={onSeekMouseDown}
              onChange={onSeekChange}
              onMouseUp={onSeekMouseUp}
              onTouchStart={onSeekMouseDown}
              onTouchEnd={onSeekMouseUp}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="h-full bg-neon relative pointer-events-none"
              style={{ width: `${played * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 bg-neon rounded-full scale-0 group-hover:scale-100 transition-transform shadow-[0_0_10px_rgba(191,0,255,0.8)]" />
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 mt-2">
            <button 
              onClick={onTogglePlay} 
              className="w-12 h-12 shrink-0 bg-neon text-darker rounded-full flex items-center justify-center hover:bg-white hover:scale-105 transition-all"
            >
              {playing ? <Pause fill="currentColor" size={20} /> : <Play fill="currentColor" className="ml-1" size={20} />}
            </button>
            <div className="overflow-hidden">
              <h4 className="text-white font-bold uppercase tracking-wider truncate">{track.title}</h4>
              <p className="text-neon text-xs uppercase tracking-widest truncate">{track.label}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 mt-2">
            <div className="text-xs font-mono text-gray-400 hidden md:block w-24 text-right">
              {formatTime(played * duration)} / {formatTime(duration)}
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <button 
              onClick={onMuteToggle} 
              className="text-gray-400 hover:text-white transition-colors hidden sm:block"
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-neon transition-colors p-2"
              title="Close Player"
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
