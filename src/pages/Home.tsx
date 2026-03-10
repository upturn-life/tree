import React from 'react';
import { Page } from '../App';
import HeroBanner from '../components/HeroBanner';
import TapCard from '../components/TapCard';
import DailyBonusCard from '../components/DailyBonusCard';
import ReferralCard from '../components/ReferralCard';
import PredictionCountdown from '../components/PredictionCountdown';
import WinningStreakCard from '../components/WinningStreakCard';
import AccuracyGauge from '../components/AccuracyGauge';
import LiveActivityFeed from '../components/LiveActivityFeed';

interface HomeProps {
  navigate: (page: Page, id?: string) => void;
}

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-300 pb-6">
      <HeroBanner navigate={navigate} />
      <TapCard navigate={navigate} />
      <DailyBonusCard />
      <ReferralCard />
      
      <section className="mt-2 flex flex-col gap-4">
        <h2 className="font-bold text-gray-900">Your Performance</h2>
        <PredictionCountdown />
        <div className="grid grid-cols-2 gap-4">
          <WinningStreakCard />
          <AccuracyGauge />
        </div>
        <LiveActivityFeed />
      </section>
    </div>
  );
}
