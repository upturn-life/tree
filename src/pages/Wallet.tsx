import { ArrowDownToLine, ArrowUpFromLine, History, Wallet as WalletIcon } from 'lucide-react';

export default function Wallet() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        
        <div className="flex items-center gap-2 text-blue-200 font-medium mb-2">
          <WalletIcon className="w-4 h-4" />
          <span>Total Balance</span>
        </div>
        <div className="text-4xl font-black mb-6 tracking-tight">
          450.00 <span className="text-xl text-blue-200 font-medium">TREE</span>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-white text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <ArrowDownToLine className="w-4 h-4" /> Deposit
          </button>
          <button className="flex-1 bg-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/30 transition-colors">
            <ArrowUpFromLine className="w-4 h-4" /> Withdraw
          </button>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-900">Recent Transactions</h2>
          <button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1">
            <History className="w-4 h-4" /> All
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { title: 'Won Prediction', desc: 'BTC > $100k', amount: '+45.50', type: 'positive', time: '2h ago' },
            { title: 'Placed Prediction', desc: 'ETH Flip BTC', amount: '-10.00', type: 'negative', time: '5h ago' },
            { title: 'Daily Reward', desc: 'Login Bonus', amount: '+5.00', type: 'positive', time: '1d ago' },
            { title: 'Deposit', desc: 'From External Wallet', amount: '+100.00', type: 'positive', time: '2d ago' },
          ].map((tx, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900 mb-0.5">{tx.title}</div>
                <div className="text-xs text-gray-500">{tx.desc} • {tx.time}</div>
              </div>
              <div className={`font-bold ${tx.type === 'positive' ? 'text-green-600' : 'text-gray-900'}`}>
                {tx.amount} TREE
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
