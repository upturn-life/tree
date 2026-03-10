import React from 'react';
import { Trophy, CheckCircle2, UserPlus } from 'lucide-react';

export default function LiveActivityFeed() {
  const activities = [
    {
      id: 1,
      icon: <Trophy className="w-4 h-4 text-yellow-500" />,
      user: 'CryptoKing',
      action: 'won 850 XP on BTC',
      time: 'Just now'
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-4 h-4 text-green-500" />,
      user: 'WhaleWatcher',
      action: 'predicted ETH correctly',
      time: '2m ago'
    },
    {
      id: 3,
      icon: <UserPlus className="w-4 h-4 text-blue-500" />,
      user: 'AlphaSeeker',
      action: 'joined the arena',
      time: '5m ago'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <h3 className="text-sm font-bold text-gray-900 mb-4">Live Arena Activity</h3>
      <div className="flex flex-col gap-3 max-h-40 overflow-y-auto scrollbar-hide">
        {activities.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="mt-0.5 bg-gray-50 p-1.5 rounded-full">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-bold">{item.user}</span> {item.action}
              </p>
              <p className="text-xs text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
