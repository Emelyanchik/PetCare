import React from 'react';
import { motion } from 'framer-motion';
import { usePetStore } from '../store/petStore';
import type { Season } from '../types';
import { Cloud, Sun, Leaf, Snowflake } from 'lucide-react';

const seasonConfig = {
  spring: {
    icon: Cloud,
    color: 'text-blue-500',
    bg: 'from-green-100 to-blue-100'
  },
  summer: {
    icon: Sun,
    color: 'text-yellow-500',
    bg: 'from-yellow-100 to-orange-100'
  },
  autumn: {
    icon: Leaf,
    color: 'text-orange-500',
    bg: 'from-orange-100 to-red-100'
  },
  winter: {
    icon: Snowflake,
    color: 'text-blue-400',
    bg: 'from-blue-100 to-purple-100'
  }
};

export default function SeasonalEvents() {
  const { season, setSeason } = usePetStore();
  const currentConfig = seasonConfig[season];
  const SeasonIcon = currentConfig.icon;

  return (
    <div className={`p-6 rounded-xl bg-gradient-to-r ${currentConfig.bg}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Seasonal Event</h2>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 15 }}
          className={`${currentConfig.color}`}
        >
          <SeasonIcon size={24} />
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
          <h3 className="font-semibold mb-2">Current Season: {season}</h3>
          <p className="text-sm text-gray-600">
            Special seasonal bonuses and events are available!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {Object.entries(seasonConfig).map(([seasonName, config]) => {
            const Icon = config.icon;
            return (
              <motion.button
                key={seasonName}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-lg flex items-center justify-center gap-2 ${
                  season === seasonName
                    ? 'bg-white shadow-md'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setSeason(seasonName as Season)}
              >
                <Icon className={seasonConfig[seasonName as Season].color} size={16} />
                <span className="capitalize">{seasonName}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}