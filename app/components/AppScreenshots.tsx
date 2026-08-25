"use client";

import React, { useState } from "react";
import { Maximize2, X, Tv, Sliders, Radio, LayoutGrid, Layers, Wifi } from "lucide-react";

interface ScreenshotItem {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  mockContent: React.ReactNode;
}

export function AppScreenshots() {
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

  const items: ScreenshotItem[] = [
    {
      id: 1,
      title: "Live Production Switcher",
      category: "Broadcast Switcher",
      description: "Intuitive two-bus Program/Preview switcher with hardware-speed Cut and Auto transitions.",
      icon: <Tv className="w-4 h-4" />,
      mockContent: (
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-950 p-4 rounded-xl flex flex-col justify-between font-mono text-neutral-900 dark:text-white border border-black/5 dark:border-white/10">
          <div className="flex justify-between text-xs border-b border-black/5 dark:border-white/10 pb-2">
            <span className="text-red-600 dark:text-red-400 font-bold">● PROGRAM 1 (4K SDI)</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">● PREVIEW 2 (NDI)</span>
          </div>
          <div className="grid grid-cols-4 gap-2 my-auto">
            {["CAM 1", "CAM 2", "CAM 3", "MEDIA", "SLOMO", "PPT", "TITLES", "STINGER"].map((item, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-center font-bold text-xs border transition-all ${
                  i === 0
                    ? "bg-red-600 text-white border-red-500 shadow-xs"
                    : i === 1
                    ? "bg-emerald-600 text-white border-emerald-500 shadow-xs"
                    : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-black/10 dark:border-neutral-700 shadow-2xs"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] text-neutral-500">
            <span>CUT / AUTO 500ms</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">FPS: 59.94</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Custom Deck Grid Builder",
      category: "Studio Customization",
      description: "Build custom macro buttons, arrange 4x4 or 6x8 grids, and trigger complex vMix scripts.",
      icon: <LayoutGrid className="w-4 h-4" />,
      mockContent: (
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-950 p-4 rounded-xl flex flex-col justify-between font-mono text-neutral-900 dark:text-white border border-black/5 dark:border-white/10">
          <div className="flex justify-between text-xs border-b border-black/5 dark:border-white/10 pb-2">
            <span className="text-neutral-800 dark:text-neutral-200 font-bold">DECK: SUNDAY_LIVE_SHOW</span>
            <span className="text-neutral-500">4x3 Grid</span>
          </div>
          <div className="grid grid-cols-4 gap-2 my-auto">
            {[
              { label: "Intro", color: "bg-purple-600" },
              { label: "Overlay 1", color: "bg-blue-600" },
              { label: "Overlay 2", color: "bg-blue-600" },
              { label: "Replay", color: "bg-amber-600" },
              { label: "Lower 3rd", color: "bg-teal-600" },
              { label: "Music Mute", color: "bg-rose-600" },
              { label: "Slide Next", color: "bg-emerald-600" },
              { label: "End Show", color: "bg-red-700" },
            ].map((btn, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-center font-bold text-xs ${btn.color} text-white shadow-xs`}
              >
                {btn.label}
              </div>
            ))}
          </div>
          <div className="text-[10px] text-neutral-500 text-center">Drag &amp; Drop Button Customizer</div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Studio Camera Tally Light",
      category: "Wireless Tally",
      description: "Turn mobile screens into clear Red (Live) and Green (Preview) indicators for camera operators.",
      icon: <Radio className="w-4 h-4" />,
      mockContent: (
        <div className="w-full h-full bg-red-600 p-4 rounded-xl flex flex-col items-center justify-center font-mono text-white text-center space-y-2 shadow-inner">
          <div className="w-4 h-4 rounded-full bg-white animate-ping" />
          <h4 className="text-3xl font-black tracking-wider">CAM 1</h4>
          <p className="text-xs font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full">
            ● ON-AIR BROADCAST
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "NDI Video Return & PiP",
      category: "Video Monitoring",
      description: "Monitor camera angles directly on your switcher surface with sub-frame NDI video previews.",
      icon: <Layers className="w-4 h-4" />,
      mockContent: (
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 p-3.5 rounded-xl flex flex-col justify-between border border-black/5 dark:border-white/10 text-neutral-900 dark:text-white font-mono">
          <div className="flex justify-between text-[11px]">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">NDI: DESKTOP-VMIX (Program)</span>
            <span className="text-neutral-500">1080p60</span>
          </div>
          <div className="relative aspect-video rounded-lg bg-neutral-900 dark:bg-black flex items-center justify-center border border-black/10 dark:border-white/20 overflow-hidden text-white my-auto">
            <div className="text-center p-2">
              <span className="text-xs text-neutral-400">Live Video Stream Feed</span>
              <p className="text-sm font-bold text-white">Main Presentation + Host PIP</p>
            </div>
            <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[9px] px-2 py-0.5 rounded font-bold">
              LIVE NDI
            </div>
          </div>
          <div className="text-[10px] text-neutral-500">Latency: 16ms (Local WiFi 6)</div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Audio Mixer & Fader Banks",
      category: "Audio Management",
      description: "Fader controls for master audio, microphone levels, background music, and auxiliary buses.",
      icon: <Sliders className="w-4 h-4" />,
      mockContent: (
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-950 p-4 rounded-xl flex flex-col justify-between font-mono text-neutral-900 dark:text-white border border-black/5 dark:border-white/10">
          <div className="flex justify-between text-xs border-b border-black/5 dark:border-white/10 pb-2">
            <span>AUDIO BUS MIXER</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">0 dB MASTER</span>
          </div>
          <div className="grid grid-cols-4 gap-3 my-auto">
            {["MASTER", "MIC 1", "MUSIC", "BUS A"].map((track, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="h-16 w-2 rounded-full bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                  <div
                    className="absolute bottom-0 inset-x-0 bg-emerald-500 rounded-full"
                    style={{ height: `${85 - i * 15}%` }}
                  />
                </div>
                <span className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate">{track}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-neutral-500">
            <span>Mute / Solo Active</span>
            <span>Headphone: ON</span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Fast LAN Auto-Connect",
      category: "Zero Setup",
      description: "Automatic IP scanning, port 8088 handshake, and instant reconnect upon network dropouts.",
      icon: <Wifi className="w-4 h-4" />,
      mockContent: (
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-950 p-4 rounded-xl flex flex-col justify-between font-mono text-neutral-900 dark:text-white border border-black/5 dark:border-white/10">
          <div className="flex justify-between text-xs border-b border-black/5 dark:border-white/10 pb-2">
            <span>CONNECTION MANAGER</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">READY</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-900 border border-emerald-500/40 flex items-center justify-between shadow-xs">
              <div>
                <p className="text-xs font-bold text-neutral-900 dark:text-white">Main Broadcast Rig (Studio A)</p>
                <p className="text-[10px] text-neutral-500">192.168.1.120:8088</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-black">
                CONNECTED
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/60 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 flex items-center justify-between text-neutral-500 shadow-2xs">
              <div>
                <p className="text-xs font-medium">Backup Switcher (Studio B)</p>
                <p className="text-[10px]">192.168.1.121:8088</p>
              </div>
              <span className="text-[10px]">Standby</span>
            </div>
          </div>
          <div className="text-[10px] text-neutral-500">Zero-Config TCP Socket</div>
        </div>
      ),
    },
  ];

  return (
    <section id="preview" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full badge-pill text-xs font-semibold tracking-wide">
            App Previews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            See vMix Deck in Action
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            High-fidelity control surfaces designed for phones, tablets, and desktop workstations.
          </p>
        </div>

        {/* Screenshot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedScreenshot(item.id)}
              className="group card-obsidian rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              {/* Card Header & Preview */}
              <div className="p-3">
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-black/5 dark:border-white/10 relative group-hover:scale-[1.02] transition-transform duration-300">
                  {item.mockContent}
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-1 font-medium">
                  {item.icon}
                  <span>{item.category}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-950 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedScreenshot !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl text-neutral-950 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/5 dark:border-white/10">
              <div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                  {items.find((i) => i.id === selectedScreenshot)?.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {items.find((i) => i.id === selectedScreenshot)?.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-700 dark:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
              {items.find((i) => i.id === selectedScreenshot)?.mockContent}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
