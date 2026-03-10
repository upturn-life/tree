import React from 'react';

interface StatsCardProps {
  value: string | number;
  label: string;
}

function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 text-center shadow-sm">
      <div className="text-xl font-black text-gray-900 mb-1">{value}</div>
      <div className="text-xs font-medium text-gray-500">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section>
      <h2 className="font-bold text-gray-900 mb-3">Prediction Stats</h2>
      <div className="grid grid-cols-2 gap-3">
        <StatsCard value="125" label="Won Bets" />
        <StatsCard value="74%" label="Accuracy" />
        <StatsCard value="230" label="Predictions" />
        <StatsCard value="12.4K" label="XP Earned" />
      </div>
    </section>
  );
}
