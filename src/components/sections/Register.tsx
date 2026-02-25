
"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const Register = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "REGISTRATION SEQUENCE INITIATED",
        description: "Your data has been uploaded to the grid. Check your comms for confirmation.",
      });
    }, 1500);
  };

  const inputClasses = "bg-blue-950/40 border-cyan/20 text-foreground placeholder:text-blue-300/30 font-body focus:border-cyan focus:ring-cyan/20 h-14";

  return (
    <section id="register" className="py-32 px-6 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,87,255,0.12),transparent)]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-code text-cyan text-xs tracking-[5px] mb-3 opacity-70 uppercase">// INITIATE SEQUENCE</div>
        <h2 className="font-headline font-bold text-4xl md:text-5xl text-white mb-2 uppercase">
          Join the <span className="text-cyan">Grid</span>
        </h2>
        <p className="font-code text-[11px] text-muted-foreground tracking-[3px] mb-16 uppercase">LIMITED SLOTS — FIRST COME, FIRST SERVE</p>

        <div className="bg-card/90 border border-cyan/20 p-8 md:p-16 relative cyber-clip">
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="FIRST NAME" className={inputClasses} required />
              <Input placeholder="LAST NAME" className={inputClasses} required />
            </div>
            <Input type="email" placeholder="EMAIL ADDRESS" className={inputClasses} required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="GITHUB / PORTFOLIO URL" className={inputClasses} required />
              <Select>
                <SelectTrigger className={inputClasses}>
                  <SelectValue placeholder="SELECT TRACK" />
                </SelectTrigger>
                <SelectContent className="bg-card border-cyan/30 text-foreground">
                  <SelectItem value="ai">Artificial Intelligence</SelectItem>
                  <SelectItem value="web3">Decentralized Web</SelectItem>
                  <SelectItem value="climate">Climate Tech</SelectItem>
                  <SelectItem value="biotech">Biotech & Health</SelectItem>
                  <SelectItem value="cyber">Cybersecurity</SelectItem>
                  <SelectItem value="open">Open Innovation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select>
                <SelectTrigger className={inputClasses}>
                  <SelectValue placeholder="TEAM SIZE" />
                </SelectTrigger>
                <SelectContent className="bg-card border-cyan/30 text-foreground">
                  <SelectItem value="1">Solo (1)</SelectItem>
                  <SelectItem value="2">Duo (2)</SelectItem>
                  <SelectItem value="4">Squad (3-4)</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="TEAM NAME (OPTIONAL)" className={inputClasses} />
            </div>
            
            <Button 
              type="submit"
              disabled={submitting}
              className="w-full bg-cyan text-background font-headline font-black tracking-[4px] py-8 text-sm hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all disabled:opacity-50"
            >
              {submitting ? 'PROCESSING...' : '⬡ INITIATE REGISTRATION ⬡'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
