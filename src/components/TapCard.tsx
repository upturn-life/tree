import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { Page } from '../App';

interface TapCardProps {
  navigate: (page: Page) => void;
}

export default function TapCard({ navigate }: TapCardProps) {
  return (
    <div 
      onClick={() => navigate('tap')}
      className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white cursor-pointer shadow-sm"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
          <h2 className="font-bold">Tap to Earn</h2>
        </div>
        <ChevronRight className="w-5 h-5 opacity-70" />
      </div>
      <div className="w-full bg-black/20 rounded-full h-2 mb-2">
        <div className="bg-white rounded-full h-2" style={{ width: '65%' }}></div>
      </div>
      <p className="text-xs font-medium text-blue-100">650 / 1000 Energy</p>
    </div>
  );
}
