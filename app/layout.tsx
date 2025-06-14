import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Surya Permana - Frontend Engineer & Fullstack Developer",
  description: "Experienced Software Engineer with 4+ years of expertise in Vue.js, Nuxt.js, and modern web development. Specializing in high-performance applications and scalable solutions.",
  keywords: ["Frontend Engineer", "Fullstack Developer", "Vue.js", "Nuxt.js", "JavaScript", "TypeScript", "Web Development", "Bali Developer"],
  authors: [{ name: "I Gusti Agung Ngurah Surya Permana Kusuma" }],
  creator: "Surya Permana",
  openGraph: {
    title: "Surya Permana - Frontend Engineer & Fullstack Developer",
    description: "Experienced Software Engineer with 4+ years of expertise in Vue.js, Nuxt.js, and modern web development.",
    type: "website",
    locale: "en_US",
    siteName: "Surya Permana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Permana - Frontend Engineer & Fullstack Developer",
    description: "Experienced Software Engineer with 4+ years of expertise in Vue.js, Nuxt.js, and modern web development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}