import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface PetDisplayProps {
  stats: {
    happiness: number;
    energy: number;
    health: number;
  };
  lastAction: string;
  onAction: (action: string) => void;
}

export default function PetDisplay({ stats, lastAction, onAction }: PetDisplayProps) {
  const petVariants = {
    idle: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      }
    },
    happy: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
      }
    },
    sleep: {
      scale: 0.95,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <div className="relative mb-6">
      <motion.div
        className="relative aspect-square"
        variants={petVariants}
        animate={lastAction || 'idle'}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-br from-rose-100 via-white to-teal-100 shadow-xl flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.02 }}
          onClick={() => onAction('play')}
        >
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
            alt="Pet"
            className="w-4/5 h-4/5 object-cover rounded-full"
          />
        </motion.div>

        {/* Mood Indicator */}
        <motion.div
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heart className={`w-4 h-4 ${stats.happiness > 70 ? 'text-pink-500' : 'text-gray-400'}`} />
          <span className="text-sm font-medium">{stats.happiness}%</span>
        </motion.div>

        {/* Status Bars */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 space-y-2">
          <StatusBar label="Energy" value={stats.energy} color="bg-yellow-400" />
          <StatusBar label="Health" value={stats.health} color="bg-green-400" />
        </div>
      </motion.div>
    </div>
  );
}

function StatusBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-full p-1">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium ml-2">{label}</span>
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      </div>
    </div>
  );
}