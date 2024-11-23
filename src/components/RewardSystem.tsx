import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Star } from 'lucide-react';

interface RewardSystemProps {
  action: string;
}

export default function RewardSystem({ action }: RewardSystemProps) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <Star className="w-5 h-5 text-yellow-500" />
        <span className="font-bold text-gray-800">+10 XP</span>
        <Coins className="w-5 h-5 text-amber-500" />
        <span className="font-bold text-gray-800">+5</span>
      </div>

      <motion.div
        className="absolute -top-8 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -20, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-lg font-bold text-purple-600">
          {action === 'feed' && '🍪 Yummy!'}
          {action === 'play' && '🎮 Fun time!'}
          {action === 'wash' && '🛁 So fresh!'}
          {action === 'sleep' && '😴 Sweet dreams!'}
        </span>
      </motion.div>
    </motion.div>
  );
}