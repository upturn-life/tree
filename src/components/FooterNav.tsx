import React from 'react';
import { Home, Swords, Hand, Trophy, Target } from 'lucide-react';
import { Page } from '../App';

interface FooterNavProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export default function FooterNav({ currentPage, navigate }: FooterNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'arena', icon: Swords, label: 'Arena' },
    { id: 'tap', icon: Hand, label: 'Tap' },
    { id: 'leaderboard', icon: Trophy, label: 'Rank' },
    { id: 'quests', icon: Target, label: 'Quests' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-default pb-safe z-50">
      <div className="max-w-md mx-auto w-full px-2 h-16 flex items-center justify-around">
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => navigate(id as Page)}
              className={`flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${
                isActive ? 'text-primary' : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-primary/10' : ''}`} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
