"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroConsole } from "./components/HeroConsole";
import { MilestoneBanner } from "./components/MilestoneBanner";
import { FeatureCards } from "./components/FeatureCards";
import { AppScreenshots } from "./components/AppScreenshots";
import { Testimonials } from "./components/Testimonials";
import { FaqSection } from "./components/FaqSection";
import { CtaBanner } from "./components/CtaBanner";
import { Download, ShieldCheck, Radio, Sparkles, Tv } from "lucide-react";
import { GithubIcon } from "./components/Icons";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fixed Glassmorphic Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 sm:pt-36 pb-20 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-40">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-neutral-300/40 via-neutral-200/20 to-transparent dark:from-neutral-700/20 dark:via-neutral-800/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 text-center">
            {/* Top Tagline Badge */}
            <div className="flex flex-col items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full badge-pill shadow-xs">
                <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>Free &amp; Open-Source vMix Controller</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08] max-w-4xl mx-auto">
              Broadcast with precision,<br />
              wirelessly.
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto mt-6 text-base sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
              Turn your Mac, PC, iPad, or smartphone into a professional live switcher and Tally deck for vMix. Sub-frame latency, NDI video preview, and zero monthly subscriptions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <Link
                href="/download"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold shadow-md active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download vMix Deck</span>
              </Link>
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Specs & Security Pill */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500">
              <span>macOS · Windows · Linux · iOS · Android</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero Cloud Accounts Required
              </span>
            </div>

            {/* Interactive Switcher Console Preview */}
            <div className="mt-14 sm:mt-16">
              <HeroConsole />
            </div>
          </div>
        </section>

        {/* MILESTONE & SPONSOR BANNER */}
        <MilestoneBanner />

        {/* 9 FEATURE CARDS */}
        <FeatureCards />

        {/* SCREENSHOTS / CONTROL SURFACES */}
        <AppScreenshots />

        {/* REVIEWS & COMMUNITY FEEDBACK */}
        <Testimonials />

        {/* STEP-BY-STEP SETUP GUIDE & FAQ */}
        <FaqSection />

        {/* BOTTOM CTA BANNER */}
        <CtaBanner />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
