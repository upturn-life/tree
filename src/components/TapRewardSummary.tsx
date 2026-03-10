import React from 'react';

interface TapRewardSummaryProps {
  xp: number;
}

export default function TapRewardSummary({ xp }: TapRewardSummaryProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="font-sora text-gray-500 font-medium text-sm mb-1 uppercase tracking-widest">
        Reward Engine
      </h2>
      <div className="font-sora text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
        {xp.toLocaleString()} <span className="text-2xl text-primary">XP</span>
      </div>
      <p className="text-gray-500 text-sm font-medium">
        Convert your activity into SHIB rewards
      </p>
    </div>
  );
}
