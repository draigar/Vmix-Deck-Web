"use client";

import React from "react";
import Link from "next/link";
import { Download, Apple, Laptop, Smartphone, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";

export function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden border-t border-black/[0.05] dark:border-white/[0.06] bg-neutral-100/50 dark:bg-neutral-950/60">
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center space-y-8">
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full badge-pill">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>100% Free · No Subscription · Open Source</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
          Ready to Elevate Your<br />Live Production Workflow?
        </h2>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Join thousands of technical directors, churches, and live streamers broadcasting with ultra-low latency wireless control.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/download"
            className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download vMix Deck</span>
          </Link>
          <a
            href="https://github.com/francisbenjamin/vmixdeck"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>
        </div>

        {/* Supported Platform Badges */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Apple className="w-3.5 h-3.5" />
            macOS (Apple Silicon &amp; Intel)
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Laptop className="w-3.5 h-3.5" />
            Windows 10 / 11
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            iOS &amp; Android
          </span>
        </div>
      </div>
    </section>
  );
}
