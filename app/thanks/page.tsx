"use client";

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Heart, Coffee, Sparkles, Star, Users, ShieldCheck, Check } from "lucide-react";
import { GithubIcon } from "../components/Icons";

export default function ThanksPage() {
  const sponsors = [
    { name: "Apex Esports League", tier: "Studio Sponsor", amount: "$50/mo", avatar: "AE", color: "from-purple-500 to-indigo-600" },
    { name: "Bethel Media Church", tier: "Studio Sponsor", amount: "$50/mo", avatar: "BM", color: "from-blue-500 to-cyan-600" },
    { name: "LiveSwitch Studios", tier: "Backer", amount: "$25/mo", avatar: "LS", color: "from-emerald-500 to-teal-600" },
    { name: "BroadcastDave", tier: "Backer", amount: "$15/mo", avatar: "BD", color: "from-amber-500 to-orange-600" },
    { name: "PastorDan_AV", tier: "Backer", amount: "$10/mo", avatar: "PD", color: "from-rose-500 to-pink-600" },
    { name: "CasterLeo", tier: "Coffee Supporter", amount: "$5", avatar: "CL", color: "from-neutral-700 to-neutral-900" },
    { name: "Elena Rostova", tier: "Coffee Supporter", amount: "$5", avatar: "ER", color: "from-neutral-700 to-neutral-900" },
    { name: "Michael Vance", tier: "Coffee Supporter", amount: "$5", avatar: "MV", color: "from-neutral-700 to-neutral-900" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full badge-pill">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Community &amp; Open Source</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Thank You to Our Sponsors &amp; Community
            </h1>
            <p className="max-w-xl mx-auto text-base text-neutral-600 dark:text-neutral-400">
              vMix Deck is free and open-source forever, made possible by the generosity of broadcast engineers, churches, and producers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Sponsor on GitHub</span>
              </a>
              <a
                href="https://ko-fi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              >
                <Coffee className="w-4 h-4 text-amber-500" />
                <span>Buy Us a Coffee</span>
              </a>
            </div>
          </div>

          {/* Sponsor Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="card-obsidian rounded-3xl p-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Community Backer
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-neutral-950 dark:text-white">$5</span>
                  <span className="text-xs text-neutral-500">/ month</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Help keep test hardware, domain hosting, and continuous builds running.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300 pt-2 border-t border-black/5 dark:border-white/5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Backer badge on GitHub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Name listed on Thank You page</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-2.5 rounded-xl text-xs font-semibold text-center"
              >
                Join Backers
              </a>
            </div>

            {/* Tier 2 */}
            <div className="card-obsidian rounded-3xl p-7 space-y-6 flex flex-col justify-between border-2 border-neutral-950 dark:border-white shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-[10px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Studio Sponsor
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-neutral-950 dark:text-white">$25</span>
                  <span className="text-xs text-neutral-500">/ month</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  For production teams and studios relying on vMix Deck weekly.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300 pt-2 border-t border-black/5 dark:border-white/5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>All Backer benefits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Priority Discord support channel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Early access to pre-release builds</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-2.5 rounded-xl text-xs font-semibold text-center"
              >
                Become Studio Sponsor
              </a>
            </div>

            {/* Tier 3 */}
            <div className="card-obsidian rounded-3xl p-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Broadcast Partner
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-neutral-950 dark:text-white">$100</span>
                  <span className="text-xs text-neutral-500">/ month</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  For enterprise production facilities, church networks, and integrators.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300 pt-2 border-t border-black/5 dark:border-white/5">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Company logo in footer &amp; website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Direct feature request roadmap input</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>1-on-1 integration advisory</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-2.5 rounded-xl text-xs font-semibold text-center"
              >
                Partner with Us
              </a>
            </div>
          </div>

          {/* Wall of Sponsors */}
          <div className="card-obsidian rounded-3xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5" />
              Sponsors &amp; Supporters Wall
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sponsors.map((s, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 space-y-2"
                >
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} text-white font-bold text-xs flex items-center justify-center shadow-xs`}
                  >
                    {s.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                      {s.name}
                    </p>
                    <p className="text-[11px] text-neutral-500">{s.tier}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
