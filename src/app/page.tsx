
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { Tracks } from '@/components/sections/Tracks';
import { Timeline } from '@/components/sections/Timeline';
import { Prizes } from '@/components/sections/Prizes';
import { VenueContact } from '@/components/sections/VenueContact';
import { Register } from '@/components/sections/Register';
import { CyberBackground } from '@/components/ui/CyberBackground';
import { HudOverlay } from '@/components/ui/HudOverlay';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CyberBackground />
      <HudOverlay />
      <Navbar />
      
      <Hero />
      <Stats />
      <Tracks />
      <Timeline />
      <Prizes />
      <VenueContact />
      <Register />

      <footer className="relative z-10 px-8 py-12 border-t border-cyan/10 flex flex-col md:flex-row items-center justify-between font-code text-[11px] text-muted-foreground/40 tracking-[2px] gap-8">
        <div className="font-headline font-black text-xl tracking-[6px] text-white">NEXORA</div>
        <div>© 2025 NEXORA INC. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-cyan transition-colors">TERMS</a>
          <a href="#" className="hover:text-cyan transition-colors">CONTACT</a>
          <a href="#" className="hover:text-cyan transition-colors">DISCORD</a>
        </div>
      </footer>
      
      <Toaster />
    </main>
  );
}
