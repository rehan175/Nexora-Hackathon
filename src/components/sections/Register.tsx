"use client"

import React from 'react';

export const Register = () => {
  return (
    <section id="register" className="py-32 px-6 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,87,255,0.12),transparent)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70 uppercase">// INITIATE SEQUENCE</div>
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-2 uppercase">
          Join the <span className="text-cyan">Grid</span>
        </h2>
        <p className="font-code text-[11px] text-muted-foreground tracking-[3px] mb-16 uppercase">REGISTRATION THROUGH GOOGLE FORMS</p>

        <div className="bg-card/90 border border-cyan/20 p-12 md:p-24 relative cyber-clip group hover:border-cyan/40 transition-all duration-500">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
          
          <div className="space-y-8">
            <div className="w-16 h-16 rounded-full border-2 border-cyan/20 border-t-cyan animate-spin mx-auto mb-6" />
            
            <h3 className="font-headline text-2xl md:text-3xl text-white tracking-[6px] glow-text uppercase">
              Uplink in <span className="text-cyan">Progress</span>
            </h3>
            
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto leading-relaxed">
              Our neural uplink for registration is being rerouted. To ensure data integrity, all participant registration will be handled via our official Google Forms portal.
            </p>

            <div className="pt-8">
              <a 
                href="#" 
                className="inline-block bg-cyan text-background font-headline font-black tracking-[4px] px-12 py-6 text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all cyber-clip uppercase"
                onClick={(e) => e.preventDefault()}
              >
                ◈ ACCESS GOOGLE FORM ◈
              </a>
            </div>

            <p className="font-code text-[10px] text-cyan/30 tracking-[4px] mt-8 uppercase">
              // STATUS: WAITING_FOR_UPLINK_STAGING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
