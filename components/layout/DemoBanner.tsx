'use client';

import React from 'react';
import { Lock, Info } from 'lucide-react';

export default function DemoBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary to-primary-400 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 text-sm">
        <Lock className="w-4 h-4" />
        <span className="font-medium">Demo Preview</span>
        <span className="hidden sm:inline text-white/80">—</span>
        <span className="hidden sm:inline text-white/80">Patient data shown is simulated for demonstration purposes</span>
        <div className="hidden md:flex items-center gap-1 ml-2 px-2 py-0.5 bg-white/20 rounded-full">
          <Info className="w-3 h-3" />
          <span className="text-xs">Not for real patient use</span>
        </div>
      </div>
    </div>
  );
}
