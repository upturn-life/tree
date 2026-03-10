import React, { useState } from 'react';
import TapCore from '../components/TapCore';
import EnergyCard from '../components/EnergyCard';
import StreakCard from '../components/StreakCard';
import MultiplierCard from '../components/MultiplierCard';
import ShibRewardCard from '../components/ShibRewardCard';

export default function Tap() {
  const [xp, setXp] = useState(12994);
  const [energy, setEnergy] = useState(650);
  const [clicks, setClicks] = useState<{id: number, x: number, y: number, text: string}[]>([]);
  const maxEnergy = 1000;

  const handleTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (energy <= 0) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const isCritical = Math.random() > 0.9;
    const text = isCritical ? 'CRITICAL TAP' : '+8 SHIB';
    const xpGain = isCritical ? 24 : 8;

    const newClick = { id: Date.now() + Math.random(), x, y, text };
    setClicks(prev => [...prev, newClick]);
    
    setXp(prev => {
      const newXp = prev + xpGain;
      window.dispatchEvent(new CustomEvent('updateBalance', { detail: newXp }));
      return newXp;
    });
    
    setEnergy(prev => prev - 1);

    setTimeout(() => {
      setClicks(prev => prev.filter(c => c.id !== newClick.id));
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-[75vh] animate-in fade-in duration-300 px-4">
      {/* Balance Section */}
      <div className="w-full max-w-[420px] mx-auto flex justify-end">
        <div className="font-sora text-[14px] font-semibold text-[#111827] mt-[12px] mr-[16px]">
          {xp.toLocaleString()} SHIB
        </div>
      </div>
      
      {/* Tap Core */}
      <div className="mt-6 mb-6">
        <TapCore onTap={handleTap} clicks={clicks} />
      </div>
      
      {/* Cards Section */}
      <div className="w-full max-w-[420px] mx-auto flex flex-col">
        <div className="mt-5">
          <EnergyCard energy={energy} maxEnergy={maxEnergy} />
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-3 w-full">
          <StreakCard />
          <MultiplierCard />
        </div>
        
        <div className="mt-4">
          <ShibRewardCard />
        </div>
      </div>
    </div>
  );
}
