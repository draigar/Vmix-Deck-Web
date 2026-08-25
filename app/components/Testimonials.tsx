"use client";

import React from "react";
import { MessageSquare, ThumbsUp, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  badge: string;
  upvotes: number;
  initials: string;
  gradient: string;
}

export function Testimonials() {
  const column1: Testimonial[] = [
    {
      quote:
        "Replaced $400 hardware stream decks across our 3-camera church setup with old iPads running vMix Deck. The tally mode alone saved our camera ops countless missed cues.",
      author: "u/PastorDan_AV",
      role: "Church Production Director",
      badge: "Reddit r/vMix",
      upvotes: 42,
      initials: "PD",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      quote:
        "Sub-millisecond trigger speed over local WiFi. We do high-speed esports switching where delays are intolerable — vMix Deck handled a 10-hour tournament with zero hiccups.",
      author: "u/ApexCaster_Gamer",
      role: "Esports Broadcast Lead",
      badge: "Discord Pro Streamer",
      upvotes: 35,
      initials: "AC",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      quote:
        "The custom macro builder is gold. I created one-touch buttons that fade audio, change camera angle, and trigger lower-third overlays simultaneously. 10/10.",
      author: "u/StudioTech_Leo",
      role: "Broadcast Engineer",
      badge: "Twitter / X",
      upvotes: 28,
      initials: "ST",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      quote:
        "No accounts, no cloud nonsense, no subscription fees. Just direct TCP connection to vMix port 8088. This is how professional software should be built.",
      author: "u/LinuxAV_Nerd",
      role: "Live Video Specialist",
      badge: "GitHub Review",
      upvotes: 56,
      initials: "LA",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  const column2: Testimonial[] = [
    {
      quote:
        "Having NDI live preview right on the deck button surface gives me total confidence before hitting CUT. I can see talent is in frame before taking them live.",
      author: "u/LiveSwitch_Pro",
      role: "Technical Director",
      badge: "Reddit r/videoengineering",
      upvotes: 64,
      initials: "LS",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      quote:
        "Our volunteer crew learned to operate vMix in 5 minutes using the simplified default switcher layout. It takes all the scary complexity out of live streaming.",
      author: "u/MediaMinistry_Sarah",
      role: "Non-Profit AV Coordinator",
      badge: "Community Discord",
      upvotes: 19,
      initials: "MM",
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      quote:
        "The multi-action delayed triggers allowed us to automate our entire pre-show countdown sequence with intro stinger and music swell. Truly incredible app.",
      author: "u/StreamPro_Mike",
      role: "Corporate AV Producer",
      badge: "Reddit r/livestreaming",
      upvotes: 31,
      initials: "SP",
      gradient: "from-amber-400 to-yellow-600",
    },
    {
      quote:
        "Best vMix companion app by far. Clean UI, rock-solid stability, and the instant dark mode looks fantastic in a dim production control room.",
      author: "u/BroadcasterDave",
      role: "OB Van Engineer",
      badge: "Twitter / X",
      upvotes: 47,
      initials: "BD",
      gradient: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-neutral-100/40 dark:bg-neutral-950/40">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full badge-pill text-xs font-semibold tracking-wide">
            Broadcast Community
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Loved by Technical Directors & Crews
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Real feedback from production teams, churches, and live streamers worldwide.
          </p>
        </div>

        {/* Dual Column Marquee Carousel */}
        <div className="relative h-[520px] mask-fade-y overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Column 1 Scrolling Up */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {[...column1, ...column1].map((item, idx) => (
                <div
                  key={idx}
                  className="card-obsidian rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-transform"
                >
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} text-white font-bold text-xs flex items-center justify-center shadow-xs`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-950 dark:text-white">
                          {item.author}
                        </p>
                        <p className="text-[11px] text-neutral-500">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/5 dark:border-white/5">
                      <ThumbsUp className="w-3 h-3 text-emerald-500" />
                      <span>{item.upvotes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 Scrolling Down */}
            <div className="hidden md:flex flex-col gap-4 animate-scroll-down">
              {[...column2, ...column2].map((item, idx) => (
                <div
                  key={idx}
                  className="card-obsidian rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-transform"
                >
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} text-white font-bold text-xs flex items-center justify-center shadow-xs`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-950 dark:text-white">
                          {item.author}
                        </p>
                        <p className="text-[11px] text-neutral-500">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-black/5 dark:border-white/5">
                      <ThumbsUp className="w-3 h-3 text-emerald-500" />
                      <span>{item.upvotes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
