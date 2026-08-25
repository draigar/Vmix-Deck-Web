"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  BookOpen,
  Wifi,
  Tv,
  LayoutGrid,
  Radio,
  Sliders,
  Terminal,
  AlertCircle,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string>("quick-start");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const navGroups = [
    {
      title: "Getting Started",
      items: [
        { id: "quick-start", label: "Quick Start Guide" },
        { id: "connecting-vmix", label: "Connecting to vMix" },
        { id: "firewall", label: "Network & Firewall Setup" },
      ],
    },
    {
      title: "Control Surfaces",
      items: [
        { id: "default-switcher", label: "Default Switcher" },
        { id: "deck-builder", label: "Custom Deck Builder" },
        { id: "tally-lights", label: "Wireless Tally Lights" },
        { id: "ndi-preview", label: "NDI Video Return" },
        { id: "audio-mixer", label: "Audio Mixer Controls" },
      ],
    },
    {
      title: "Advanced & API",
      items: [
        { id: "multi-action", label: "Multi-Action Macros" },
        { id: "vmix-api", label: "vMix HTTP & TCP API" },
        { id: "troubleshooting", label: "Troubleshooting FAQ" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="md:col-span-1 space-y-6">
              <div className="sticky top-24 p-5 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/70 border border-black/5 dark:border-white/5 space-y-6">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-950 dark:text-white">
                  <BookOpen className="w-4 h-4" />
                  <span>Documentation</span>
                </div>

                <div className="space-y-4">
                  {navGroups.map((group, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                        {group.title}
                      </h4>
                      <ul className="space-y-0.5 text-xs">
                        {group.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => setActiveSection(item.id)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                                activeSection === item.id
                                  ? "bg-black dark:bg-white text-white dark:text-black font-semibold shadow-xs"
                                  : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                              }`}
                            >
                              <span>{item.label}</span>
                              {activeSection === item.id && (
                                <ChevronRight className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Documentation Content Area */}
            <article className="md:col-span-3 card-obsidian rounded-3xl p-6 sm:p-10 space-y-10">
              {activeSection === "quick-start" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-neutral-500">Getting Started</span>
                    <h1 className="text-3xl font-bold text-neutral-950 dark:text-white">
                      Quick Start Guide
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      vMix Deck communicates directly with vMix via its built-in Web Controller API over your local Wi-Fi or Ethernet network.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                      3-Minute Setup Checklist
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2.5">
                      <li>
                        <strong>Enable Web Controller in vMix:</strong> Navigate to <code>Settings &gt; Web Controller</code> in vMix, check &quot;Enable Web Controller&quot;, and keep the default port <code>8088</code>.
                      </li>
                      <li>
                        <strong>Ensure Same Local Subnet:</strong> Connect your controller device (Mac, PC, iPad, or Android) to the same Wi-Fi router as your vMix host machine.
                      </li>
                      <li>
                        <strong>Launch vMix Deck &amp; Connect:</strong> Type the IP address of your vMix computer (e.g. <code>192.168.1.120</code>) and tap <strong>Connect</strong>.
                      </li>
                    </ol>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs space-y-1">
                    <p className="font-bold flex items-center gap-1.5">
                      <Wifi className="w-4 h-4" />
                      Zero Latency Tip:
                    </p>
                    <p>
                      For studio reliability, connect your vMix PC via Gigabit Ethernet and use a dedicated 5GHz / Wi-Fi 6 access point for mobile controllers.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "connecting-vmix" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-neutral-500">Network Configuration</span>
                    <h1 className="text-3xl font-bold text-neutral-950 dark:text-white">
                      Connecting to vMix
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Understanding port 8088, local IP discovery, and TCP socket commands.
                    </p>
                  </div>

                  <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
                    <h3 className="text-base font-bold text-neutral-950 dark:text-white">
                      Finding Your vMix PC IP Address
                    </h3>
                    <p>On your Windows machine running vMix:</p>
                    <div className="p-3 bg-neutral-950 rounded-xl font-mono text-xs text-neutral-200 border border-white/10 flex items-center justify-between">
                      <code>ipconfig | findstr IPv4</code>
                      <button
                        onClick={() => copy("ipconfig | findstr IPv4")}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        {copiedCmd === "ipconfig | findstr IPv4" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "tally-lights" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-neutral-500">Camera Crew</span>
                    <h1 className="text-3xl font-bold text-neutral-950 dark:text-white">
                      Wireless Tally Light System
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      Deploy instant, zero-cost wireless Tally indicators to smartphone screens mounted on camera hotshoes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-red-600/20 border border-red-500/30 space-y-1">
                      <p className="font-bold text-red-500 text-sm">● Live / Program (Red)</p>
                      <p className="text-xs text-neutral-400">
                        Camera is currently on air. Screen turns high-visibility red.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-600/20 border border-emerald-500/30 space-y-1">
                      <p className="font-bold text-emerald-500 text-sm">● Preview / Standby (Green)</p>
                      <p className="text-xs text-neutral-400">
                        Camera is selected next on preview bus. Operator readies frame.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* General Docs Placeholder Fallback */}
              {activeSection !== "quick-start" &&
                activeSection !== "connecting-vmix" &&
                activeSection !== "tally-lights" && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-neutral-500">Documentation</span>
                      <h1 className="text-3xl font-bold text-neutral-950 dark:text-white capitalize">
                        {activeSection.replace("-", " ")}
                      </h1>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Full reference manual and configuration steps for {activeSection.replace("-", " ")}.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 space-y-3">
                      <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
                        Standard vMix Function Integration
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        vMix Deck includes built-in bindings for all 100+ native vMix functions: Cut, Auto, Transition1-4, Merge, Stinger1-4, OverlayInput1-4, SetVolume, AudioBusMute, and ScriptStart.
                      </p>
                    </div>
                  </div>
                )}
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
