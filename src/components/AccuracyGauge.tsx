import React from 'react';
import { Target } from 'lucide-react';

export default function AccuracyGauge() {
  const percentage = 74;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 text-gray-500 font-medium mb-4 w-full">
        <Target className="w-4 h-4 text-primary" />
        <h3 className="text-sm">Prediction Accuracy</h3>
      </div>
      
      <div className="relative flex items-center justify-center">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-100"
          />
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-primary transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-gray-900">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
