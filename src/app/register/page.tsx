'use client';

import { Navbar } from '@/components/ui/Navbar';
import { CyberBackground } from '@/components/ui/CyberBackground';
import { HudOverlay } from '@/components/ui/HudOverlay';

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen">
      <CyberBackground />
      <HudOverlay />
      <Navbar />
      
      <div className="pt-48 pb-32 px-6 flex flex-col items-center justify-center min-h-[80vh] relative z-10">
        <div className="font-code text-cyan text-xs tracking-[5px] mb-6 opacity-70 uppercase animate-pulse">
          // INITIATING_REGISTRATION_SEQUENCE
        </div>
        
        <h1 className="font-headline font-black text-4xl md:text-7xl text-white tracking-[12px] mb-8 text-center uppercase glow-text">
          REGISTRATION <span className="text-cyan">GRID</span>
        </h1>

        <div className="max-w-3xl w-full bg-card/60 backdrop-blur-sm border border-cyan/10 p-12 md:p-20 text-center cyber-clip relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan/20" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan/20" />
          
          <div className="space-y-8">
            <p className="text-muted-foreground font-body text-xl tracking-wide leading-relaxed">
              The neural uplink for the NEXORA 2025 registration is currently being synchronized. 
              The registration portal will go live shortly.
            </p>

            <div className="py-12 px-8 border border-dashed border-cyan/20 bg-cyan/5 rounded-lg flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-cyan/20 border-t-cyan animate-spin" />
              <span className="font-code text-cyan/60 text-sm tracking-[4px] uppercase">
                [ WAITING FOR GOOGLE_FORM_UPLINK ]
              </span>
            </div>

            <p className="font-code text-[10px] text-muted-foreground/40 tracking-[2px] uppercase">
              STATUS: STAGING_PHASE // BUILD: 240207-ALPHA
            </p>
          </div>
        </div>
      </div>

      <footer className="relative z-10 px-8 py-12 border-t border-cyan/10 flex flex-col md:flex-row items-center justify-between font-code text-[11px] text-muted-foreground/40 tracking-[2px] gap-8">
        <div className="font-headline font-black text-xl tracking-[6px] text-white">NEXORA</div>
        <div>© 2025 NEXORA INC. ALL RIGHTS RESERVED.</div>
      </footer>
    </main>
  );
}