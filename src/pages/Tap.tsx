import React, { useState } from 'react';
import { Zap } from 'lucide-react';

export default function Tap() {
  const [xp, setXp] = useState(12450);
  const [energy, setEnergy] = useState(650);
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);

  const handleTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (energy <= 0) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newClick = { id: Date.now() + Math.random(), x, y };
    setClicks(prev => [...prev, newClick]);
    setXp(prev => prev + 5);
    setEnergy(prev => prev - 1);

    setTimeout(() => {
      setClicks(prev => prev.filter(c => c.id !== newClick.id));
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in duration-300">
      <div className="text-center mb-12">
        <h2 className="text-gray-500 font-medium mb-2">Total XP</h2>
        <div className="text-5xl font-black text-gray-900 tracking-tight">{xp.toLocaleString()}</div>
      </div>

      <div className="relative mb-16">
        <button 
          onClick={handleTap}
          className="w-64 h-64 rounded-full bg-gradient-to-b from-blue-500 to-blue-700 shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center active:scale-95 transition-transform duration-100 relative overflow-hidden"
        >
          <div className="absolute inset-2 rounded-full border-4 border-white/20"></div>
          <Zap className="w-24 h-24 text-white fill-white drop-shadow-md" />
          
          {clicks.map(click => (
            <div 
              key={click.id}
              className="absolute text-white font-bold text-2xl animate-out fade-out slide-out-to-top-8 duration-1000 pointer-events-none"
              style={{ left: click.x - 15, top: click.y - 20 }}
            >
              +5
            </div>
          ))}
        </button>
      </div>

      <div className="w-full max-w-xs bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-2 text-sm font-medium">
          <span className="text-gray-500 flex items-center gap-1"><Zap className="w-4 h-4 text-yellow-500 fill-yellow-500"/> Energy</span>
          <span className="text-gray-900">{energy} / 1000</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div 
            className="bg-blue-600 rounded-full h-3 transition-all duration-300" 
            style={{ width: `${(energy / 1000) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
