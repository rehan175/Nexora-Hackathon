"use client"

import React from 'react';

export const AboutVision = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* About Section */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div>
            <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70 uppercase">// IDENTITY_DECRYPTED</div>
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6 uppercase">
              About <span className="text-cyan">NEXORA</span>
            </h2>
            <div className="w-20 h-0.5 bg-cyan relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-cyan after:rounded-full" />
          </div>

          <div className="space-y-6">
            <p className="font-body text-xl text-muted-foreground leading-relaxed tracking-wide">
              NEXORA is more than a competition; it's a 24-hour high-octane sprint into the unknown. Born at the intersection of human creativity and technical precision, we provide the platform where the world's most relentless builders gather to break boundaries and own the grid.
            </p>
            <p className="font-body text-lg text-muted-foreground/80 leading-relaxed italic border-l-2 border-cyan/30 pl-6">
              "In the dark zone of the 18th hour, when sleep is a memory and the code is a pulse, legends are forged. This is where the future is written, one commit at a time."
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-cyan/5 border border-cyan/10 cyber-clip-bl -z-10 group-hover:bg-cyan/10 transition-colors duration-500" />
          <div className="p-12 space-y-8 cyber-clip bg-card/40 border border-cyan/20 backdrop-blur-sm">
            <div>
              <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70 uppercase">// STRATEGIC_HORIZON</div>
              <h2 className="font-headline font-bold text-3xl text-white mb-6 uppercase">
                Our <span className="text-cyan">Vision</span>
              </h2>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-cyan/30 bg-cyan/5 font-code text-cyan">01</div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-white tracking-widest mb-2 uppercase">Decentralized Innovation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Fostering an ecosystem where ideas aren't gated by institutions but powered by individual brilliance and collective code.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-cyan/30 bg-cyan/5 font-code text-cyan">02</div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-white tracking-widest mb-2 uppercase">Planetary Problem Solving</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Directing technical prowess toward solving the hardest challenges in climate, biotech, and autonomous systems.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 flex items-center justify-center shrink-0 border border-cyan/30 bg-cyan/5 font-code text-cyan">03</div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-white tracking-widest mb-2 uppercase">The 24-Hour Crucible</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Proving that with radical focus and a shared grid, 24 hours is all it takes to prototype a better world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
