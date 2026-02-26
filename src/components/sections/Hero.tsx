"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        d: String(d).padStart(2, '0'),
        h: String(h).padStart(2, '0'),
        m: String(m).padStart(2, '0'),
        s: String(s).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Ring = ({ size, dashed, cw }: { size: number; dashed?: boolean; cw?: boolean }) => (
    <div 
      className={`absolute border border-primary/10 rounded-full flex items-center justify-center ${cw ? 'animate-rotate-cw' : 'animate-rotate-ccw'}`}
      style={{ width: size, height: size, borderStyle: dashed ? 'dashed' : 'solid' }}
    >
      <div className="absolute top-1/2 -left-1 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))] -translate-y-1/2" />
    </div>
  );

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden z-[1]">
      {/* Background HUD Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <Ring size={300} cw />
        <Ring size={480} dashed />
        <Ring size={660} cw />
        <Ring size={840} dashed />
        <div className="absolute border border-primary/5 rounded-full" style={{ width: 1020, height: 1020 }} />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 w-full max-w-5xl">
        <div className="flex items-center justify-center gap-4 text-primary font-code text-xs tracking-[4px] mb-6 uppercase w-full">
          <div className="h-[1px] w-12 bg-primary/40" />
          ◈ 24-HOUR HACKATHON ◈
          <div className="h-[1px] w-12 bg-primary/40" />
        </div>

        <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-[12px] leading-tight mb-4 relative">
          <span className="relative inline-block glow-text selection:bg-white selection:text-black">
            NEXORA
            {/* 3D / Chromatic Aberration Layers */}
            <span className="absolute inset-0 text-primary opacity-70 -translate-x-1 -translate-y-0.5 mix-blend-screen pointer-events-none select-none z-[-1]" aria-hidden="true">NEXORA</span>
            <span className="absolute inset-0 text-[#ff0055] opacity-70 translate-x-1 translate-y-0.5 mix-blend-screen pointer-events-none select-none z-[-2]" aria-hidden="true">NEXORA</span>
          </span>
        </h1>

        <p className="font-body text-sm md:text-xl tracking-[6px] text-primary/60 uppercase mb-8">
          Build the Future &middot; Break the Limits &middot; Own the Grid
        </p>

        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />

        <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed tracking-wide text-base md:text-lg mb-12">
          One planet. One grid. 24 hours to change everything. NEXORA unites the world&apos;s most relentless builders for a single continuous sprint into the future of intelligent systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            onClick={() => scrollToSection('register')}
            className="bg-primary text-background font-headline font-bold text-xs tracking-widest px-10 py-7 cyber-clip hover:glow-border transition-all"
          >
            REGISTER NOW
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('tracks')}
            className="border-primary/40 text-primary bg-primary/5 font-headline text-xs tracking-widest px-10 py-7 cyber-clip-bl hover:bg-primary/15 hover:border-primary transition-all"
          >
            EXPLORE TRACKS
          </Button>
        </div>

        <div className="mt-20 flex gap-4 md:gap-8 justify-center">
          {[
            { val: timeLeft.d, label: 'DAYS' },
            { val: timeLeft.h, label: 'HOURS' },
            { val: timeLeft.m, label: 'MINUTES' },
            { val: timeLeft.s, label: 'SECONDS' },
          ].map((item, i) => (
            <React.Fragment key={item.label}>
              <div className="relative p-1">
                <div className="absolute inset-0 border border-primary/20 cyber-clip" />
                <div className="px-4 py-2 md:px-6 md:py-4">
                  <span className="block font-headline text-4xl md:text-5xl font-black text-primary glow-text leading-none">{item.val}</span>
                  <span className="block font-code text-[10px] text-primary/50 tracking-widest mt-2">{item.label}</span>
                </div>
              </div>
              {i < 3 && <span className="text-3xl md:text-4xl text-primary/40 self-center animate-pulse">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
