import React from 'react';
import { User, Wallet, Trees } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  navigate: (page: Page) => void;
}

export default function Header({ navigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-14">
      <div className="max-w-md mx-auto w-full px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('home')}
        >
          <Trees className="w-[18px] h-[18px] text-primary" />
          <span className="font-semibold text-gray-900 tracking-wide">TREE TRIBE</span>
        </div>
        
        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('profile')}
            className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-blue-100 transition-colors"
          >
            <User className="w-5 h-5" fill="currentColor" />
          </button>
          
          <button 
            onClick={() => navigate('wallet')}
            className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-primary hover:bg-blue-100 transition-colors"
          >
            <Wallet className="w-5 h-5" fill="currentColor" />
          </button>
        </div>
      </div>
    </header>
  );
}
