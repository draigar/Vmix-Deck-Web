"use client";

import React, { useState } from "react";
import { Plus, Minus, Copy, Check, Terminal, ExternalLink, Wifi, Shield, Radio, Tv } from "lucide-react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs: FaqItem[] = [
    {
      question: "How do I connect vMix Deck to my vMix PC?",
      answer: (
        <div className="space-y-5 pt-2">
          {/* Step Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { step: 1, label: "Enable Web Controller" },
              { step: 2, label: "Enter Local LAN IP" },
              { step: 3, label: "Instant Sync" },
            ].map((s) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeStep === s.step
                    ? "bg-black dark:bg-white text-white dark:text-black shadow-sm"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/10 dark:bg-white/20 flex items-center justify-center text-[10px]">
                  {s.step}
                </span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>

          {/* Step Visual Graphic Display */}
          <div className="rounded-xl p-5 bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/5 space-y-4">
            {activeStep === 1 && (
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <strong>Step 1:</strong> In vMix, open <strong>Settings &gt; Web Controller</strong>, check <strong>&ldquo;Enable Web Controller&rdquo;</strong>, and ensure Port is set to <strong>8088</strong>.
                </p>
                <div className="p-3 bg-neutral-950 rounded-lg text-xs font-mono text-emerald-400 border border-white/10 flex items-center justify-between">
                  <span>vMix Settings → Web Controller (Port 8088: Enabled)</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <strong>Step 2:</strong> Note your vMix PC's local IP address (e.g. <code>192.168.1.120</code>). Make sure your mobile device or tablet is on the same local Wi-Fi network.
                </p>
                <div className="p-3 bg-neutral-950 rounded-lg text-xs font-mono text-neutral-300 border border-white/10 flex items-center justify-between">
                  <span>http://192.168.1.120:8088/api</span>
                  <span className="text-neutral-500 text-[10px]">Local LAN Gateway</span>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <strong>Step 3:</strong> Open vMix Deck, tap <strong>Connect</strong>, and type your IP. The app instantly pulls all inputs, titles, and audio tracks with sub-frame response!
                </p>
                <div className="p-3 bg-emerald-950/60 rounded-lg text-xs font-mono text-emerald-300 border border-emerald-500/30 flex items-center justify-between">
                  <span>● Handshake Successful · 0.8ms Latency</span>
                  <span className="font-bold text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded">
                    READY
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Test Connection Terminal Snippet */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Verify connection from Terminal / Command Prompt:</span>
            </p>
            <div className="relative group bg-neutral-950 rounded-lg p-3 border border-white/10 font-mono text-xs text-neutral-200 flex items-center justify-between">
              <code>curl -s http://192.168.1.120:8088/api | head -n 5</code>
              <button
                onClick={() =>
                  copyCommand("curl -s http://192.168.1.120:8088/api | head -n 5")
                }
                className="p-1.5 rounded-md hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Copy command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "Is vMix Deck really 100% free and open-source?",
      answer: (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Yes! vMix Deck is fully open-source under a permissive license. There are no monthly subscription fees, no locked pro features, no ads, and no required accounts. You own your control deck completely.
        </p>
      ),
    },
    {
      question: "Can multiple smartphones and iPads connect to one vMix PC?",
      answer: (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Absolutely. You can connect multiple devices at the same time: give camera operators their own full-screen Tally lights on phones, place a 6x8 custom macro deck on an iPad for the audio tech, and run the switcher on a laptop for the director.
        </p>
      ),
    },
    {
      question: "How does wireless NDI video monitoring work in vMix Deck?",
      answer: (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          vMix Deck leverages low-latency NDI network video streams broadcast by vMix over local Wi-Fi 6 / LAN. You can preview camera angles, multiviews, and program output directly on the device with sub-frame delay.
        </p>
      ),
    },
    {
      question: "What should I check if the connection fails or times out?",
      answer: (
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>Common troubleshooting checks:</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Ensure both the vMix PC and your mobile device are on the exact same Wi-Fi subnet / router.</li>
            <li>In Windows Defender Firewall, allow incoming TCP connections on Port 8088 for <code>vMix64.exe</code>.</li>
            <li>Test opening <code>http://[Your-PC-IP]:8088</code> in your mobile browser to verify the web controller is active.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Which platforms and operating systems are supported?",
      answer: (
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          vMix Deck runs on macOS (Apple Silicon &amp; Intel), Windows (10/11), Linux, iOS/iPadOS (15+), and Android (8.0+). Profiles and custom deck layouts can be exported and transferred across all platforms seamlessly.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full badge-pill text-xs font-semibold tracking-wide">
            Help &amp; FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Everything you need to know about setting up and broadcasting with vMix Deck.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="card-obsidian rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-neutral-950 dark:text-white cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-black/5 dark:border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Still have questions? Check our{" "}
          <a
            href="/docs"
            className="font-semibold text-neutral-950 dark:text-white underline hover:no-underline"
          >
            Documentation
          </a>{" "}
          or join our{" "}
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-neutral-950 dark:text-white underline hover:no-underline"
          >
            Discord Community
          </a>
          .
        </div>
      </div>
    </section>
  );
}
