
"use client"

import React, { useState, useEffect } from 'react';

export const HudOverlay = () => {
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const e = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(e / 3600);
      const m = Math.floor((e % 3600) / 60);
      const s = e % 60;
      setUptime(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hudClasses = "fixed pointer-events-none z-10 font-code text-[10px] text-cyan opacity-50 leading-relaxed uppercase";

  return (
    <>
      <div className={`${hudClasses} top-4 left-4`}>
        SYS_STATUS: ONLINE<br />
        NEURAL_LINK: ACTIVE<br />
        UPTIME: <span>{uptime}</span>
      </div>
      <div className={`${hudClasses} top-4 right-4 text-right`}>
        LAT: 12.9716° N<br />
        LNG: 77.5946° E<br />
        SECTOR: BENGALURU
      </div>
      <div className={`${hudClasses} bottom-4 left-4`}>
        SIGNAL: ████████░░ 82%<br />
        FIREWALL: ENABLED
      </div>
      <div className={`${hudClasses} bottom-4 right-4 text-right`}>
        NEXORA v2.0.4<br />
        BUILD: 240207-ALPHA
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-10 h-[2px] overflow-hidden">
        <div className="h-full w-[30%] bg-gradient-to-r from-transparent via-cyan to-blue-500 animate-scan-bar" />
      </div>
    </>
  );
};
