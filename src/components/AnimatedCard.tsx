"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface AnimatedCardProps extends PropsWithChildren {
  delay?: number;
}

export default function AnimatedCard({ children, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group rounded-2xl p-6 border cursor-default overflow-hidden"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(200,169,126,0.06) 60%, transparent 80%)"
        }}
      />
      <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to right, transparent, var(--accent), transparent)" }}
      />
      {children}
    </motion.div>
  );
}