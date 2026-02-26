"use client"

import React from 'react';
import { MapPin } from 'lucide-react';

export const VenueContact = () => {
  const contacts = [
    "Hanzala", "Iban", "Marzuq", "Rehan", 
    "Misbah", "Hadi", "Imad"
  ];

  return (
    <section id="venue" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Venue Info */}
        <div className="space-y-8">
          <div>
            <div className="font-code text-primary text-xs tracking-[5px] mb-3 opacity-70 uppercase">// COMMAND CENTER</div>
            <h2 className="font-headline font-bold text-4xl text-white mb-6 uppercase">
              Mission <span className="text-primary">Location</span>
            </h2>
            <div className="w-20 h-0.5 bg-primary relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-primary after:rounded-full" />
          </div>

          <div className="bg-card/60 border border-primary/10 p-8 cyber-clip hover:border-primary/30 transition-all group">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-primary/10 rounded-lg text-primary">
                <MapPin size={32} />
              </div>
              <div className="space-y-4">
                <h3 className="font-headline text-xl text-white tracking-widest uppercase">HKBK College of Engineering</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nagavara, Bangalore, Karnataka<br />
                  560045, India
                </p>
                <div className="font-code text-[10px] text-primary/40 tracking-[2px] uppercase">
                  STATUS: SECURE_FACILITY // GRID_UP
                </div>
              </div>
            </div>
          </div>
          
          <div className="aspect-video w-full bg-primary/5 border border-primary/10 overflow-hidden cyber-clip-bl opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3886.8624891113!2d77.6174!3d13.0358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17639f723829%3A0x6b4f7a6021e8473!2sHKBK%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="space-y-8">
          <div>
            <div className="font-code text-primary text-xs tracking-[5px] mb-3 opacity-70 uppercase">// NEURAL LINKS</div>
            <h2 className="font-headline font-bold text-4xl text-white mb-6 uppercase">
              Contact <span className="text-primary">Squad</span>
            </h2>
            <div className="w-20 h-0.5 bg-primary relative after:content-[''] after:absolute after:-right-5 after:-top-[3px] after:w-2 after:h-2 after:border-2 after:border-primary after:rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {contacts.map((name, i) => (
              <div 
                key={name} 
                className={`bg-card/40 border border-primary/10 p-6 cyber-clip transition-all hover:bg-primary/5 hover:border-primary/30 ${
                  i === contacts.length - 1 ? 'col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
                  <div>
                    <div className="font-headline text-sm text-white tracking-widest uppercase">{name}</div>
                    <div className="font-code text-[9px] text-primary/40 tracking-[2px] mt-1">OPERATOR_{i + 1}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 border border-dashed border-primary/20 bg-primary/5 rounded-lg">
            <p className="text-xs text-muted-foreground leading-relaxed italic text-center">
              "Equally distributed mission support. Reach out to any operator for immediate assistance regarding registration or grid access."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
