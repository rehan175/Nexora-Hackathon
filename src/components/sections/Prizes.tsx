"use client"

import React from 'react';

const PrizeCard = ({ rank, icon, amount, highlight, isSpecial }: { rank: string; icon: string; amount: string; highlight?: boolean; isSpecial?: boolean }) => (
  <div className={`group bg-card/80 border border-primary/10 text-center transition-all hover:-translate-y-2 relative overflow-hidden ${
    highlight ? 'border-gold/30 bg-gradient-to-b from-gold/[0.05] to-card/80 scale-105 z-[2] p-12' : isSpecial ? 'p-8 border-primary/20 bg-primary/5' : 'p-12'
  }`}>
    <div className="font-headline text-[12px] tracking-[4px] text-muted-foreground mb-4">{rank}</div>
    <div className="text-5xl mb-6">{icon}</div>
    <div className={`font-headline text-4xl md:text-5xl font-black ${highlight ? 'text-gold drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]' : 'text-gray-400'}`}>
      {amount}
    </div>
  </div>
);

export const Prizes = () => {
  return (
    <section id="prizes" className="py-32 px-6">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="font-code text-primary text-xs tracking-[5px] mb-3 opacity-70 uppercase">// REWARD MATRIX</div>
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6 uppercase flex justify-center gap-4">
          Prize <span className="text-primary">Pool</span>
        </h2>
        <div className="w-20 h-0.5 bg-primary relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-primary after:rounded-full mx-auto" />
      </div>

      {/* Main Podium */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center mb-16">
        <PrizeCard 
          rank="RANK 02" icon="🥈" amount="₹25,000"
        />
        <PrizeCard 
          rank="RANK 01" icon="🏆" amount="₹40,000" highlight
        />
        <PrizeCard 
          rank="RANK 03" icon="🥉" amount="₹15,000"
        />
      </div>

      {/* Special Prizes */}
      <div className="max-w-4xl mx-auto">
         <div className="font-code text-primary/60 text-center text-[10px] tracking-[6px] mb-10 uppercase animate-pulse">--- SPECIAL RECOGNITION ---</div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PrizeCard 
              rank="SPECIAL 01" icon="⚡" amount="₹10,000" isSpecial
            />
            <PrizeCard 
              rank="SPECIAL 02" icon="💎" amount="₹10,000" isSpecial
            />
         </div>
      </div>
    </section>
  );
};
