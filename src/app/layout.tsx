import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "../styles/globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doramas · Our List",
  description: "Nuestra colección personal de doramas y series.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${inter.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}