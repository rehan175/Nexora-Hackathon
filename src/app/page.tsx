'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AboutVision } from '@/components/sections/AboutVision';
import { Stats } from '@/components/sections/Stats';
import { Tracks } from '@/components/sections/Tracks';
import { Timeline } from '@/components/sections/Timeline';
import { Prizes } from '@/components/sections/Prizes';
import { VenueContact } from '@/components/sections/VenueContact';
import { Register } from '@/components/sections/Register';
import { CyberBackground } from '@/components/ui/CyberBackground';
import { HudOverlay } from '@/components/ui/HudOverlay';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isUltron, setIsUltron] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to Ultron theme after scrolling past the hero/stats fold (~800px)
      const threshold = window.innerHeight * 0.8;
      setIsUltron(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={cn("relative min-h-screen", isUltron && "theme-ultron")}>
      <CyberBackground />
      <HudOverlay />
      <Navbar />
      
      <Hero />
      <Stats />
      
      <div id="transition-point" className="relative">
        <Tracks />
        <Timeline />
        <Prizes />
        <Register />
        <AboutVision />
        <VenueContact />
      </div>

      <footer className="relative z-10 px-8 py-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between font-code text-[11px] text-white tracking-[2px] gap-8">
        <div className="font-headline font-black text-xl tracking-[6px] text-white">NEXORA</div>
        <div className="opacity-80">© 2026 NEXORA INC. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-primary transition-colors">TERMS</a>
          <a href="#" className="hover:text-primary transition-colors">CONTACT</a>
          <a href="#" className="hover:text-primary transition-colors">DISCORD</a>
        </div>
      </footer>
      
      <Toaster />
    </main>
  );
}
