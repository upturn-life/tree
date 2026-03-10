import React from 'react';
import { TrendingUp, Target } from 'lucide-react';
import { Page } from '../App';

interface HeroBannerProps {
  navigate: (page: Page) => void;
}

export default function HeroBanner({ navigate }: HeroBannerProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-5 text-white shadow-sm relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2 opacity-80">
          <TrendingUp className="w-4 h-4" />
          <Target className="w-4 h-4" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Predict. Compete. Win.</h1>
        <p className="text-blue-100 text-sm mb-4 leading-relaxed">
          Join the 15-minute prediction arena and earn rewards.
        </p>
        <button 
          onClick={() => navigate('arena')}
          className="bg-white text-primary font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors"
        >
          Start Predicting
        </button>
      </div>
    </div>
  );
}
