import React from 'react';
import { GamepadIcon, Trophy, Gift, Rocket } from 'lucide-react';

const features = [
  {
    icon: <GamepadIcon className="h-6 w-6" />,
    title: "Interactive Gameplay",
    description: "Engage with your pets through various mini-games and activities that affect their growth and happiness."
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Daily Missions",
    description: "Complete challenges to earn PET tokens and unlock special rewards for your virtual companions."
  },
  {
    icon: <Gift className="h-6 w-6" />,
    title: "Unique Rewards",
    description: "Earn exclusive accessories and rare pets through our innovative reward system."
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Level Up System",
    description: "Watch your pets grow and evolve as you progress through different stages of care."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Discover Amazing Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of virtual pet care with our innovative features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <div className="text-purple-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}