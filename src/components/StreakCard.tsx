import React from 'react';
import { Flame } from 'lucide-react';

export default function StreakCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
        <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
      </div>
      <div>
        <div className="text-[12px] text-gray-500 font-medium uppercase tracking-wider mb-0.5">Streak</div>
        <div className="font-sora font-bold text-gray-900 text-[20px] leading-none">5x</div>
      </div>
    </div>
  );
}
