import React, { useState, useEffect } from 'react';
import { Heart, Bone, Cookie, Battery, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import PetDisplay from './PetDisplay';
import { usePetStore } from '../store/petStore';

interface PetStats {
  happiness: number;
  energy: number;
  health: number;
  exp: number;
  level: number;
}

export default function TapGame() {
  const [stats, setStats] = useState<PetStats>({
    happiness: 50,
    energy: 100,
    health: 75,
    exp: 0,
    level: 1
  });
  
  const [tapCount, setTapCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lastTapTime, setLastTapTime] = useState(Date.now());
  const [treats, setTreats] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { season } = usePetStore();

  const handleTap = () => {
    const now = Date.now();
    const timeDiff = now - lastTapTime;
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    if (timeDiff < 1000) {
      setCombo(prev => prev + 1);
    } else {
      setCombo(0);
    }
    
    setLastTapTime(now);
    setTapCount(prev => prev + 1);
    
    // Season bonuses
    const seasonMultipliers = {
      spring: 1.2,
      summer: 1.5,
      autumn: 1.3,
      winter: 1.1
    };
    
    const seasonBonus = seasonMultipliers[season];
    const bonus = Math.min(combo * 0.2, 2) * seasonBonus;
    const happinessGain = 1 + bonus;
    const expGain = Math.ceil(happinessGain);
    
    setStats(prev => ({
      ...prev,
      happiness: Math.min(100, prev.happiness + happinessGain),
      energy: Math.max(0, prev.energy - 0.5),
      exp: prev.exp + expGain,
      level: Math.floor(prev.exp / 100) + 1
    }));
    
    if (combo > 0 && combo % 10 === 0) {
      setTreats(prev => prev + 1);
    }
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'feed':
        setStats(prev => ({
          ...prev,
          health: Math.min(100, prev.health + 10),
          energy: Math.min(100, prev.energy + 20)
        }));
        break;
      case 'play':
        handleTap();
        break;
      case 'clean':
        setStats(prev => ({
          ...prev,
          health: Math.min(100, prev.health + 15)
        }));
        break;
      case 'sleep':
        setStats(prev => ({
          ...prev,
          energy: 100,
          health: Math.min(100, prev.health + 5)
        }));
        break;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        ...prev,
        happiness: Math.max(0, prev.happiness - 0.1),
        energy: Math.min(100, prev.energy + 0.2)
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Level Display */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg p-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="font-bold">Level {stats.level}</span>
          </div>
          <span className="text-sm text-gray-600">
            EXP: {stats.exp % 100}/100
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-yellow-400"
            initial={{ width: 0 }}
            animate={{ width: `${stats.exp % 100}%` }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      </motion.div>

      {/* Stats Display */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <StatDisplay
            icon={<Heart className="w-6 h-6 text-pink-500" />}
            label="Happiness"
            value={stats.happiness}
            color="pink"
          />
          <StatDisplay
            icon={<Battery className="w-6 h-6 text-yellow-500" />}
            label="Energy"
            value={stats.energy}
            color="yellow"
          />
          <StatDisplay
            icon={<Heart className="w-6 h-6 text-green-500" />}
            label="Health"
            value={stats.health}
            color="green"
          />
          <StatDisplay
            icon={<Bone className="w-6 h-6 text-purple-500" />}
            label="Treats"
            value={treats}
            color="purple"
            isCount
          />
        </div>
        
        {combo > 0 && (
          <motion.div 
            className="text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <span className="text-lg font-bold text-purple-600">
              {combo}x Combo!
            </span>
          </motion.div>
        )}
      </div>

      {/* Pet Display */}
      <div onClick={handleTap}>
        <PetDisplay
          happiness={stats.happiness}
          onAction={handleAction}
          isAnimating={isAnimating}
        />
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <motion.button 
          className="btn btn-primary py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (treats > 0) {
              setTreats(prev => prev - 1);
              setStats(prev => ({
                ...prev,
                happiness: 100,
                energy: 100,
                health: 100
              }));
            }
          }}
          disabled={treats === 0}
        >
          Use Treat (Full Restore)
        </motion.button>
        <motion.button 
          className="btn btn-secondary py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop
        </motion.button>
      </div>
    </div>
  );
}

interface StatDisplayProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
  isCount?: boolean;
}

function StatDisplay({ icon, label, value, color, isCount = false }: StatDisplayProps) {
  return (
    <div className="text-center">
      <motion.div 
        className="flex justify-center mb-1"
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <div className="text-sm text-gray-600 mb-1">{label}</div>
      {isCount ? (
        <motion.div 
          className="font-bold text-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          key={value}
        >
          {value}
        </motion.div>
      ) : (
        <div className={`h-2 bg-gray-200 rounded-full overflow-hidden`}>
          <motion.div 
            className={`h-full bg-${color}-500`}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>
      )}
    </div>
  );
}