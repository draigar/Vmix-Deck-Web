"use client";

import React from "react";
import {
  Layers,
  LayoutGrid,
  Radio,
  Sliders,
  PlaySquare,
  ShieldCheck,
  Zap,
  FolderSync,
  Tv,
} from "lucide-react";

interface Feature {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  illustration: React.ReactNode;
}

export function FeatureCards() {
  const features: Feature[] = [
    {
      title: "Default Switcher Console",
      category: "Core Control",
      description:
        "Full Program and Preview bus switching, Cut, Auto transitions, and Fade-to-Black right at your fingertips.",
      icon: <Tv className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="10" y="8" width="100" height="64" rx="6" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-200 dark:stroke-neutral-700" strokeWidth="1" />
          <rect x="16" y="16" width="26" height="22" rx="4" fill="#EF4444" opacity="0.9" />
          <rect x="47" y="16" width="26" height="22" rx="4" fill="#10B981" opacity="0.9" />
          <rect x="78" y="16" width="26" height="22" rx="4" className="fill-neutral-200 dark:fill-neutral-700" />
          <rect x="16" y="44" width="42" height="18" rx="4" className="fill-neutral-900 dark:fill-white" />
          <rect x="62" y="44" width="42" height="18" rx="4" className="fill-neutral-300 dark:fill-neutral-600" />
          <circle cx="29" cy="27" r="2.5" fill="white" />
          <circle cx="60" cy="27" r="2.5" fill="white" />
        </svg>
      ),
    },
    {
      title: "Custom Deck Builder",
      category: "Customization",
      description:
        "Create unlimited grid layouts from 3x3 to 6x8 with drag-and-drop actions, custom labels, icons, and colors.",
      icon: <LayoutGrid className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="15" y="10" width="90" height="60" rx="6" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-200 dark:stroke-neutral-700" strokeWidth="1" />
          <rect x="22" y="18" width="22" height="20" rx="3" className="fill-neutral-900 dark:fill-white" />
          <rect x="49" y="18" width="22" height="20" rx="3" className="fill-neutral-300 dark:fill-neutral-700" />
          <rect x="76" y="18" width="22" height="20" rx="3" className="fill-neutral-300 dark:fill-neutral-700" />
          <rect x="22" y="42" width="22" height="20" rx="3" className="fill-neutral-300 dark:fill-neutral-700" />
          <rect x="49" y="42" width="22" height="20" rx="3" className="fill-neutral-900 dark:fill-white" />
          <rect x="76" y="42" width="22" height="20" rx="3" className="fill-neutral-300 dark:fill-neutral-700" />
        </svg>
      ),
    },
    {
      title: "Zero-Latency Tally Mode",
      category: "Camera Crew",
      description:
        "Turn any smartphone into a vibrant wireless Tally light. Bold Red for Live, Green for Preview, zero hardware setup.",
      icon: <Radio className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="35" y="8" width="50" height="64" rx="8" className="fill-neutral-900 stroke-neutral-700" strokeWidth="1.5" />
          <rect x="40" y="16" width="40" height="48" rx="4" fill="#EF4444" />
          <circle cx="60" cy="40" r="10" fill="white" opacity="0.9" />
          <path d="M60 35V45M55 40H65" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "NDI PiP Video Monitoring",
      category: "Video Return",
      description:
        "Monitor your camera inputs and program output in real-time with smooth floating Picture-in-Picture NDI video feeds.",
      icon: <Tv className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="15" y="10" width="90" height="60" rx="6" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-200 dark:stroke-neutral-700" strokeWidth="1" />
          <circle cx="60" cy="40" r="16" className="stroke-neutral-400 dark:stroke-neutral-600" strokeWidth="1.5" />
          <rect x="62" y="36" width="38" height="28" rx="4" className="fill-neutral-900 stroke-neutral-700" strokeWidth="1" />
          <circle cx="81" cy="50" r="4" fill="#EF4444" />
        </svg>
      ),
    },
    {
      title: "Audio Mixer & Bus Routing",
      category: "Audio Engineering",
      description:
        "Control master audio levels, headphone mixes, and A-G auxiliary routing buses with responsive peak meters.",
      icon: <Sliders className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <line x1="30" y1="15" x2="30" y2="65" className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="15" x2="60" y2="65" className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="15" x2="90" y2="65" className="stroke-neutral-300 dark:stroke-neutral-700" strokeWidth="2" strokeLinecap="round" />
          <rect x="23" y="32" width="14" height="8" rx="2" className="fill-neutral-900 dark:fill-white" />
          <rect x="53" y="22" width="14" height="8" rx="2" className="fill-neutral-900 dark:fill-white" />
          <rect x="83" y="44" width="14" height="8" rx="2" className="fill-neutral-900 dark:fill-white" />
        </svg>
      ),
    },
    {
      title: "Multi-Action Scripting",
      category: "Automation",
      description:
        "Trigger complex broadcast sequences: switch cameras, play stinger graphics, trigger lower thirds, and adjust audio in 1 tap.",
      icon: <Zap className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M65 15L35 45H60L55 65L85 35H60L65 15Z" className="fill-neutral-900 dark:fill-white stroke-neutral-700" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Stream & Record Triggers",
      category: "Broadcast Control",
      description:
        "Start/stop master recording, trigger multi-stream destinations, and toggle external outputs with swipe safety guards.",
      icon: <PlaySquare className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="20" y="15" width="80" height="50" rx="8" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-200 dark:stroke-neutral-700" strokeWidth="1" />
          <circle cx="60" cy="40" r="14" fill="#EF4444" />
          <polygon points="57,35 66,40 57,45" fill="white" />
        </svg>
      ),
    },
    {
      title: "100% Offline & Private",
      category: "Network Security",
      description:
        "Direct local TCP and HTTP API communication with vMix. No accounts required, no telemetry, and zero cloud dependency.",
      icon: <ShieldCheck className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M60 15L35 25V45C35 58 45 68 60 72C75 68 85 58 85 45V25L60 15Z" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-300 dark:stroke-neutral-600" strokeWidth="1.5" />
          <path d="M50 42L57 49L72 34" className="stroke-neutral-900 dark:stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Profile Sync & Import/Export",
      category: "Show Management",
      description:
        "Instantly export your button profiles and import customized layouts for different productions, venues, and clients.",
      icon: <FolderSync className="w-5 h-5" />,
      illustration: (
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="25" y="20" width="70" height="48" rx="6" className="fill-neutral-100 dark:fill-neutral-800 stroke-neutral-300 dark:stroke-neutral-600" strokeWidth="1" />
          <path d="M35 15H55L62 22H85V28H25V18C25 16.3431 26.3431 15 28 15H35Z" className="fill-neutral-200 dark:fill-neutral-700" />
          <path d="M60 34V52M60 52L53 45M60 52L67 45" className="stroke-neutral-900 dark:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-28 overflow-hidden bg-neutral-100/40 dark:bg-neutral-950/40">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full badge-pill text-xs font-semibold tracking-wide">
            Broadcast Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            A powerful suite of broadcast tools,<br className="hidden sm:inline" />
            refined for simplicity.
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Everything you need from a professional hardware stream controller, engineered into an ultra-low latency, cross-platform app.
          </p>
        </div>

        {/* 3x3 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group card-obsidian rounded-2xl p-7 flex flex-col items-center text-center justify-between space-y-6"
            >
              {/* Animated SVG Preview Container */}
              <div className="w-full aspect-[4/3] rounded-xl bg-neutral-100/70 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {feature.illustration}
              </div>

              {/* Text & Icon Content */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 bg-black/5 dark:bg-white/5">
                  {feature.category}
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-[260px] mx-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
