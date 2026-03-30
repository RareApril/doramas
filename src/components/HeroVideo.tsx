"use client";
import { motion } from "framer-motion";

interface HeroVideoProps {
  src: string;
  title: string;
  genre?: string;
  year?: number;
}

export default function HeroVideo({ src, title, genre, year }: HeroVideoProps) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ filter: "brightness(0.45) saturate(0.8)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-24 h-px bg-[var(--accent)]"
        />

        {(genre || year) && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-[var(--accent)] text-xs md:text-sm tracking-[0.3em] uppercase"
          >
            {genre}{genre && year && " · "}{year}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="gasoek text-white text-5xl md:text-7xl lg:text-8xl leading-none drop-shadow-2xl max-w-4xl"
        >
          {title}
        </motion.h1>
    
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="w-24 h-px bg-[var(--accent)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase font-display">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent"
        />
      </motion.div>
    </div>
  );
}