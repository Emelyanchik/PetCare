import React from 'react';
import { Heart, Paw, Bath, Moon, Cookie, Wifi, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActionButtonsProps {
  onAction: (action: string) => void;
}

export default function ActionButtons({ onAction }: ActionButtonsProps) {
  return (
    <>
      {/* Side Action Buttons */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 space-y-4">
        <ActionButton icon={<Cookie />} label="Feed" onClick={() => onAction('feed')} />
        <ActionButton icon={<Heart />} label="Love" onClick={() => onAction('love')} />
        <ActionButton icon={<Wifi />} label="Connect" onClick={() => onAction('connect')} />
        <ActionButton icon={<Star />} label="Train" onClick={() => onAction('train')} />
      </div>

      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 space-y-4">
        <ActionButton icon={<Star />} label="Play" onClick={() => onAction('play')} />
        <ActionButton icon={<Bath />} label="Wash" onClick={() => onAction('wash')} />
        <ActionButton icon={<Paw />} label="Walk" onClick={() => onAction('walk')} />
        <ActionButton icon={<Moon />} label="Sleep" onClick={() => onAction('sleep')} />
      </div>

      {/* Bottom Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <GradientButton text="Shop" startColor="from-blue-400" endColor="to-blue-500" />
        <GradientButton text="Inventory" startColor="from-pink-400" endColor="to-pink-500" />
      </div>
    </>
  );
}

function ActionButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <motion.button
      className="group relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
        <div className="text-gray-600">
          {icon}
        </div>
      </div>
      <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-600">
        {label}
      </span>
    </motion.button>
  );
}

function GradientButton({ text, startColor, endColor }: { text: string; startColor: string; endColor: string }) {
  return (
    <motion.button
      className={`bg-gradient-to-r ${startColor} ${endColor} text-white rounded-full py-3 font-bold shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
}