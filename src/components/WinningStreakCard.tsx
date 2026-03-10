import React from 'react';
import { Flame } from 'lucide-react';

export default function WinningStreakCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center gap-2 text-gray-500 font-medium mb-3">
        <Flame className="w-4 h-4 text-orange-500" />
        <h3 className="text-sm">Winning Streak</h3>
      </div>
      <div className="text-2xl font-black text-gray-900 mb-1">
        5 Wins in a Row
      </div>
      <p className="text-xs text-green-600 font-medium mb-4">
        +320 XP earned today
      </p>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-primary rounded-full h-2" style={{ width: '70%' }}></div>
      </div>
    </div>
  );
}
