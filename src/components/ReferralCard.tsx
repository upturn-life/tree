import React from 'react';
import { Users } from 'lucide-react';

export default function ReferralCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Invite Friends</h3>
          <p className="text-xs text-gray-500 font-medium">Earn XP for every referral</p>
        </div>
      </div>
      <button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
        Invite
      </button>
    </div>
  );
}
