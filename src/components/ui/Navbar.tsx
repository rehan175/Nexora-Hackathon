"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' });
    else router.push('/');
  };

  return (
    <nav className="fixed top-0 w-full z-[100] flex items-center justify-between px-8 md:px-12 py-6 bg-gradient-to-b from-background/95 to-transparent border-b border-primary/10 backdrop-blur-sm">
      <div 
        className="font-headline font-black text-2xl tracking-[6px] text-white drop-shadow-[0_0_10px_#00d4ff] cursor-pointer" 
        onClick={handleLogoClick}
      >
        NEXORA
      </div>
      
      <ul className="hidden md:flex gap-10 items-center">
        {['tracks', 'timeline', 'prizes', 'about', 'venue'].map((link) => (
          <li key={link}>
            <button 
              onClick={() => scrollTo(link)}
              className="font-body text-[13px] tracking-[3px] font-semibold text-muted-foreground hover:text-primary uppercase relative group py-2"
            >
              {link === 'venue' ? 'Contact' : link}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      <Button 
        variant="outline" 
        onClick={() => scrollTo('register')}
        className="bg-transparent border border-primary text-primary font-headline text-[11px] tracking-[3px] uppercase px-6 hover:bg-primary hover:text-background transition-colors relative overflow-hidden group"
      >
        <span className="relative z-10">INITIATE</span>
        <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      </Button>
    </nav>
  );
};
