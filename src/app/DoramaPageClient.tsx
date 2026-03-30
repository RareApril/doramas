"use client";

import { doramas, type Dorama } from "./doramas";
import { useSearchParams } from "next/navigation";
import HeroVideo from "../components/HeroVideo";
import AnimatedCard from "../components/AnimatedCard";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function StarRating({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="text-lg"
          style={{
            color:
              i < value ? "var(--accent)" : "rgba(255,255,255,0.12)",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function PosterCasino({ dorama }: { dorama: Dorama }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-64 lg:w-72"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent), transparent 70%)",
        }}
      />
      <motion.div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3" }}
        initial={{ opacity: 0, scale: 1.08, rotateY: 15 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        <Image
          src={dorama.poster}
          alt={dorama.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={100}
          priority
          unoptimized
        />
        <motion.div
          className="absolute inset-x-0 h-12 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(200,169,126,0.35), transparent)",
            top: "-10%",
          }}
          initial={{ top: "-10%" }}
          whileInView={{ top: "110%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          style={{ background: "rgba(255,255,255,0)" }}
          whileInView={{
            background: [
              "rgba(255,255,255,0)",
              "rgba(255,255,255,0.25)",
              "rgba(255,255,255,0)",
              "rgba(200,169,126,0.15)",
              "rgba(255,255,255,0)",
            ],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 1.1,
            times: [0, 0.3, 0.5, 0.75, 1],
          }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-30 border-2 rounded-2xl"
          style={{ borderColor: "var(--accent)", opacity: 0 }}
          whileInView={{
            opacity: [0, 1, 0.8, 1, 0.6, 1, 0],
            scale: [1, 1.02, 0.99, 1.01, 1, 0.99, 1],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 1.3,
            times: [0, 0.2, 0.35, 0.5, 0.65, 0.85, 1],
          }}
        />
      </motion.div>

      {[
        "-left-3 top-1/4",
        "-right-3 top-1/3",
        "-left-2 top-2/3",
        "-right-2 top-1/2",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-1.5 h-1.5 rounded-full pointer-events-none`}
          style={{ background: "var(--accent)" }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, i % 2 === 0 ? -20 : 20],
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
        />
      ))}
    </motion.div>
  );
}

function PosterScroll({ dorama }: { dorama: Dorama }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-64 lg:w-72"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #b5894a, #7a1c2e, transparent 75%)",
        }}
      />
      <motion.div
        className="absolute -top-3 inset-x-0 h-6 rounded-full z-20 shadow-lg"
        style={{ background: "linear-gradient(to bottom, #c9a96e, #8b6c3a)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.div
        className="absolute -bottom-3 inset-x-0 h-6 rounded-full z-20 shadow-lg"
        style={{ background: "linear-gradient(to bottom, #8b6c3a, #c9a96e)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.div
        className="relative w-full rounded-sm overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3", transformOrigin: "center top" }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={dorama.poster}
          alt={dorama.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={100}
          unoptimized
        />
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(180,130,60,0.18) 0%, transparent 30%, transparent 70%, rgba(120,60,20,0.22) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: [1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9, times: [0, 0.6, 1] }}
        >
          <motion.div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, rgba(200,169,126,0.9), rgba(160,100,40,0.85))",
              border: "2px solid rgba(220,180,80,0.8)",
              boxShadow: "0 0 30px rgba(200,150,60,0.6)",
            }}
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: [0, 1.3, 1], rotate: [-20, 5, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span style={{ fontSize: "2rem" }}>👑</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function PosterHeartbeat({ dorama }: { dorama: Dorama }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-64 lg:w-72"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #c0392b, #8e1a2e, transparent 70%)",
        }}
      />
      <motion.svg
        className="absolute -top-8 inset-x-0 w-full z-20 pointer-events-none"
        viewBox="0 0 200 30"
        style={{ overflow: "visible" }}
      >
        <motion.polyline
          points="0,15 30,15 45,2 55,28 65,8 75,15 200,15"
          fill="none"
          stroke="#e74c3c"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, times: [0, 0.1, 0.8, 1] }}
        />
      </motion.svg>
      <motion.div
        className="relative w-full overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3", borderRadius: "1rem" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Image
          src={dorama.poster}
          alt={dorama.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={100}
          unoptimized
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          whileInView={{
            background: [
              "rgba(192,57,43,0)",
              "rgba(192,57,43,0.4)",
              "rgba(192,57,43,0)",
              "rgba(192,57,43,0.25)",
              "rgba(192,57,43,0)",
            ],
            scale: [1, 1.03, 1, 1.015, 1],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            delay: 0.8,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{ border: "2px solid rgba(231,76,60,0)" }}
          whileInView={{
            borderColor: [
              "rgba(231,76,60,0)",
              "rgba(231,76,60,0.9)",
              "rgba(231,76,60,0)",
              "rgba(231,76,60,0.5)",
              "rgba(231,76,60,0)",
            ],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            delay: 0.8,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      </motion.div>

      {[
        "top-1/4 -left-4",
        "top-1/3 -right-4",
        "top-2/3 -left-3",
        "top-1/2 -right-3",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} text-red-500 pointer-events-none`}
          style={{ fontSize: "10px" }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          whileInView={{ opacity: [0, 1, 0], scale: [0, 1.4, 0], y: [0, -25] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
        >
          ♥
        </motion.div>
      ))}
    </motion.div>
  );
}

function PosterDance({ dorama }: { dorama: Dorama }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-64 lg:w-72"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #f39c12, #e91e8c, transparent 70%)",
        }}
      />
      {["♩", "♪", "♫", "♬"].map((note, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none font-bold z-20"
          style={{
            color: ["#f39c12", "#e91e8c", "#9b59b6", "#3498db"][i],
            fontSize: "18px",
            top: ["10%", "20%", "70%", "80%"][i],
            left: i % 2 === 0 ? "-20px" : "auto",
            right: i % 2 !== 0 ? "-20px" : "auto",
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            y: [0, -10, -20, -30],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
        >
          {note}
        </motion.div>
      ))}
      <motion.div
        className="relative w-full overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3", borderRadius: "1rem" }}
        initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          rotate: [-6, 4, -2, 1, 0],
          scale: [0.9, 1.04, 0.98, 1.01, 1],
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src={dorama.poster}
          alt={dorama.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={100}
          unoptimized
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          whileInView={{
            background: [
              "rgba(243,156,18,0)",
              "rgba(243,156,18,0.2)",
              "rgba(233,30,140,0.2)",
              "rgba(155,89,182,0.15)",
              "rgba(52,152,219,0.1)",
              "rgba(243,156,18,0)",
            ],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function PosterFloat({ dorama }: { dorama: Dorama }) {
  const bubbles = [
    { size: 8, left: "15%", delay: 0.3 },
    { size: 5, left: "35%", delay: 0.5 },
    { size: 11, left: "60%", delay: 0.4 },
    { size: 6, left: "80%", delay: 0.7 },
    { size: 9, left: "25%", delay: 0.6 },
    { size: 4, left: "70%", delay: 0.9 },
  ];

  return (
    <motion.div
      className="relative flex-shrink-0 w-64 lg:w-72"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #1a6b8a, #0d3b52, transparent 70%)",
        }}
      />
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 pointer-events-none z-20 rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            background: "rgba(100,200,255,0.4)",
            border: "1px solid rgba(150,230,255,0.6)",
          }}
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-0, -280], opacity: [0, 0.8, 0.8, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 1.8,
            delay: b.delay,
            ease: "easeOut",
            times: [0, 0.1, 0.8, 1],
          }}
        />
      ))}
      <motion.div
        className="relative w-full overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3", borderRadius: "1rem" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={dorama.poster}
          alt={dorama.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={100}
          unoptimized
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            background:
              "linear-gradient(180deg, rgba(13,59,82,0.7) 0%, rgba(26,107,138,0.5) 50%, rgba(13,59,82,0.3) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{ border: "2px solid rgba(100,200,255,0)" }}
          whileInView={{
            borderColor: [
              "rgba(100,200,255,0)",
              "rgba(100,200,255,0.7)",
              "rgba(100,200,255,0.3)",
              "rgba(100,200,255,0)",
            ],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.0,
            delay: 0.8,
            times: [0, 0.3, 0.7, 1],
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function PosterTear({ dorama }: { dorama: Dorama }) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-64 lg:w-72"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #8e44ad, #2980b9, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-2xl"
        initial={{ opacity: 0, y: -10, scale: 0.5 }}
        whileInView={{ opacity: [0, 1, 1], y: [-10, 0, 0], scale: [0.5, 1.1, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, times: [0, 0.7, 1] }}
      >
        👑
      </motion.div>

      {[
        { left: "30%", delay: 0.8, height: 16 },
        { left: "60%", delay: 1.0, height: 12 },
        { left: "45%", delay: 1.2, height: 18 },
      ].map((tear, i) => (
        <motion.div
          key={i}
          className="absolute z-20 pointer-events-none"
          style={{
            left: tear.left,
            top: "-5%",
            width: 6,
            height: tear.height,
            borderRadius: "0 0 50% 50%",
            background:
              "linear-gradient(to bottom, rgba(147,197,253,0.9), rgba(96,165,250,0.6))",
          }}
          initial={{ y: 0, opacity: 0, scaleY: 0 }}
          whileInView={{
            y: [0, 0, 340],
            opacity: [0, 1, 1, 0],
            scaleY: [0, 1, 1, 0.3],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: tear.delay,
            times: [0, 0.05, 0.85, 1],
            ease: "easeIn",
          }}
        />
      ))}

      <motion.div
        className="relative w-full overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3", borderRadius: "1rem" }}
        initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={dorama.poster}
          alt={dorama.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 50vw, 33vw"
          quality={100}
          unoptimized
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
          style={{
            background:
              "linear-gradient(180deg, rgba(142,68,173,0.6) 0%, rgba(41,128,185,0.5) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{ border: "2px solid rgba(147,197,253,0)" }}
          whileInView={{
            borderColor: [
              "rgba(147,197,253,0)",
              "rgba(147,197,253,0.8)",
              "rgba(216,180,254,0.6)",
              "rgba(147,197,253,0.2)",
            ],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.9,
            times: [0, 0.3, 0.6, 1],
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function DoramaPoster({ dorama }: { dorama: Dorama }) {
  switch (dorama.id) {
    case "bonapetit":
      return <PosterScroll dorama={dorama} />;
    case "badmother":
      return <PosterHeartbeat dorama={dorama} />;
    case "chacha":
      return <PosterDance dorama={dorama} />;
    case "plankton":
      return <PosterFloat dorama={dorama} />;
    case "queenoftears":
      return <PosterTear dorama={dorama} />;
    default:
      return <PosterCasino dorama={dorama} />;
  }
}

export default function DoramaPageClient() {
  const params = useSearchParams();
  const doramaId = params.get("dorama") || "alice";
  const dorama = doramas.find((d) => d.id === doramaId) || doramas[0];

  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      <Navbar />
      <HeroVideo
        src={dorama.video}
        title={dorama.name}
        genre={dorama.genre}
        year={dorama.year}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
        <section className="flex flex-col lg:flex-row gap-16 items-start">
          <DoramaPoster dorama={dorama} />

          <div className="flex flex-col gap-8 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-display tracking-[0.3em] text-[var(--accent)] uppercase mb-1">
                {dorama.genre}
              </p>
              <p className="text-white/30 text-xs font-display tracking-widest mb-3">
                {dorama.originalName} · {dorama.year}
              </p>
              <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                {dorama.description}
              </p>
            </motion.div>

            <div className="gold-line" />

            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xs font-display tracking-[0.25em] text-white/30 uppercase"
              >
                Our Reviews
              </motion.p>

              {dorama.reviews.map((review, i) => (
                <AnimatedCard key={i} delay={i * 0.15}>
                  <div className="flex items-center gap-5">
                    <div className="relative flex-shrink-0">
                      <div
                        className="absolute -inset-1 rounded-full blur-sm opacity-50"
                        style={{ background: "var(--accent)" }}
                      />
                      <Image
                        src={review.icon}
                        width={52}
                        height={52}
                        alt={review.reviewerName}
                        className="relative rounded-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-[var(--accent)] font-display text-xs tracking-widest uppercase">
                        {review.reviewerName}
                      </p>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                          <span className="text-white/30 text-xs w-12">Rating</span>
                          <StarRating value={review.rate} />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white/30 text-xs w-12">Final</span>
                          <StarRating value={review.final} />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="text-xs font-display tracking-[0.3em] text-[var(--accent)] uppercase">
              Songs that remind us of this drama
            </p>
            <div className="gold-line w-48" />
          </motion.div>

          <div className="flex flex-col gap-4">
            {dorama.spotifyTracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <iframe
                  src={track}
                  width="100%"
                  height="80"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-xl"
                  style={{ border: "none" }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}