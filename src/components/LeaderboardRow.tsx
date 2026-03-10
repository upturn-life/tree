import React from 'react';
import { Trophy } from 'lucide-react';

interface LeaderboardRowProps {
  key?: React.Key;
  rank: number;
  username: string;
  xp: string;
  isCurrentUser?: boolean;
}

export default function LeaderboardRow({ rank, username, xp, isCurrentUser }: LeaderboardRowProps) {
  return (
    <div className={`flex items-center p-4 rounded-xl ${isCurrentUser ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-gray-100'}`}>
      <div className="w-8 flex justify-center font-bold text-gray-500">
        {rank === 1 ? <Trophy className="w-5 h-5 text-yellow-500" /> : 
         rank === 2 ? <Trophy className="w-5 h-5 text-gray-400" /> : 
         rank === 3 ? <Trophy className="w-5 h-5 text-amber-600" /> : 
         rank}
      </div>
      
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mx-3 flex-shrink-0"></div>
      
      <div className="flex-1">
        <div className={`font-bold ${isCurrentUser ? 'text-primary' : 'text-gray-900'}`}>
          {username} {isCurrentUser && '(You)'}
        </div>
      </div>
      
      <div className="font-bold text-gray-900">{xp} XP</div>
    </div>
  );
}
