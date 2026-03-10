import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ShibRewardCard() {
  return (
    <div className="w-full max-w-[420px] mx-auto bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
      {/* Subtle background token texture */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-center gap-2 mb-3 relative z-10">
        <Sparkles className="w-4 h-4 text-orange-500" />
        <h3 className="font-sora text-sm font-bold text-gray-900 uppercase tracking-widest">
          Projected SHIB Drop
        </h3>
      </div>
      
      <div className="flex items-end gap-2 mb-2 relative z-10">
        <div className="font-sora text-4xl font-black text-primary tracking-tight">
          320
        </div>
        <div className="font-sora text-xl font-bold text-gray-400 mb-1">SHIB</div>
      </div>
      
      <p className="text-sm text-gray-500 font-medium relative z-10">
        Keep tapping to increase your rewards
      </p>
    </div>
  );
}
