"use client"

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export interface Problem {
  num: string;
  title: string;
  desc: string;
  diff: "hard" | "medium" | "easy";
}

export interface TrackInfo {
  icon: string;
  title: string;
  intro: string;
  tag: string;
  desc: string;
  problems: Problem[];
}

export const trackData: Record<string, TrackInfo> = {
  ai: {
    icon: "🤖", title: "ARTIFICIAL INTELLIGENCE", tag: "NEURAL SYSTEMS",
    desc: "Build the next generation of intelligent systems—LLMs, computer vision, autonomous agents, and beyond.",
    intro: "Push the boundaries of machine intelligence. These challenges demand novel approaches to LLMs, vision, and autonomous reasoning.",
    problems: [
      { num: "PS-AI-01", title: "Hallucination Guard System", desc: "Build a real-time detection and mitigation layer for LLM hallucinations in high-stakes domains like medicine and law.", diff: "hard" },
      { num: "PS-AI-02", title: "Multimodal Emotion Engine", desc: "Create an AI system that reads text, voice tone, and facial cues simultaneously to accurately infer emotional states.", diff: "hard" },
      { num: "PS-AI-03", title: "Adaptive Learning Tutor", desc: "Design a personalized AI tutor that dynamically adjusts difficulty and teaching style based on real-time student performance.", diff: "medium" },
      { num: "PS-AI-04", title: "Low-Resource Language NLP", desc: "Build NLP tools for a language with fewer than 1M web documents — tackle tokenization, translation, and summarization.", diff: "hard" },
      { num: "PS-AI-05", title: "AI Code Review Agent", desc: "Create an autonomous agent that reviews pull requests, identifies bugs, suggests refactors, and writes unit tests.", diff: "medium" },
    ],
  },
  web3: {
    icon: "🔗", title: "DECENTRALIZED WEB", tag: "BLOCKCHAIN",
    desc: "Craft trustless protocols, DeFi primitives, and Web3 infrastructure that reshapes digital ownership.",
    intro: "The open internet needs builders. Solve the hardest problems in trust, ownership, and decentralized coordination.",
    problems: [
      { num: "PS-W3-01", title: "On-Chain Identity Passport", desc: "Design a self-sovereign identity system where users own their credentials — portable, verifiable, and privacy-preserving.", diff: "hard" },
      { num: "PS-W3-02", title: "Gas-Free Micro Transactions", desc: "Build a Layer-2 solution enabling sub-cent transactions at massive scale for gaming or social applications.", diff: "hard" },
      { num: "PS-W3-03", title: "Decentralized Governance Simulator", desc: "Create a DAO governance simulation platform that lets communities model voting outcomes before committing on-chain.", diff: "medium" },
      { num: "PS-W3-04", title: "Cross-Chain Asset Bridge", desc: "Build a secure, trust-minimized bridge for moving NFTs and fungible tokens across incompatible blockchains.", diff: "hard" },
      { num: "PS-W3-05", title: "Proof-of-Contribution Protocol", desc: "Design a system that rewards meaningful open-source contributions with verifiable, on-chain reputation tokens.", diff: "medium" },
    ],
  },
  climate: {
    icon: "🌱", title: "CLIMATE TECH", tag: "GREEN FUTURE",
    desc: "Engineer solutions for carbon tracking, renewable optimization, and planetary survival at scale.",
    intro: "The planet is counting on engineers. Build the tools that track, predict, and reduce humanity's environmental impact.",
    problems: [
      { num: "PS-CT-01", title: "Scope 3 Emissions Tracker", desc: "Build a supply-chain carbon tracking tool that automatically calculates Scope 3 emissions using invoice and logistics data.", diff: "hard" },
      { num: "PS-CT-02", title: "Wildfire Spread Predictor", desc: "Using satellite imagery and weather data, predict wildfire propagation paths up to 12 hours in advance.", diff: "hard" },
      { num: "PS-CT-03", title: "Grid Load Optimizer", desc: "Design a system that balances renewable energy supply with city demand, reducing fossil fuel top-up requirements.", diff: "medium" },
      { num: "PS-CT-04", title: "Eco-Routing for Logistics", desc: "Reroute delivery fleets in real-time to minimize fuel consumption while meeting delivery SLAs.", diff: "medium" },
      { num: "PS-CT-05", title: "Carbon Credit Fraud Detector", desc: "Use ML to identify fraudulent or double-counted carbon credits in existing registries.", diff: "hard" },
    ],
  },
  biotech: {
    icon: "⚕️", title: "BIOTECH & HEALTH", tag: "BIOHACKING",
    desc: "Merge biology with code—build diagnostic tools, personalized medicine, and digital health platforms.",
    intro: "Code meets biology. These challenges sit at the intersection of data, life science, and human welfare.",
    problems: [
      { num: "PS-BH-01", title: "Rare Disease Diagnostic AI", desc: "Build a model that identifies rare genetic disorders from symptom clusters and patient history.", diff: "hard" },
      { num: "PS-BH-02", title: "Drug Interaction Checker", desc: "Create a real-time pharmacovigilance tool that flags dangerous polypharmacy combinations from electronic health records.", diff: "medium" },
      { num: "PS-BH-03", title: "Mental Health Crisis Triage", desc: "Design a conversational AI triage system for mental health helplines that routes users to the right level of care.", diff: "hard" },
      { num: "PS-BH-04", title: "Protein Folding Visualizer", desc: "Build an interactive 3D tool for researchers to explore predicted protein structures and binding sites in-browser.", diff: "medium" },
      { num: "PS-BH-05", title: "Remote Vital Sign Monitor", desc: "Use a standard webcam feed to non-invasively estimate heart rate, respiration rate, and SpO2 levels.", diff: "hard" },
    ],
  },
  cyber: {
    icon: "🛡️", title: "CYBERSECURITY", tag: "ZERO-DAY",
    desc: "Architect defenses, discover vulnerabilities, and build the fortress walls of our digital civilization.",
    intro: "The threat landscape evolves daily. Build tools that protect systems, expose vulnerabilities, and keep data sovereign.",
    problems: [
      { num: "PS-CS-01", title: "AI-Powered Phishing Detector", desc: "Build a browser extension or API that scores incoming emails and websites for phishing likelihood using behavioral signals.", diff: "medium" },
      { num: "PS-CS-02", title: "Zero-Trust Access Auditor", desc: "Create a tool that audits cloud infrastructure configurations and flags over-privileged roles and blast radius risks.", diff: "hard" },
      { num: "PS-CS-03", title: "Deepfake Authentication Layer", desc: "Design a system that detects AI-generated voice or video in real-time video calls for enterprise use.", diff: "hard" },
      { num: "PS-CS-04", title: "Honeypot Network Simulator", desc: "Build a configurable honeypot platform that logs and visualizes attacker behavior for threat intelligence.", diff: "medium" },
      { num: "PS-CS-05", title: "Encrypted Messaging Analyzer", desc: "Create a metadata analysis tool that identifies anomalous communication patterns without decrypting message content.", diff: "hard" },
    ],
  },
  open: {
    icon: "🚀", title: "OPEN INNOVATION", tag: "WILDCARD",
    desc: "No limits. If it disrupts an industry, builds a community, or challenges the status quo—build it here.",
    intro: "No domain. No limits. Just a problem worth solving. Pick one of these or pitch your own disruptive idea.",
    problems: [
      { num: "PS-OI-01", title: "AI-Powered Civic Budget Allocator", desc: "Let citizens explore city budget tradeoffs using a simulation tool powered by real municipal spending data.", diff: "medium" },
      { num: "PS-OI-02", title: "Real-Time Language Accessibility", desc: "Build a device-agnostic tool that provides live sign-language or captioned audio interpretation for any spoken event.", diff: "hard" },
      { num: "PS-OI-03", title: "Hyper-Local Disaster Response Grid", desc: "Design a mesh-network app for peer-to-peer coordination during disasters when internet infrastructure is down.", diff: "hard" },
      { num: "PS-OI-04", title: "Bias Audit Tool for HR Systems", desc: "Create a platform that stress-tests recruitment algorithms for demographic bias using synthetic candidate data.", diff: "medium" },
      { num: "PS-OI-05", title: "Knowledge Graph for Rural Farmers", desc: "Build an offline-capable app that delivers crop disease detection and market price insights to farmers without reliable internet.", diff: "easy" },
    ],
  },
};

export const Tracks = () => {
  const router = useRouter();
  const [selectedTrack, setSelectedTrack] = useState<TrackInfo | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        {Object.entries(trackData).map(([id, track]) => (
          <div 
            key={id}
            onClick={() => setSelectedTrack(track)}
            className="group bg-card/60 border border-cyan/10 p-10 cyber-clip-tr hover:border-cyan/40 hover:-translate-y-1.5 transition-all cursor-pointer relative"
          >
            <div className="absolute top-0 right-0 w-6 h-6 border-b-[24px] border-b-transparent border-r-[24px] border-r-cyan/30" />
            <div className="text-4xl mb-6 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">{track.icon}</div>
            <h3 className="font-headline text-lg font-bold text-white tracking-widest mb-3 uppercase">{track.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{track.desc}</p>
            <span className="inline-block border border-cyan/30 px-3 py-1 font-code text-[10px] tracking-widest text-cyan uppercase">{track.tag}</span>
            <div className="mt-4 flex items-center gap-2 font-code text-[10px] tracking-widest text-cyan/40">
              <span className="text-[8px]">▶</span> VIEW PROBLEM STATEMENTS
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedTrack} onOpenChange={() => setSelectedTrack(null)}>
        <DialogContent className="max-w-3xl bg-card border-cyan/30 cyber-clip text-foreground overflow-y-auto max-h-[90vh]">
          <DialogHeader className="flex flex-row items-center gap-4 border-b border-cyan/10 pb-6">
            <div className="text-5xl">{selectedTrack?.icon}</div>
            <div>
              <div className="font-code text-[10px] tracking-[4px] text-cyan opacity-70 uppercase">// MISSION_SPECS</div>
              <DialogTitle className="font-headline text-2xl tracking-widest text-white mt-1 uppercase">{selectedTrack?.title}</DialogTitle>
            </div>
          </DialogHeader>
          
          <div className="py-6 space-y-6">
            <div className="bg-cyan/5 border-l-2 border-cyan p-4">
              <p className="text-sm text-cyan/80 font-body tracking-wide leading-relaxed italic">
                "{selectedTrack?.intro}"
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-code text-xs text-cyan tracking-[3px] uppercase">Avaliable Challenges:</h4>
              {selectedTrack?.problems.map((p) => (
                <div key={p.num} className="group bg-muted/40 border border-cyan/10 border-l-4 border-l-cyan p-6 hover:bg-cyan/5 hover:border-cyan/30 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-code text-[9px] text-cyan/50 tracking-widest">{p.num}</span>
                    <span className={`font-code text-[9px] tracking-widest px-2 py-0.5 border rounded uppercase ${
                      p.diff === 'hard' ? 'text-destructive border-destructive/30' : 
                      p.diff === 'medium' ? 'text-gold border-gold/30' : 'text-green-400 border-green-400/30'
                    }`}>
                      {p.diff}
                    </span>
                  </div>
                  <h4 className="font-headline text-sm font-bold text-white tracking-widest mb-2 uppercase">{p.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <Button 
            className="w-full bg-transparent border border-cyan text-cyan hover:bg-cyan hover:text-background font-headline text-xs tracking-[3px]"
            onClick={() => {
              setSelectedTrack(null);
              scrollToSection('register');
            }}
          >
            ◈ CHOOSE THIS TRACK ◈
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};
