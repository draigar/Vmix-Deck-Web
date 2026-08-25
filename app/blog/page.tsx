"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Calendar, Clock, BookOpen, ArrowRight, Tv, Radio, Wifi, Zap } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  icon: React.ReactNode;
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: "wireless-tally-guide",
      title: "Setting Up Wireless Tally Lights with Any Smartphone: A Complete Guide",
      excerpt:
        "Say goodbye to $200 hardware tally boxes. Learn how to mount inexpensive phones on camera hotshoes and get zero-latency red/green indicators.",
      category: "Camera Crew",
      date: "August 18, 2026",
      readTime: "4 min read",
      author: "Alex Rivera",
      icon: <Radio className="w-5 h-5 text-red-500" />,
    },
    {
      id: "speed-up-vmix-switching",
      title: "5 Pro Tips to Speed Up Your Live Switching in vMix",
      excerpt:
        "Master hot-takes, automated lower-third overlay chains, and transition presets to handle fast-paced live broadcasts without breaking a sweat.",
      category: "Workflow",
      date: "August 10, 2026",
      readTime: "6 min read",
      author: "Marcus Novak",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      id: "vmix-deck-vs-hardware",
      title: "vMix Deck vs Physical Hardware Controllers: A Deep Comparison",
      excerpt:
        "Why software-defined custom decks with live NDI video return feeds and multi-touch faders are transforming modern control rooms.",
      category: "Gear Analysis",
      date: "July 28, 2026",
      readTime: "5 min read",
      author: "Sarah Chen",
      icon: <Tv className="w-5 h-5 text-blue-500" />,
    },
    {
      id: "optimizing-wifi-for-ndi",
      title: "Optimizing Local Wi-Fi 6 Networks for Zero-Latency Video Feeds",
      excerpt:
        "A practical networking checklist for technical directors: channel widths, QoS packet prioritization, and multi-cast settings.",
      category: "Networking",
      date: "July 15, 2026",
      readTime: "8 min read",
      author: "David Kim",
      icon: <Wifi className="w-5 h-5 text-emerald-500" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold rounded-full badge-pill">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Production Blog &amp; Guides</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Latest Articles &amp; Broadcast Tips
            </h1>
            <p className="max-w-xl mx-auto text-base text-neutral-600 dark:text-neutral-400">
              Deep dives, tutorials, and real-world workflows from the vMix live production community.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group card-obsidian rounded-3xl p-7 space-y-5 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div className="space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300">
                      {post.icon}
                      <span>{post.category}</span>
                    </span>
                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <h2 className="text-xl font-bold text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {post.author}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="text-neutral-900 dark:text-white font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
