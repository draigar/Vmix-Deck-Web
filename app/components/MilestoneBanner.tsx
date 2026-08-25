"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Heart, Sparkles, Coffee } from "lucide-react";
import { GithubIcon } from "./Icons";

export function MilestoneBanner() {
  const supporters = [
    { name: "Alex Rivera", role: "Church AV Director", color: "from-amber-400 to-orange-500", initials: "AR" },
    { name: "Sarah Chen", role: "Esports Broadcast Lead", color: "from-emerald-400 to-teal-500", initials: "SC" },
    { name: "Marcus Novak", role: "Live Stream Engineer", color: "from-blue-400 to-indigo-500", initials: "MN" },
    { name: "David Kim", role: "Conference Producer", color: "from-purple-400 to-pink-500", initials: "DK" },
    { name: "Emma Watson", role: "Studio Technical Director", color: "from-rose-400 to-red-500", initials: "EW" },
  ];

  return (
    <section className="relative py-20 overflow-hidden border-y border-black/[0.05] dark:border-white/[0.06]">
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center space-y-6">
        {/* Goal Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Community Milestone Achieved</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
          Over 10,000+ Live Broadcasts Powered Worldwide
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Thank you to the global production community! vMix Deck is 100% free and open-source, maintained with the support of broadcast engineers, churches, and live streamers.
        </p>

        {/* Progress Bar Display */}
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              100% Funded for NDI &amp; Test Lab
            </span>
            <span className="text-neutral-500">$1,500 / $1,500 goal</span>
          </div>
          <div className="h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Supporter Avatar Cluster */}
        <div className="flex flex-col items-center justify-center gap-3 pt-4">
          <div className="flex items-center -space-x-2.5 hover:-space-x-1.5 transition-all duration-300">
            {supporters.map((s, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-neutral-900 bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold shadow-md cursor-pointer hover:scale-110 hover:-translate-y-1 transition-transform"
                title={`${s.name} (${s.role})`}
              >
                <span className={`w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br ${s.color}`}>
                  {s.initials}
                </span>
              </div>
            ))}
            <Link
              href="/thanks"
              className="w-10 h-10 rounded-full ring-2 ring-white dark:ring-neutral-900 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform"
            >
              +120
            </Link>
          </div>
          <Link
            href="/thanks"
            className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Meet our community supporters &amp; sponsors →
          </Link>
        </div>

        {/* Sponsor CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://github.com/francisbenjamin/vmixdeck"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Sponsor on GitHub</span>
          </a>
          <Link
            href="/thanks"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
          >
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>Support the Project</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
