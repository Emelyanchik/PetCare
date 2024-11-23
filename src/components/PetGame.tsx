import React, { useState, useEffect } from 'react';
import { Heart, Paw, Bath, Moon, Cookie, Wifi, Cloud, Star, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';
import PetDisplay from './PetDisplay';
import ActionButtons from './ActionButtons';
import RewardSystem from './RewardSystem';

export default function PetGame() {
  const [stats, setStats] = useState({
    happiness: 70,
    energy: 80,
    health: 90,
    coins: 486,
    hearts: 227,
    level: 1,
    xp: 0
  });

  const [showReward, setShowReward] = useState(false);
  const [lastAction, setLastAction] = useState('');

  const handleAction = (action: string) => {
    setLastAction(action);
    let reward = 0;

    switch (action) {
      case 'feed':
        setStats(prev => ({
          ...prev,
          health: Math.min(100, prev.health + 10),
          energy: Math.min(100, prev.energy + 15),
          coins: prev.coins + 5
        }));
        reward = 5;
        break;
      case 'play':
        setStats(prev => ({
          ...prev,
          happiness: Math.min(100, prev.happiness + 15),
          energy: Math.max(0, prev.energy - 10),
          coins: prev.coins + 10
        }));
        reward = 10;
        break;
      case 'wash':
        setStats(prev => ({
          ...prev,
          health: Math.min(100, prev.health + 20),
          happiness: Math.min(100, prev.happiness + 5),
          coins: prev.coins + 8
        }));
        reward = 8;
        break;
      case 'sleep':
        setStats(prev => ({
          ...prev,
          energy: 100,
          health: Math.min(100, prev.health + 10),
          coins: prev.coins + 15
        }));
        reward = 15;
        break;
    }

    if (reward > 0) {
      setShowReward(true);
      setTimeout(() => setShowReward(false), 1500);
    }

    // Add XP and check for level up
    setStats(prev => {
      const newXp = prev.xp + reward;
      const newLevel = Math.floor(newXp / 100) + 1;
      return {
        ...prev,
        xp: newXp,
        level: newLevel
      };
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        ...prev,
        happiness: Math.max(0, prev.happiness - 0.5),
        energy: Math.max(0, prev.energy - 0.3),
        health: Math.max(0, prev.health - 0.2)
      }));
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <TopBar stats={stats} />

      <PetDisplay
        stats={stats}
        lastAction={lastAction}
        onAction={handleAction}
      />

      <ActionButtons onAction={handleAction} />

      <AnimatePresence>
        {showReward && <RewardSystem action={lastAction} />}
      </AnimatePresence>
    </div>
  );
}