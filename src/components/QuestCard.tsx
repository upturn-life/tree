import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface QuestCardProps {
  title: string;
  reward: string;
  completed?: boolean;
  icon: React.ReactNode;
}

export default function QuestCard({ title, reward, completed, icon }: QuestCardProps) {
  return (
    <div className={`flex items-center p-4 rounded-2xl border ${completed ? 'bg-gray-50 border-gray-100 opacity-70' : 'bg-white border-gray-200 shadow-sm'}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${completed ? 'bg-gray-200 text-gray-500' : 'bg-gray-100 text-gray-600'}`}>
        {icon}
      </div>
      
      <div className="flex-1">
        <h4 className={`font-bold mb-1 ${completed ? 'text-gray-500' : 'text-gray-900'}`}>{title}</h4>
        <div className="text-sm font-medium text-primary">+{reward} XP</div>
      </div>

      {completed ? (
        <CheckCircle2 className="w-6 h-6 text-green-600" />
      ) : (
        <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-4 py-2 rounded-full transition-colors">
          Claim
        </button>
      )}
    </div>
  );
}
