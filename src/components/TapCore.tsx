import React, { useState } from 'react';
import { Flame } from 'lucide-react';
import FloatingReward from './FloatingReward';

interface TapCoreProps {
  onTap: (e: React.MouseEvent<HTMLButtonElement>) => void;
  clicks: { id: number; x: number; y: number; text: string }[];
}

export default function TapCore({ onTap, clicks }: TapCoreProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    onTap(e);
  };

  const handlePointerUp = () => {
    setIsPressed(false);
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] mx-auto">
      {/* Outer glow ring */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl animate-pulse pointer-events-none"></div>
      
      {/* Orbit ring */}
      <div className="absolute w-80 h-80 rounded-full border border-blue-200/50 animate-[spin_10s_linear_infinite] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
      </div>

      {/* Main button */}
      <button
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={`relative w-64 h-64 rounded-full flex items-center justify-center transition-transform duration-100 ease-out overflow-hidden ${
          isPressed ? 'scale-95' : 'scale-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
          boxShadow: isPressed 
            ? 'inset 0 10px 20px rgba(0,0,0,0.3), 0 0 0 rgba(37,99,235,0)' 
            : 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -4px 10px rgba(0,0,0,0.2), 0 20px 40px rgba(37,99,235,0.4)',
        }}
      >
        {/* Inner metallic ring */}
        <div className="absolute inset-2 rounded-full border border-white/20 pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)'
        }}></div>
        
        {/* Center symbol */}
        <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
          <Flame className="w-20 h-20 text-white fill-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" />
        </div>

        {/* Ripple effect */}
        {clicks.map((click) => (
          <div
            key={`ripple-${click.id}`}
            className="absolute rounded-full bg-white/30 animate-[ping_0.5s_ease-out_forwards] pointer-events-none"
            style={{
              left: click.x - 20,
              top: click.y - 20,
              width: 40,
              height: 40,
            }}
          />
        ))}

        {/* Floating rewards */}
        {clicks.map((click) => (
          <FloatingReward key={click.id} x={click.x} y={click.y} text={click.text} />
        ))}
      </button>
    </div>
  );
}
