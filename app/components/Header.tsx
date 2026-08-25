"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { BrandLogo } from "./BrandLogo";
import {
  Sun,
  Moon,
  Star,
  Heart,
  Download,
  Menu,
  X,
} from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    {
      label: "Changelogs",
      href: "/changelogs",
      badge: "v1.2.0",
    },
    { label: "FAQs", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div className="relative w-full glass-header">
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <nav className="grid grid-cols-[auto_1fr_auto] items-center gap-3 h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group transition-transform active:scale-[0.98] shrink-0"
            >
              <BrandLogo
                priority
                className="group-hover:opacity-90 transition-opacity"
              />
              <span className="ml-1.5 hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Live
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center justify-center gap-0.5 min-w-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-2.5 lg:px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-150 flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? "text-neutral-950 dark:text-white bg-black/5 dark:bg-white/10 font-semibold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-semibold leading-none rounded-full bg-black/10 dark:bg-white/15 text-neutral-900 dark:text-white">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Controls */}
            <div className="hidden md:flex items-center justify-end gap-2.5 shrink-0">
              {/* GitHub Stars */}
              <a
                href="https://github.com/francisbenjamin/vmixdeck"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/25 bg-black/[0.02] dark:bg-white/[0.03] transition-all"
                aria-label="Star vDeck on GitHub"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Star
                </span>
                <span className="text-neutral-400 dark:text-neutral-500">|</span>
                <span className="text-neutral-700 dark:text-neutral-300 font-mono text-[11px]">
                  1.4k
                </span>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300 transition-transform rotate-0 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-800 transition-transform rotate-0 hover:-rotate-12" />
                )}
              </button>

              {/* Sponsor Pill with Shimmer */}
              <div className="relative inline-flex">
                <Link
                  href="/thanks"
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-white tracking-wide uppercase rounded-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 dark:from-neutral-700 dark:via-neutral-500 dark:to-neutral-700 border border-white/20 shadow-sm animate-sponsor-shimmer hover:scale-105 transition-transform"
                >
                  <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
                  <span>Sponsor</span>
                </Link>
              </div>

              {/* Download CTA Button */}
              <Link
                href="/download"
                className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-1.5 h-9 rounded-full text-xs font-semibold select-none transition-transform active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center justify-end gap-2 col-start-3">
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-400"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300" />
                ) : (
                  <Moon className="w-4 h-4 text-neutral-800" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-black/10 dark:border-white/10 px-5 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-black/10 dark:bg-white/15 text-neutral-900 dark:text-white">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-col gap-2">
            <Link
              href="/download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-2.5 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download vDeck</span>
            </Link>
            <Link
              href="/thanks"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary w-full py-2 rounded-xl text-center text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Support & Sponsor</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
