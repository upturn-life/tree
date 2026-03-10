import React from 'react';
import { Page } from '../App';
import MarketCard from '../components/MarketCard';
import CategoryFilters from '../components/CategoryFilters';
import { Search, Filter } from 'lucide-react';

interface ArenaProps {
  navigate: (page: Page, id?: string) => void;
}

export default function Arena({ navigate }: ArenaProps) {
  const markets = [
    { id: 'm1', q: 'Will Bitcoin hit $100k before April?', y: 62, n: 38, v: '1.2M', p: 4520, t: '12h 45m' },
    { id: 'm2', q: 'Will Telegram launch a new token this year?', y: 24, n: 76, v: '450K', p: 1205, t: '3d 12h' },
    { id: 'm3', q: 'Will ETH flip BTC in market cap in 2026?', y: 12, n: 88, v: '2.1M', p: 8900, t: '1y 2m' },
    { id: 'm4', q: 'Will AI agents be regulated in the EU by Q3?', y: 75, n: 25, v: '890K', p: 3400, t: '4m 12d' },
  ];

  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search markets..." 
            className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
        <button className="bg-white border border-gray-200 rounded-xl p-2.5 text-gray-600 hover:bg-gray-50">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <CategoryFilters />

      <div className="block">
        {markets.map(m => (
          <MarketCard 
            key={m.id} id={m.id} question={m.q} yesPercent={m.y} noPercent={m.n} 
            volume={m.v} players={m.p} timeLeft={m.t} navigate={navigate}
          />
        ))}
      </div>
    </div>
  );
}
