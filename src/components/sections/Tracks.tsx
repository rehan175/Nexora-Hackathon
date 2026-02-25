
"use client"

import React, { useState } from 'react';
import { generateProblemStatements, ProblemStatementGeneratorOutput } from '@/ai/flows/ai-problem-statement-generator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Zap } from 'lucide-react';

const TRACKS_DATA = [
  { id: 'ai', icon: '🤖', name: 'ARTIFICIAL INTELLIGENCE', desc: 'Build the next generation of intelligent systems—LLMs, computer vision, autonomous agents, and beyond.', tag: 'NEURAL SYSTEMS' },
  { id: 'web3', icon: '🔗', name: 'DECENTRALIZED WEB', desc: 'Craft trustless protocols, DeFi primitives, and Web3 infrastructure that reshapes digital ownership.', tag: 'BLOCKCHAIN' },
  { id: 'climate', icon: '🌱', name: 'CLIMATE TECH', desc: 'Engineer solutions for carbon tracking, renewable optimization, and planetary survival at scale.', tag: 'GREEN FUTURE' },
  { id: 'biotech', icon: '⚕️', name: 'BIOTECH & HEALTH', desc: 'Merge biology with code—build diagnostic tools, personalized medicine, and digital health platforms.', tag: 'BIOHACKING' },
  { id: 'cyber', icon: '🛡️', name: 'CYBERSECURITY', desc: 'Architect defenses, discover vulnerabilities, and build the fortress walls of our digital civilization.', tag: 'ZERO-DAY' },
  { id: 'open', icon: '🚀', name: 'OPEN INNOVATION', desc: 'No limits. If it disrupts an industry, builds a community, or challenges the status quo—build it here.', tag: 'WILDCARD' },
];

export const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState<typeof TRACKS_DATA[0] | null>(null);
  const [problems, setProblems] = useState<ProblemStatementGeneratorOutput>([]);
  const [loading, setLoading] = useState(false);

  const fetchProblems = async (trackName: string) => {
    setLoading(true);
    try {
      const res = await generateProblemStatements({ theme: trackName, count: 4, difficulty: 'hard' });
      setProblems(res);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const openTrack = (track: typeof TRACKS_DATA[0]) => {
    setSelectedTrack(track);
    fetchProblems(track.name);
  };

  return (
    <section id="tracks" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70">// MISSION AREAS</div>
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-6">
          Choose Your <span className="text-cyan">Track</span>
        </h2>
        <div className="w-20 h-0.5 bg-cyan relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-cyan after:rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRACKS_DATA.map((track) => (
          <div 
            key={track.id}
            onClick={() => openTrack(track)}
            className="group bg-card/60 border border-cyan/10 p-10 cyber-clip-tr hover:border-cyan/40 hover:-translate-y-1.5 transition-all cursor-pointer relative"
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-b-[24px] border-b-transparent border-r-[24px] border-r-cyan/30" />
            <div className="text-4xl mb-6 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">{track.icon}</div>
            <h3 className="font-headline text-lg font-bold text-white tracking-widest mb-3">{track.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{track.desc}</p>
            <span className="inline-block border border-cyan/30 px-3 py-1 font-code text-[10px] tracking-widest text-cyan uppercase">{track.tag}</span>
            <div className="mt-4 flex items-center gap-2 font-code text-[10px] tracking-widest text-cyan/40">
              <span className="text-[8px]">▶</span> VIEW PROBLEM STATEMENTS
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedTrack} onOpenChange={() => setSelectedTrack(null)}>
        <DialogContent className="max-w-3xl bg-card border-cyan/30 cyber-clip text-foreground">
          <DialogHeader className="flex flex-row items-center gap-4 border-b border-cyan/10 pb-6">
            <div className="text-5xl">{selectedTrack?.icon}</div>
            <div>
              <div className="font-code text-[10px] tracking-[4px] text-cyan opacity-70 uppercase">// PROBLEM STATEMENTS</div>
              <DialogTitle className="font-headline text-2xl tracking-widest text-white mt-1 uppercase">{selectedTrack?.name}</DialogTitle>
            </div>
          </DialogHeader>
          
          <div className="py-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-cyan" />
                <p className="font-code text-xs text-cyan tracking-widest">INITIALIZING CHALLENGE SEQUENCE...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">Select a challenge generated by our neural engines to solve during your 24-hour sprint.</p>
                {problems.map((p) => (
                  <div key={p.num} className="group bg-muted/40 border border-cyan/10 border-l-4 border-l-cyan p-6 hover:bg-cyan/5 hover:border-cyan/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-code text-[9px] text-cyan/50 tracking-widest">{p.num}</span>
                      <span className={`font-code text-[9px] tracking-widest px-2 py-0.5 border rounded uppercase ${
                        p.difficulty === 'hard' ? 'text-destructive border-destructive/30' : 
                        p.difficulty === 'medium' ? 'text-gold border-gold/30' : 'text-green-400 border-green-400/30'
                      }`}>
                        {p.difficulty}
                      </span>
                    </div>
                    <h4 className="font-headline text-sm font-bold text-white tracking-widest mb-2">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button 
            className="w-full bg-transparent border border-cyan text-cyan hover:bg-cyan hover:text-background font-headline text-xs tracking-[3px]"
            onClick={() => {
              document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              setSelectedTrack(null);
            }}
          >
            ◈ CHOOSE THIS TRACK ◈
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};
