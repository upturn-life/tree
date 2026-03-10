import React from 'react';
import { Clock, Users, BarChart2 } from 'lucide-react';
import { Page } from '../App';

interface MarketCardProps {
  key?: React.Key;
  id: string;
  question: string;
  yesPercent: number;
  noPercent: number;
  volume: string;
  players: number;
  timeLeft: string;
  navigate: (page: Page, id?: string) => void;
}

export default function MarketCard({ 
  id, question, yesPercent, noPercent, volume, players, timeLeft, navigate 
}: MarketCardProps) {
  return (
    <div 
      onClick={() => navigate('market_detail', id)}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:border-primary/30 transition-colors"
    >
      <h3 className="font-semibold text-gray-900 mb-4 leading-snug">{question}</h3>
      
      <div className="flex gap-2 mb-4">
        <div className="flex-1 bg-green-50 rounded-xl p-3 flex flex-col items-center border border-green-100">
          <span className="text-xs font-medium text-green-600 mb-1">YES</span>
          <span className="text-lg font-bold text-green-700">{yesPercent}%</span>
        </div>
        <div className="flex-1 bg-red-50 rounded-xl p-3 flex flex-col items-center border border-red-100">
          <span className="text-xs font-medium text-red-600 mb-1">NO</span>
          <span className="text-lg font-bold text-red-700">{noPercent}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>${volume}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          <span>{players}</span>
        </div>
        <div className="flex items-center gap-1 text-orange-500 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span>{timeLeft}</span>
        </div>
      </div>
    </div>
  );
}
