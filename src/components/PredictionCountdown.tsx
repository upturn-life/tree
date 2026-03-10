import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function PredictionCountdown() {
  const [timeLeft, setTimeLeft] = useState(138); // 02:18 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center shadow-sm">
      <div className="flex items-center justify-center gap-2 text-primary font-medium mb-2">
        <Clock className="w-4 h-4" />
        <h3 className="text-sm">Next Prediction Round</h3>
      </div>
      <div className="text-4xl font-black text-gray-900 mb-1 tracking-tight">
        {mins}:{secs}
      </div>
      <p className="text-xs text-gray-500 font-medium">New markets opening soon</p>
    </div>
  );
}
