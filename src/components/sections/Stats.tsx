"use client"

import React, { useEffect, useState, useRef } from 'react';

const StatCard = ({ target, unit = '', label, suffix = '' }: { target: number; unit?: string; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="group bg-card/80 p-12 text-center border border-cyan/10 relative overflow-hidden transition-all hover:border-cyan/30 hover:-translate-y-1">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="font-headline font-black text-5xl text-cyan glow-text leading-none">
        {count}{unit}{suffix}
      </div>
      <div className="font-code text-xs tracking-widest text-muted-foreground mt-4 uppercase">
        {label}
      </div>
    </div>
  );
};

export const Stats = () => {
  return (
    <section id="stats" className="bg-gradient-to-b from-background via-cyan/5 to-background py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-cyan/5">
        <StatCard target={24} unit="H" label="NON-STOP HACKING" />
        <StatCard target={300} unit="+" label="HACKERS WORLDWIDE" />
        <StatCard target={1} suffix="LAKH" label="PRIZE POOL (₹)" />
        <StatCard target={6} label="DOMAINS" />
      </div>
    </section>
  );
};
