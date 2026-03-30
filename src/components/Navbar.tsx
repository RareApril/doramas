"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { doramas } from "../app/doramas";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm pointer-events-none" />

      <div className="relative flex items-center gap-8 px-8 py-5">
        <Link href="/" className="font-display font-bold text-[var(--accent)] text-xl tracking-widest uppercase">
          Doramas
        </Link>

        <div className="h-4 w-px bg-white/10" />

        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="text-white/70 hover:text-white font-display text-sm tracking-wider uppercase transition-colors duration-200 flex items-center gap-2 py-2">
            Dramas
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[var(--accent)] text-xs"
            >
              ▾
            </motion.span>
          </button>

          {open && (
            <div className="absolute left-0 w-full h-3 top-full" />
          )}

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-3 w-56 rounded-xl overflow-hidden border"
                style={{
                  background: "rgba(8,8,8,0.95)",
                  borderColor: "var(--card-border)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {doramas.map((dorama, i) => (
                  <motion.div
                    key={dorama.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/?dorama=${dorama.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 text-white/70 hover:text-white hover:bg-white/5 transition-all duration-150 group"
                    >
                      <span className="text-[var(--accent)] text-xs font-display opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                      <span className="text-sm font-display tracking-wide">{dorama.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}