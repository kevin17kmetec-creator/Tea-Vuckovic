import { motion } from 'motion/react';

export default function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-neon py-4 border-y border-darker flex">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 80, // Even slower speed for a more professional feel
        }}
      >
        {/* We use two identical sets of items to create a seamless loop */}
        <div className="flex shrink-0">
          {[...Array(10)].map((_, i) => (
            <span
              key={`set1-${i}`}
              className="text-gray-900 text-2xl md:text-4xl font-black uppercase tracking-tighter mx-4"
            >
              {text} /
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {[...Array(10)].map((_, i) => (
            <span
              key={`set2-${i}`}
              className="text-gray-900 text-2xl md:text-4xl font-black uppercase tracking-tighter mx-4"
            >
              {text} /
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
