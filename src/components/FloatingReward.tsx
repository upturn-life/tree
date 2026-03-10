import React, { useEffect, useState } from 'react';

interface FloatingRewardProps {
  key?: React.Key;
  x: number;
  y: number;
  text: string;
}

export default function FloatingReward({ x, y, text }: FloatingRewardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isCritical = text === 'CRITICAL TAP';

  return (
    <div
      className={`absolute font-sora font-extrabold pointer-events-none transition-[transform,opacity] duration-1000 ease-out whitespace-nowrap ${
        mounted ? 'opacity-0 -translate-y-16 scale-110' : 'opacity-100 translate-y-0 scale-100'
      } ${isCritical ? 'text-orange-400 text-3xl' : 'text-white text-2xl'}`}
      style={{
        left: x - 15,
        top: y - 20,
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      }}
    >
      {text}
    </div>
  );
}
