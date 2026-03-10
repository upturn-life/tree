import React from 'react';
import { Zap } from 'lucide-react';

interface EnergyCardProps {
  energy: number;
  maxEnergy: number;
}

export default function EnergyCard({ energy, maxEnergy }: EnergyCardProps) {
  const percentage = (energy / maxEnergy) * 100;

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-yellow-600 fill-yellow-600" />
          </div>
          <span className="font-sora font-semibold text-gray-900 text-sm">Energy</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-sora font-bold text-gray-900 text-sm tracking-tight">
            {energy} <span className="text-gray-400 font-medium">/ {maxEnergy}</span>
          </span>
          <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
            Recharges automatically
          </span>
        </div>
      </div>
      
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden relative mt-2">
        <div
          className="bg-primary h-full transition-all duration-300 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          {/* Subtle shimmer effect */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
