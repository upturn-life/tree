import { User, Settings, Trophy, Target, Users } from 'lucide-react';

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm text-center relative overflow-hidden">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-white shadow-sm">
          <User className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-1">@alex_crypto</h1>
        <div className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-6">
          Level 12
        </div>

        <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
          <div className="bg-primary rounded-full h-2" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 font-medium">
          <span>12,450 XP</span>
          <span>15,000 XP</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-sm text-gray-500 font-medium">Win Rate</div>
          <div className="text-xl font-bold text-gray-900">68%</div>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
            <Trophy className="w-4 h-4" />
          </div>
          <div className="text-sm text-gray-500 font-medium">Predictions</div>
          <div className="text-xl font-bold text-gray-900">142</div>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2 col-span-2">
          <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
            <Users className="w-4 h-4" />
          </div>
          <div className="text-sm text-gray-500 font-medium">Referrals</div>
          <div className="flex justify-between items-end">
            <div className="text-xl font-bold text-gray-900">12 Friends</div>
            <button className="text-sm font-bold text-primary">Invite More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
