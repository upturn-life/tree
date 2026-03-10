import QuestCard from '../components/QuestCard';
import { Send, Twitter, Users, Calendar } from 'lucide-react';

export default function Quests() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Quests</h1>
        <p className="text-gray-500 text-sm">Complete tasks to earn XP and level up your profile.</p>
      </div>

      <section>
        <h2 className="font-bold text-gray-900 mb-3">Daily Tasks</h2>
        <div className="flex flex-col gap-3">
          <QuestCard 
            title="Daily Login" 
            reward="500" 
            icon={<Calendar className="w-6 h-6" />} 
          />
          <QuestCard 
            title="Make 1 Prediction" 
            reward="1,000" 
            icon={<Users className="w-6 h-6" />} 
            completed 
          />
        </div>
      </section>

      <section>
        <h2 className="font-bold text-gray-900 mb-3">Social Tasks</h2>
        <div className="flex flex-col gap-3">
          <QuestCard 
            title="Join Telegram Channel" 
            reward="5,000" 
            icon={<Send className="w-6 h-6" />} 
          />
          <QuestCard 
            title="Follow on Twitter" 
            reward="5,000" 
            icon={<Twitter className="w-6 h-6" />} 
          />
          <QuestCard 
            title="Invite 3 Friends" 
            reward="15,000" 
            icon={<Users className="w-6 h-6" />} 
          />
        </div>
      </section>
    </div>
  );
}
