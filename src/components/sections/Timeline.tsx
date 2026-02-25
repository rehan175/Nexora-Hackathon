
"use client"

import React from 'react';

const TimelineItem = ({ time, event, detail, left }: { time: string; event: string; detail: string; left?: boolean }) => (
  <div className={`flex flex-col md:flex-row gap-12 mb-16 relative items-start ${left ? '' : 'md:flex-row-reverse'}`}>
    <div className="flex-1 w-full">
      <div className="bg-card/80 border border-cyan/10 p-8 hover:border-cyan/35 transition-colors relative">
        <div className="font-headline text-[11px] text-cyan tracking-[3px] mb-2 uppercase">{time}</div>
        <div className="font-headline text-xl font-bold text-white mb-2 uppercase">{event}</div>
        <div className="text-muted-foreground text-sm leading-relaxed">{detail}</div>
      </div>
    </div>
    <div className="absolute left-[24px] md:left-1/2 top-7 w-4 h-4 bg-cyan rounded-full -translate-x-1/2 shadow-[0_0_20px_#00d4ff] z-[2]">
      <div className="absolute inset-[-6px] border border-cyan rounded-full animate-ping-slow" />
    </div>
    <div className="flex-1 hidden md:block" />
  </div>
);

export const Timeline = () => {
  return (
    <section id="timeline" className="bg-cyan/[0.02] py-32 px-6">
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left">
        <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70 uppercase">// MISSION TIMELINE</div>
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6 uppercase">
          24-Hour <span className="text-cyan">Sequence</span>
        </h2>
        <div className="w-20 h-0.5 bg-cyan relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-cyan after:rounded-full mx-auto md:mx-0" />
      </div>

      <div className="max-w-4xl mx-auto relative px-10 md:px-0">
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan/40 to-transparent -translate-x-1/2" />
        
        <TimelineItem time="T+00:00 — 09:00 AM" event="SYSTEM BOOT — Opening Ceremony" detail="Grid initializes. Teams form. Problem statements revealed. Let the sprint begin." left />
        <TimelineItem time="T+03:00 — 12:00 PM" event="CHECKPOINT ALPHA — Idea Submission" detail="Lock your concept. Mentors scan the grid. First rounds of feedback delivered." />
        <TimelineItem time="T+09:00 — 06:00 PM" event="CHECKPOINT BETA — Mid-Sprint Review" detail="Prototype must be functional. Mentor sessions. Workshop: Scaling Under Pressure." left />
        <TimelineItem time="T+18:00 — 03:00 AM" event="DARK ZONE — Midnight Surge" detail="Fueled by caffeine and conviction. The grid never sleeps. Neither do legends." />
        <TimelineItem time="T+24:00 — 09:00 AM" event="SUBMISSION LOCK — Code Freeze" detail="All systems halt. Final commits. Presentations begin. The future is submitted." left />
      </div>
    </section>
  );
};
