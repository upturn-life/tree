import React from 'react';
import { Zap } from 'lucide-react';

export default function MultiplierCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
        <Zap className="w-4 h-4 text-primary fill-primary" />
      </div>
      <div>
        <div className="text-[12px] text-gray-500 font-medium uppercase tracking-wider mb-0.5">Multiplier</div>
        <div className="font-sora font-bold text-gray-900 text-[20px] leading-none">1.8x</div>
      </div>
    </div>
  );
}
