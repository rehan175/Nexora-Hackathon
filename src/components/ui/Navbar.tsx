
"use client"

import React from 'react';
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-[100] flex items-center justify-between px-8 md:px-12 py-6 bg-gradient-to-b from-background/95 to-transparent border-b border-cyan/10">
      <div className="font-headline font-black text-2xl tracking-[6px] text-white drop-shadow-[0_0_10px_#00d4ff] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        NEXORA
      </div>
      
      <ul className="hidden md:flex gap-10 items-center">
        {['tracks', 'timeline', 'prizes', 'register'].map((link) => (
          <li key={link}>
            <button 
              onClick={() => scrollTo(link)}
              className="font-body text-[13px] tracking-[3px] font-semibold text-muted-foreground hover:text-cyan uppercase relative group py-2"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyan transition-all group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      <Button 
        variant="outline" 
        onClick={() => scrollTo('register')}
        className="bg-transparent border border-cyan text-cyan font-headline text-[11px] tracking-[3px] uppercase px-6 hover:bg-cyan hover:text-background transition-colors relative overflow-hidden group"
      >
        <span className="relative z-10">INITIATE</span>
        <span className="absolute inset-0 bg-cyan -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </Button>
    </nav>
  );
};
