import { Suspense } from "react";
import DoramaPageClient from "./DoramaPageClient";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
          <div className="text-[var(--accent)] font-display tracking-widest text-sm uppercase animate-pulse">
            Loading...
          </div>
        </div>
      }
    >
      <DoramaPageClient />
    </Suspense>
  );
}