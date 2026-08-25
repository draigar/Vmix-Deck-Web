"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sparkles, Zap, Bug, Palette, Download, Tag, Calendar } from "lucide-react";

interface ChangeItem {
  type: "feature" | "improvement" | "fix" | "ui";
  text: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  summary: string;
  isLatest?: boolean;
  changes: ChangeItem[];
}

export default function ChangelogsPage() {
  const [filter, setFilter] = useState<string>("all");

  const releases: Release[] = [
    {
      version: "v1.2.0",
      date: "August 2026",
      title: "NDI Video Return Feeds & Custom Multi-Action Sequences",
      summary:
        "Major release introducing wireless NDI Picture-in-Picture previews, chained macro scripting, and enhanced dark mode aesthetics.",
      isLatest: true,
      changes: [
        { type: "feature", text: "Added floating NDI PiP video return feed with sub-frame network latency." },
        { type: "feature", text: "Multi-Action Macro sequencer: trigger overlays, camera transitions, and audio fades in a single tap." },
        { type: "improvement", text: "Overhauled TCP socket reconnection logic for instantaneous Wi-Fi roaming recovery." },
        { type: "ui", text: "New Midnight Obsidian dark theme with high-contrast tally highlights for control rooms." },
        { type: "fix", text: "Fixed audio meter clipping visualization on auxiliary sound buses A and B." },
      ],
    },
    {
      version: "v1.1.0",
      date: "June 2026",
      title: "Audio Mixer Fader Banks & Full-Screen Tally Overhaul",
      summary:
        "Enhanced studio workflow with dedicated audio routing, mute/solo triggers, and ultra-bright tally light display for camera operators.",
      changes: [
        { type: "feature", text: "Full-screen Tally light with red/green full screen fill and camera number overlays." },
        { type: "feature", text: "Audio mixer page with independent volume sliders and bus assignment switches." },
        { type: "improvement", text: "Reduced battery consumption by 40% with intelligent wake-lock management." },
        { type: "fix", text: "Resolved sporadic port 8088 timeout during heavy multi-stream broadcasts." },
      ],
    },
    {
      version: "v1.0.0",
      date: "April 2026",
      title: "Initial Public Release: Professional vMix Control Companion",
      summary:
        "The first open-source release of vMix Deck. Turn any device into a professional broadcast switcher.",
      changes: [
        { type: "feature", text: "Two-bus Program and Preview switcher with Cut, Auto, and Fade-to-Black." },
        { type: "feature", text: "Custom deck builder supporting 3x3 to 6x8 grid configurations." },
        { type: "feature", text: "Profile export and import for show backup and venue switching." },
        { type: "improvement", text: "Zero account requirements: 100% offline-first local network architecture." },
      ],
    },
  ];

  const getBadgeStyle = (type: ChangeItem["type"]) => {
    switch (type) {
      case "feature":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "improvement":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "fix":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "ui":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    }
  };

  const getBadgeLabel = (type: ChangeItem["type"]) => {
    switch (type) {
      case "feature":
        return "New Feature";
      case "improvement":
        return "Improvement";
      case "fix":
        return "Bug Fix";
      case "ui":
        return "UI / UX";
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 sm:pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full badge-pill">
              <Tag className="w-3.5 h-3.5" />
              <span>Release History</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Changelogs
            </h1>
            <p className="max-w-xl mx-auto text-base text-neutral-600 dark:text-neutral-400">
              Explore the latest features, performance improvements, and fixes in each release of vMix Deck.
            </p>
          </div>

          {/* Timeline of Releases */}
          <div className="space-y-8">
            {releases.map((release) => (
              <div
                key={release.version}
                className="card-obsidian rounded-3xl p-6 sm:p-8 space-y-6"
              >
                {/* Release Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white font-mono">
                      {release.version}
                    </span>
                    {release.isLatest && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500 text-black">
                        Latest
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{release.date}</span>
                  </div>
                </div>

                {/* Release Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {release.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {release.summary}
                  </p>
                </div>

                {/* Change Items List */}
                <div className="space-y-3 pt-2">
                  {release.changes.map((change, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-3 text-sm">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold border shrink-0 ${getBadgeStyle(
                          change.type
                        )}`}
                      >
                        {getBadgeLabel(change.type)}
                      </span>
                      <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {change.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Release Assets CTA */}
                <div className="pt-4 flex items-center justify-end">
                  <a
                    href="/download"
                    className="btn-secondary px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download {release.version}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
