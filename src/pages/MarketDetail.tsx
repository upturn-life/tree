import { Page } from '../App';
import { ArrowLeft, Clock, Users, BarChart2, Info } from 'lucide-react';
import { useState } from 'react';

interface MarketDetailProps {
  navigate: (page: Page) => void;
  marketId?: string | null;
}

export default function MarketDetail({ navigate, marketId }: MarketDetailProps) {
  const [amount, setAmount] = useState('100');
  const [selectedSide, setSelectedSide] = useState<'yes' | 'no' | null>(null);

  return (
    <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 duration-300">
      <button onClick={() => navigate('arena')} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 w-fit">
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back to Arena</span>
      </button>

      <div>
        <div className="flex items-center gap-2 text-xs font-medium text-primary bg-blue-50 w-fit px-2.5 py-1 rounded-full mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          Active Market
        </div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-4">
          Will Bitcoin hit $100k before April?
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 bg-white p-3 rounded-xl border border-gray-100">
          <div className="flex items-center gap-1.5"><BarChart2 className="w-4 h-4" /> $1.2M Vol</div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 4,520 Players</div>
          <div className="flex items-center gap-1.5 text-orange-500"><Clock className="w-4 h-4" /> 12h 45m</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Make your prediction</h3>
        
        <div className="flex gap-3 mb-6">
          <button 
            onClick={() => setSelectedSide('yes')}
            className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center transition-all ${
              selectedSide === 'yes' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'
            }`}
          >
            <span className={`text-sm font-bold mb-1 ${selectedSide === 'yes' ? 'text-green-700' : 'text-gray-500'}`}>YES</span>
            <span className={`text-2xl font-black ${selectedSide === 'yes' ? 'text-green-600' : 'text-gray-900'}`}>62%</span>
          </button>
          <button 
            onClick={() => setSelectedSide('no')}
            className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center transition-all ${
              selectedSide === 'no' ? 'border-red-600 bg-red-50' : 'border-gray-100 hover:border-red-200'
            }`}
          >
            <span className={`text-sm font-bold mb-1 ${selectedSide === 'no' ? 'text-red-700' : 'text-gray-500'}`}>NO</span>
            <span className={`text-2xl font-black ${selectedSide === 'no' ? 'text-red-600' : 'text-gray-900'}`}>38%</span>
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500 font-medium">Amount (TREE)</span>
            <span className="text-gray-900 font-bold">Balance: 450.00</span>
          </div>
          <div className="relative">
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded-md">
              MAX
            </button>
          </div>
        </div>

        <button 
          disabled={!selectedSide || !amount}
          className="w-full bg-primary text-white font-bold py-4 rounded-xl disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-primary-hover transition-colors"
        >
          {selectedSide ? `Predict ${selectedSide.toUpperCase()}` : 'Select a side'}
        </button>
      </div>

      <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex gap-3 text-sm">
        <Info className="w-5 h-5 shrink-0 text-blue-500" />
        <p>Market resolves to YES if Bitcoin price exceeds $100,000.00 on Binance before April 1, 2026 00:00 UTC.</p>
      </div>
    </div>
  );
}
