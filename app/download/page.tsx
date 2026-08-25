"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Download,
  Apple,
  Laptop,
  Terminal,
  Smartphone,
  CheckCircle,
  Copy,
  Check,
  ShieldCheck,
  Cpu,
  Info,
  Tv,
} from "lucide-react";

export default function DownloadPage() {
  const [selectedOS, setSelectedOS] = useState<"mac" | "win" | "linux" | "mobile">("mac");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 space-y-12">
          {/* Header info */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full badge-pill">
              <span>Latest Release: v1.2.0</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Download vMix Deck
            </h1>
            <p className="max-w-xl mx-auto text-base text-neutral-600 dark:text-neutral-400">
              Native, ultra-low latency wireless controller and Tally deck for vMix. Choose your platform below.
            </p>
          </div>

          {/* Platform Tab Selector */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-neutral-200/70 dark:bg-neutral-800/80 border border-black/5 dark:border-white/5 space-x-1">
              {[
                { id: "mac", label: "macOS", icon: <Apple className="w-4 h-4" /> },
                { id: "win", label: "Windows", icon: <Laptop className="w-4 h-4" /> },
                { id: "linux", label: "Linux", icon: <Terminal className="w-4 h-4" /> },
                { id: "mobile", label: "iOS & Android", icon: <Smartphone className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedOS(tab.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedOS === tab.id
                      ? "bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-sm"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Platform Specific Download Box */}
          <div className="card-obsidian rounded-3xl p-6 sm:p-10 space-y-8">
            {selectedOS === "mac" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                      <Apple className="w-5 h-5" />
                      vMix Deck for macOS
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Universal Binary (Apple Silicon M1/M2/M3/M4 &amp; Intel) · macOS 12.0+
                    </p>
                  </div>
                  <a
                    href="https://github.com/francisbenjamin/vmixdeck/releases"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-md w-full md:w-auto justify-center"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download .DMG (28.4 MB)</span>
                  </a>
                </div>

                {/* Homebrew alternative */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Install via Homebrew:
                  </span>
                  <div className="p-3 bg-neutral-950 rounded-xl font-mono text-xs text-neutral-200 border border-white/10 flex items-center justify-between">
                    <code>brew install --cask vmixdeck</code>
                    <button
                      onClick={() => copyToClipboard("brew install --cask vmixdeck", "brew")}
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                      title="Copy command"
                    >
                      {copiedKey === "brew" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Checksums */}
                <div className="p-4 rounded-xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between font-mono text-neutral-500">
                    <span>SHA-256 Checksum:</span>
                    <span className="truncate max-w-[280px] sm:max-w-md font-mono text-neutral-700 dark:text-neutral-300">
                      7e8c049b1a772c91834208e2f913d09a25b741dc563e3d938bca82f80c6551b9
                    </span>
                  </div>
                </div>
              </div>
            )}

            {selectedOS === "win" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                      <Laptop className="w-5 h-5" />
                      vMix Deck for Windows
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Windows 10 / 11 (64-bit x64 &amp; ARM64) · Native Performance
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <a
                      href="https://github.com/francisbenjamin/vmixdeck/releases"
                      className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-md justify-center"
                    >
                      <Download className="w-4 h-4" />
                      <span>Installer .exe (34.1 MB)</span>
                    </a>
                    <a
                      href="https://github.com/francisbenjamin/vmixdeck/releases"
                      className="btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold justify-center"
                    >
                      <span>Portable .zip</span>
                    </a>
                  </div>
                </div>

                {/* Winget alternative */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Install via Windows Package Manager (winget):
                  </span>
                  <div className="p-3 bg-neutral-950 rounded-xl font-mono text-xs text-neutral-200 border border-white/10 flex items-center justify-between">
                    <code>winget install vMixDeck.App</code>
                    <button
                      onClick={() => copyToClipboard("winget install vMixDeck.App", "winget")}
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                    >
                      {copiedKey === "winget" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedOS === "linux" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-black/5 dark:border-white/5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                      <Terminal className="w-5 h-5" />
                      vMix Deck for Linux
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Ubuntu / Debian / Fedora / Arch · AppImage &amp; Deb Package
                    </p>
                  </div>
                  <a
                    href="https://github.com/francisbenjamin/vmixdeck/releases"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-md w-full md:w-auto justify-center"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download AppImage (31.2 MB)</span>
                  </a>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    Make AppImage executable:
                  </span>
                  <div className="p-3 bg-neutral-950 rounded-xl font-mono text-xs text-neutral-200 border border-white/10 flex items-center justify-between">
                    <code>chmod +x vMixDeck-x86_64.AppImage &amp;&amp; ./vMixDeck-x86_64.AppImage</code>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "chmod +x vMixDeck-x86_64.AppImage && ./vMixDeck-x86_64.AppImage",
                          "chmod"
                        )
                      }
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                    >
                      {copiedKey === "chmod" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedOS === "mobile" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* iOS / iPadOS */}
                  <div className="p-6 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-neutral-950 dark:text-white font-bold text-lg">
                        <Apple className="w-5 h-5" />
                        <span>iOS &amp; iPadOS Companion</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Full screen Tally light and touch switcher optimized for iPad Pro and iPhone.
                      </p>
                    </div>
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-center"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download on App Store</span>
                    </a>
                  </div>

                  {/* Android */}
                  <div className="p-6 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-neutral-950 dark:text-white font-bold text-lg">
                        <Smartphone className="w-5 h-5" />
                        <span>Android Phone &amp; Tablet</span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Direct APK download or install via Google Play Store. Low battery drain wake-lock.
                      </p>
                    </div>
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-center"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download APK &amp; Play Store</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* System Requirements Matrix */}
            <div className="pt-8 border-t border-black/5 dark:border-white/5 space-y-4">
              <h4 className="text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4" />
                System Requirements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-1">
                  <p className="font-bold text-neutral-900 dark:text-neutral-100">vMix Compatibility</p>
                  <p className="text-neutral-500">vMix 23, 24, 25, 26, 27 (HD, 4K, Pro, Max)</p>
                </div>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-1">
                  <p className="font-bold text-neutral-900 dark:text-neutral-100">Network Connection</p>
                  <p className="text-neutral-500">Wi-Fi 5/6 or Ethernet on same LAN subnet</p>
                </div>
                <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-1">
                  <p className="font-bold text-neutral-900 dark:text-neutral-100">NDI Streaming</p>
                  <p className="text-neutral-500">NDI 5.0+ runtime supported for PiP return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
