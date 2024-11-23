import React from 'react';
import { Heart, Star, Cookie, Cloud, Paw, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const topButtons = [
  { icon: <Heart className="w-5 h-5" />, color: 'bg-pink-200', label: 'Love' },
  { icon: <Star className="w-5 h-5" />, color: 'bg-yellow-200', label: 'Star' },
  { icon: <Cookie className="w-5 h-5" />, color: 'bg-amber-200', label: 'Feed' },
  { icon: <Cloud className="w-5 h-5" />, color: 'bg-blue-200', label: 'Weather' },
  { icon: <Gift className="w-5 h-5" />, color: 'bg-purple-200', label: 'Gift' },
  { icon: <Paw className="w-5 h-5" />, color: 'bg-rose-200', label: 'Play' },
];

interface TopBarProps {
  stats: {
    level: number;
    xp: number;
    coins: number;
    hearts: number;
  };
}

export default function TopBar({ stats }: TopBarProps) {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex justify-between items-center px-2">
        <div className="flex gap-2">
          {topButtons.map((button, index) => (
            <motion.button
              key={index}
              className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center ${button.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {button.icon}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-full py-2 px-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <div className="text-sm font-semibold">Level {stats.level}</div>
              <div className="h-1.5 w-20 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-yellow-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${(stats.xp % 100)}%` }}
                  transition={{ type: "spring", stiffness: 120 }}
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Paw className="w-4 h-4 text-rose-500" />
              <span className="font-semibold">{stats.coins}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="font-semibold">{stats.hearts}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}