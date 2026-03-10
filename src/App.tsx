import React, { useState } from 'react';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import Home from './pages/Home';
import Arena from './pages/Arena';
import MarketDetail from './pages/MarketDetail';
import Tap from './pages/Tap';
import Leaderboard from './pages/Leaderboard';
import Quests from './pages/Quests';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';

export type Page = 'home' | 'arena' | 'market_detail' | 'tap' | 'leaderboard' | 'quests' | 'profile' | 'wallet';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedMarketId, setSelectedMarketId] = useState<string | null>(null);

  const navigate = (page: Page, marketId?: string) => {
    setCurrentPage(page);
    if (marketId) setSelectedMarketId(marketId);
  };

  return (
    <div className="min-h-screen bg-bg-app text-text-primary font-sans pb-20 pt-16">
      <Header navigate={navigate} />
      
      <main className="max-w-md mx-auto w-full p-4">
        {currentPage === 'home' && <Home navigate={navigate} />}
        {currentPage === 'arena' && <Arena navigate={navigate} />}
        {currentPage === 'market_detail' && <MarketDetail navigate={navigate} marketId={selectedMarketId} />}
        {currentPage === 'tap' && <Tap />}
        {currentPage === 'leaderboard' && <Leaderboard />}
        {currentPage === 'quests' && <Quests />}
        {currentPage === 'profile' && <Profile />}
        {currentPage === 'wallet' && <Wallet />}
      </main>

      <FooterNav currentPage={currentPage} navigate={navigate} />
    </div>
  );
}
