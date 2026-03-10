import { useState } from 'react';
import LeaderboardRow from '../components/LeaderboardRow';

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<'global' | 'weekly' | 'friends'>('global');

  const tabs = [
    { id: 'global', label: 'Global' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'friends', label: 'Friends' },
  ] as const;

  const data = [
    { rank: 1, username: 'CryptoKing', xp: '2.4M' },
    { rank: 2, username: 'PredictionPro', xp: '1.8M' },
    { rank: 3, username: 'WhaleWatcher', xp: '1.5M' },
    { rank: 4, username: 'AlphaSeeker', xp: '950K' },
    { rank: 5, username: 'TreeHugger', xp: '820K' },
    { rank: 42, username: 'You', xp: '12.4K', isCurrentUser: true },
  ];

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300">
      <div className="bg-gray-100 p-1 rounded-xl flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 text-center mb-2 shadow-sm">
        <h3 className="text-gray-500 font-medium text-sm mb-1">Your Rank</h3>
        <div className="text-4xl font-black text-gray-900 mb-1">#42</div>
        <div className="text-primary font-medium text-sm">Top 5% of players</div>
      </div>

      <div className="flex flex-col gap-2">
        {data.map(user => (
          <LeaderboardRow 
            key={user.rank}
            rank={user.rank}
            username={user.username}
            xp={user.xp}
            isCurrentUser={user.isCurrentUser}
          />
        ))}
      </div>
    </div>
  );
}
