import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "vMix Deck | Professional Wireless Switcher & Tally Controller for vMix",
  description:
    "Turn your Mac, PC, iPad, or smartphone into a professional wireless switcher and Tally deck for vMix. Low latency, offline-first, NDI video preview, custom macros, and zero subscriptions.",
  keywords: [
    "vMix",
    "vMix controller",
    "stream deck",
    "tally light",
    "NDI preview",
    "video switcher",
    "live streaming",
    "broadcast companion",
  ],
  authors: [{ name: "vMix Deck Team" }],
  openGraph: {
    title: "vMix Deck | Professional Wireless Switcher & Tally Controller",
    description:
      "Turn your Mac, PC, iPad, or smartphone into a professional wireless switcher and Tally deck for vMix. Offline-first, NDI monitoring, and custom action grids.",
    url: "https://vmixdeck.app",
    siteName: "vMix Deck",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vMix Deck | Professional Wireless Switcher & Tally Controller",
    description:
      "Turn your Mac, PC, iPad, or smartphone into a professional wireless switcher and Tally deck for vMix.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('vmixdeck_theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
