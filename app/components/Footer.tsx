"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Heart, Shield, Radio } from "lucide-react";
import { GithubIcon, TwitterIcon, DiscordIcon } from "./Icons";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] dark:border-white/[0.08] bg-neutral-100/60 dark:bg-neutral-950/80">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-flex group">
              <BrandLogo />
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
              Professional wireless switcher, custom action deck, and low-latency Tally lights for vMix live productions.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white shadow-xs transition-colors"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white shadow-xs transition-colors"
                aria-label="Twitter Community"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 hover:border-black/25 dark:hover:border-white/25 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white shadow-xs transition-colors"
                aria-label="Discord Community"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/changelogs"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Changelogs
                </Link>
              </li>
              <li>
                <Link
                  href="/#preview"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  App Previews
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/francisbenjamin/vmixdeck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Source Code
                </a>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Network Setup FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/thanks"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>Sponsors &amp; Backers</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/francisbenjamin/vmixdeck/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Issue Tracker
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/francisbenjamin/vmixdeck/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Open Source License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} vDeck. Built for live broadcast professionals.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              vMix Web API 8088 Compatible
            </span>
            <span>•</span>
            <Link href="/download" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Releases
            </Link>
            <span>•</span>
            <Link href="/thanks" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
              Credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
