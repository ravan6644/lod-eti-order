import React from 'react';
import { Star, Gift, Trophy, ArrowRight, History, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';

const Loyalty: React.FC = () => {
  const points = 850;
  const nextTierPoints = 1000;
  const progress = (points / nextTierPoints) * 100;

  const rewards = [
    { name: 'Free Chapman Drink', cost: 500, icon: '🍹' },
    { name: '50% Off Next Order', cost: 1500, icon: '🎟️' },
    { name: 'Free Main Dish', cost: 2500, icon: '🍛' },
  ];

  const history = [
    { action: 'Order #LOD-8291', points: '+150', date: 'Oct 24, 2023' },
    { action: 'Redeemed: Meat Pie', points: '-200', date: 'Oct 15, 2023' },
    { action: 'Order #LOD-8102', points: '+120', date: 'Oct 10, 2023' },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-serif font-bold text-amber-900 mb-2">LOD Rewards</h1>
        <p className="text-gray-600">Earn points on every bite. Redeem for delicious surprises.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Points Status */}
          <Card className="border-none bg-gradient-to-br from-amber-900 to-amber-700 text-white overflow-hidden shadow-xl">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-amber-200/80 font-medium uppercase tracking-wider text-sm mb-1">Available Points</p>
                  <h2 className="text-6xl font-serif font-bold">{points}</h2>
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Star className="w-8 h-8 text-amber-400 fill-current" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold">Bronze Tier</span>
                  <span className="text-amber-200">150 pts to Silver</span>
                </div>
                <Progress value={progress} className="h-3 bg-white/10" />
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-amber-200/50">
                  <span>0 pts</span>
                  <span>1000 pts</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Grid */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-amber-900 flex items-center">
                <Gift className="w-5 h-5 mr-2 text-amber-600" />
                Available Rewards
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {rewards.map((reward, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="text-4xl mb-4">{reward.icon}</div>
                  <h4 className="font-bold text-amber-900 mb-1">{reward.name}</h4>
                  <p className="text-amber-600 font-bold text-sm">{reward.cost} pts</p>
                  <Button 
                    className={`w-full mt-4 h-9 text-xs font-bold rounded-lg ${
                      points >= reward.cost ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={points < reward.cost}
                  >
                    Redeem
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Tier Info */}
          <Card className="border-amber-100 bg-white">
            <CardContent className="p-6">
              <h3 className="font-bold text-amber-900 mb-6 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-amber-600" />
                Tier Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-amber-900">Silver Member</p>
                    <p className="text-xs text-gray-500">Earn points 1.2x faster + Free delivery on Sundays.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center mr-3 flex-shrink-0 opacity-50">
                    <Award className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400">Gold Member</p>
                    <p className="text-xs text-gray-400">Earn points 1.5x faster + Dedicated VIP hotline.</p>
                  </div>
                </div>
              </div>
              <Button variant="link" className="w-full mt-6 text-amber-600 font-bold p-0 flex items-center justify-center">
                All Benefits <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Point History */}
          <Card className="border-amber-100 bg-amber-50/30">
            <CardContent className="p-6">
              <h3 className="font-bold text-amber-900 mb-6 flex items-center">
                <History className="w-5 h-5 mr-2 text-amber-600" />
                Point History
              </h3>
              <div className="space-y-4">
                {history.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-amber-900">{item.action}</p>
                      <p className="text-[10px] text-gray-400">{item.date}</p>
                    </div>
                    <span className={`font-bold text-sm ${item.points.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.points}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;