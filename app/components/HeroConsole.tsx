"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Square,
  Radio,
  Sliders,
  Maximize2,
  Volume2,
  Wifi,
  Sparkles,
  Layers,
  ArrowRightLeft,
  Video,
  Monitor,
  Disc,
  Tv,
} from "lucide-react";

interface InputItem {
  id: number;
  name: string;
  type: string;
  thumbnailGradient: string;
  lightGradient: string;
  iconType: string;
}

export function HeroConsole() {
  const [programInput, setProgramInput] = useState<number>(1);
  const [previewInput, setPreviewInput] = useState<number>(2);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isFTB, setIsFTB] = useState<boolean>(false);
  const [tBarProgress, setTBarProgress] = useState<number>(0);
  const [tallyMode, setTallyMode] = useState<boolean>(false);

  const inputs: InputItem[] = [
    {
      id: 1,
      name: "Cam 1 (Main Host)",
      type: "4K SDI",
      thumbnailGradient: "from-blue-900/80 via-blue-950/90 to-black",
      lightGradient: "from-blue-100/90 via-indigo-50 to-white",
      iconType: "cam",
    },
    {
      id: 2,
      name: "Cam 2 (Side Angle)",
      type: "NDI HD",
      thumbnailGradient: "from-emerald-900/80 via-teal-950/90 to-black",
      lightGradient: "from-emerald-100/90 via-teal-50 to-white",
      iconType: "cam",
    },
    {
      id: 3,
      name: "Cam 3 (Audience)",
      type: "PTZ 1080p",
      thumbnailGradient: "from-purple-900/80 via-violet-950/90 to-black",
      lightGradient: "from-purple-100/90 via-violet-50 to-white",
      iconType: "cam",
    },
    {
      id: 4,
      name: "Screen Share / PPT",
      type: "Display Capture",
      thumbnailGradient: "from-amber-900/80 via-orange-950/90 to-black",
      lightGradient: "from-amber-100/90 via-orange-50 to-white",
      iconType: "display",
    },
    {
      id: 5,
      name: "Lower Third Titles",
      type: "GT Title",
      thumbnailGradient: "from-rose-900/80 via-pink-950/90 to-black",
      lightGradient: "from-rose-100/90 via-pink-50 to-white",
      iconType: "title",
    },
    {
      id: 6,
      name: "Stinger Promo Clip",
      type: "Video MP4",
      thumbnailGradient: "from-cyan-900/80 via-blue-950/90 to-black",
      lightGradient: "from-cyan-100/90 via-sky-50 to-white",
      iconType: "video",
    },
  ];

  // Perform Cut Transition with instant swap
  const handleCut = () => {
    setIsTransitioning(true);
    const prev = previewInput;
    const prog = programInput;
    setProgramInput(prev);
    setPreviewInput(prog);
    setTimeout(() => setIsTransitioning(false), 250);
  };

  // Perform Auto Transition with smooth fade
  const handleAuto = () => {
    setIsTransitioning(true);
    setTBarProgress(100);
    setTimeout(() => {
      const prev = previewInput;
      const prog = programInput;
      setProgramInput(prev);
      setPreviewInput(prog);
      setTBarProgress(0);
      setIsTransitioning(false);
    }, 450);
  };

  const handleSelectProgram = (id: number) => {
    setProgramInput(id);
  };

  const handleSelectPreview = (id: number) => {
    setPreviewInput(id);
  };

  const activeProg = inputs.find((i) => i.id === programInput) || inputs[0];
  const activePvw = inputs.find((i) => i.id === previewInput) || inputs[1];

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* Outer macOS Window Shell - Adapts cleanly to light / dark */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
        {/* Window Top Titlebar */}
        <div className="h-11 bg-neutral-100/90 dark:bg-neutral-950/90 border-b border-black/5 dark:border-white/5 flex items-center justify-between px-4 sm:px-5">
          {/* Traffic light buttons */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-xs cursor-pointer hover:opacity-80 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-xs cursor-pointer hover:opacity-80 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-xs cursor-pointer hover:opacity-80 transition-opacity" />
            <span className="ml-3 text-xs font-mono text-neutral-500 dark:text-neutral-400 hidden sm:inline-flex items-center gap-2">
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">vMix Deck Pro</span>
              <span className="text-neutral-400 dark:text-neutral-600">/</span>
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                192.168.1.120:8088
              </span>
            </span>
          </div>

          {/* Quick status chips */}
          <div className="flex items-center gap-2 sm:gap-3 text-[11px] font-mono">
            <span className="hidden md:inline-flex items-center gap-1 text-neutral-500 dark:text-neutral-400 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-md">
              <Wifi className="w-3 h-3 text-emerald-500" />
              0.8ms
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/20 font-semibold">
              <Disc className="w-3 h-3 animate-spin text-red-600 dark:text-red-400" />
              REC 01:24:18
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
              <Radio className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              STREAM 1080p60
            </span>
          </div>
        </div>

        {/* Switcher Main Control Board */}
        <div className="p-4 sm:p-6 bg-neutral-50/50 dark:bg-neutral-900/95 space-y-6 transition-colors duration-300">
          {/* Dual Multiview Monitors (Preview on Left, Program on Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Preview Monitor */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500 bg-neutral-900 dark:bg-black aspect-video flex flex-col justify-between p-3.5 shadow-lg shadow-emerald-500/10 text-white">
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500 text-black font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  PREVIEW (STANDBY)
                </span>
                <span className="text-xs font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                  Input #{previewInput}
                </span>
              </div>

              {/* Simulated Camera Feed with smooth crossfade */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activePvw.thumbnailGradient} opacity-90 flex items-center justify-center transition-all duration-300`}
              >
                <div className="text-center space-y-1.5 p-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto backdrop-blur-xs">
                    <Video className="w-5 h-5 text-white/80" />
                  </div>
                  <p className="text-sm font-bold text-white tracking-tight">
                    {activePvw.name}
                  </p>
                  <p className="text-xs text-neutral-300 font-mono">
                    {activePvw.type} · Next on Preview Bus
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between z-10 text-[10px] text-white/80 font-mono bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  NDI Stream Active
                </span>
                <span>59.94 FPS · 1080p</span>
              </div>
            </div>

            {/* Program Monitor */}
            <div
              className={`relative rounded-2xl overflow-hidden border-2 border-red-500 bg-neutral-900 dark:bg-black aspect-video flex flex-col justify-between p-3.5 shadow-lg shadow-red-500/15 text-white transition-all duration-300 ${
                isFTB ? "brightness-0" : ""
              }`}
            >
              <div className="flex items-center justify-between z-10">
                <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  ON-AIR (PROGRAM)
                </span>
                <span className="text-xs font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                  Input #{programInput}
                </span>
              </div>

              {/* Simulated Camera Feed with smooth scale/flash on transition */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activeProg.thumbnailGradient} opacity-95 flex items-center justify-center transition-all duration-300 ${
                  isTransitioning ? "opacity-40 scale-105" : "opacity-95 scale-100"
                }`}
              >
                <div className="text-center space-y-1.5 p-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center mx-auto backdrop-blur-xs animate-pulse">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-bold text-white tracking-tight">
                    {activeProg.name}
                  </p>
                  <p className="text-xs text-red-300 font-mono font-medium">
                    ● BROADCAST LIVE MASTER
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between z-10 text-[10px] text-white/80 font-mono bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs">
                <span>Master Output</span>
                <span className="text-red-400 font-bold">LIVE ON YOUTUBE &amp; TWITCH</span>
              </div>
            </div>
          </div>

          {/* Program & Preview Bus Switcher Banks */}
          <div className="space-y-4 pt-1">
            {/* Program Bus (Red Row) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Program Bus (Live Direct Cut)
                </span>
                <span className="text-[11px] text-neutral-500">Tap input to hot-switch</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {inputs.map((input) => {
                  const isLive = programInput === input.id;
                  return (
                    <button
                      key={`prog-${input.id}`}
                      onClick={() => handleSelectProgram(input.id)}
                      className={`relative p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-150 cursor-pointer active:scale-95 ${
                        isLive
                          ? "bg-red-600 border-red-500 text-white shadow-md shadow-red-600/30 scale-[1.02]"
                          : "bg-white dark:bg-neutral-800/80 border-black/10 dark:border-neutral-700/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-xs hover:border-black/20 dark:hover:border-neutral-500"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold">
                          #{input.id}
                        </span>
                        {isLive && (
                          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        )}
                      </div>
                      <p className="text-xs font-semibold truncate">
                        {input.name}
                      </p>
                      <span className="text-[10px] opacity-70 font-mono mt-0.5 truncate">
                        {input.type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preview Bus (Green Row) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Preview Bus (Next Selection)
                </span>
                <span className="text-[11px] text-neutral-500">Select next camera/graphic</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {inputs.map((input) => {
                  const isPvw = previewInput === input.id;
                  return (
                    <button
                      key={`pvw-${input.id}`}
                      onClick={() => handleSelectPreview(input.id)}
                      className={`relative p-3 rounded-xl border text-left flex flex-col justify-between transition-all duration-150 cursor-pointer active:scale-95 ${
                        isPvw
                          ? "bg-emerald-600 border-emerald-500 text-white shadow-md shadow-emerald-600/30 scale-[1.02]"
                          : "bg-white dark:bg-neutral-800/80 border-black/10 dark:border-neutral-700/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-xs hover:border-black/20 dark:hover:border-neutral-500"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold">
                          #{input.id}
                        </span>
                        {isPvw && (
                          <span className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <p className="text-xs font-semibold truncate">
                        {input.name}
                      </p>
                      <span className="text-[10px] opacity-70 font-mono mt-0.5 truncate">
                        {input.type}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Master Control / Transition Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-black/5 dark:border-white/10 items-center">
            {/* Transition Action Buttons */}
            <div className="flex items-center gap-2.5 col-span-1 md:col-span-2">
              {/* CUT: Jet Black in light mode, Crisp White in dark mode */}
              <button
                onClick={handleCut}
                className="btn-primary flex-1 py-3 px-4 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
              >
                <ArrowRightLeft className="w-4 h-4" />
                <span>CUT</span>
              </button>

              {/* AUTO: Emerald gradient */}
              <button
                onClick={handleAuto}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>AUTO (500ms)</span>
              </button>

              {/* FTB */}
              <button
                onClick={() => setIsFTB(!isFTB)}
                className={`py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                  isFTB
                    ? "bg-red-600 text-white animate-pulse border-2 border-white shadow-lg"
                    : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 border border-black/10 dark:border-neutral-700"
                }`}
              >
                <span>FTB</span>
              </button>
            </div>

            {/* Audio Peak Meter & Tally Toggle */}
            <div className="flex items-center gap-3 bg-white dark:bg-neutral-950/70 p-3 rounded-xl border border-black/5 dark:border-white/5 shadow-xs">
              <Volume2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-neutral-600 dark:text-neutral-400">
                  <span>MASTER AUDIO</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">-6 dB</span>
                </div>
                <div className="flex gap-1 h-2.5 items-end">
                  <div className="w-1.5 rounded-xs bg-emerald-500 animate-vu-1" />
                  <div className="w-1.5 rounded-xs bg-emerald-500 animate-vu-2" />
                  <div className="w-1.5 rounded-xs bg-emerald-500 animate-vu-3" />
                  <div className="w-1.5 rounded-xs bg-yellow-500 animate-vu-1" />
                  <div className="w-1.5 rounded-xs bg-yellow-500 animate-vu-2" />
                  <div className="w-1.5 rounded-xs bg-red-500 animate-vu-3" />
                  <div className="w-1.5 rounded-xs bg-neutral-200 dark:bg-neutral-800" />
                  <div className="w-1.5 rounded-xs bg-neutral-200 dark:bg-neutral-800" />
                </div>
              </div>
              <button
                onClick={() => setTallyMode(!tallyMode)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer ${
                  tallyMode
                    ? "bg-red-600 text-white border-red-500 shadow-xs"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-black/10 dark:border-neutral-700 hover:text-black dark:hover:text-white"
                }`}
                title="Toggle Fullscreen Tally Mode"
              >
                TALLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
