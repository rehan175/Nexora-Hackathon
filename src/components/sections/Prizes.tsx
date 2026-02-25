"use client"

import React from 'react';

const PrizeCard = ({ rank, icon, amount, label, perks, highlight }: { rank: string; icon: string; amount: string; label: string; perks: string[]; highlight?: boolean }) => (
  <div className={`group bg-card/80 border border-cyan/10 text-center p-12 transition-all hover:-translate-y-2 relative overflow-hidden ${
    highlight ? 'border-gold/30 bg-gradient-to-b from-gold/[0.05] to-card/80 scale-105 z-[2]' : ''
  }`}>
    <div className="font-headline text-[12px] tracking-[4px] text-muted-foreground mb-4">{rank}</div>
    <div className="text-5xl mb-6">{icon}</div>
    <div className={`font-headline text-4xl md:text-5xl font-black mb-2 ${highlight ? 'text-gold drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]' : 'text-gray-400'}`}>
      {amount}
    </div>
    <div className="text-[13px] text-muted-foreground tracking-[2px] uppercase mb-8">{label}</div>
    <ul className="text-left space-y-3">
      {perks.map((p) => (
        <li key={p} className="text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-cyan text-[8px]">◆</span> {p}
        </li>
      ))}
    </ul>
  </div>
);

export const Prizes = () => {
  return (
    <section id="prizes" className="py-32 px-6">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70 uppercase">// REWARD MATRIX</div>
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6 uppercase flex justify-center gap-4">
          Prize <span className="text-cyan">Pool</span>
        </h2>
        <div className="w-20 h-0.5 bg-cyan relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-cyan after:rounded-full mx-auto" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end">
        <PrizeCard 
          rank="RANK 02" icon="🥈" amount="₹30,000" label="SILVER CORE"
          perks={['Cash Prize', 'Internship Opportunities', 'Mentor Network Access', 'Hardware Kit']}
        />
        <PrizeCard 
          rank="RANK 01" icon="🏆" amount="₹50,000" label="PRIME CORE" highlight
          perks={['Cash Prize', 'VC Fast-Track Meetings', 'Cloud Credits', 'Global Stage Feature', 'Incubation Program']}
        />
        <PrizeCard 
          rank="RANK 03" icon="🥉" amount="₹20,000" label="BRONZE CORE"
          perks={['Cash Prize', 'Community Recognition', 'Swag Pack Pro', 'Certificate']}
        />
      </div>
    </section>
  );
};
