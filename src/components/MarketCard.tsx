import React from 'react';
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
      className="bg-[#FFFFFF] rounded-[14px] p-[14px] shadow-sm border border-gray-100 cursor-pointer hover:border-primary/30 transition-colors mb-[12px]"
    >
      <h3 className="font-sora text-[16px] font-semibold leading-[1.3] text-[#111827] line-clamp-2 mb-3">
        {question}
      </h3>
      
      <div className="flex gap-2 mb-3">
        <button className="flex-1 bg-[#E8F7EF] text-[#16A34A] font-sora font-semibold text-[15px] p-[10px] rounded-[10px] flex justify-between items-center hover:scale-[0.97] active:scale-[0.97] transition-transform duration-150 ease-out">
          <span>YES</span>
          <span>{yesPercent}%</span>
        </button>
        <button className="flex-1 bg-[#FCEAEA] text-[#DC2626] font-sora font-semibold text-[15px] p-[10px] rounded-[10px] flex justify-between items-center hover:scale-[0.97] active:scale-[0.97] transition-transform duration-150 ease-out">
          <span>NO</span>
          <span>{noPercent}%</span>
        </button>
      </div>

      <div className="flex items-center gap-[12px] text-[12px] text-[#6B7280]">
        <div className="flex items-center gap-1">
          <span>📊</span>
          <span>${volume}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>👥</span>
          <span>{players}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>⏱</span>
          <span>{timeLeft}</span>
        </div>
      </div>
    </div>
  );
}
