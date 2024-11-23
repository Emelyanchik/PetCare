import React from 'react';
import { Heart, Coins, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to the Future of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Virtual Pet Care
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the revolution of digital pet ownership. Care for, collect, and trade unique virtual pets while earning rewards.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg">
            Start Your Journey
          </button>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-50 transition">
            Explore Marketplace
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Virtual Pet Care</h3>
            <p className="text-gray-600">Feed, play, and nurture your digital companions</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coins className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">NFT Marketplace</h3>
            <p className="text-gray-600">Trade unique pets and earn PET tokens</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Connect with fellow pet enthusiasts</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-64 transform -translate-y-1/2">
        <div className="w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute top-1/4 -left-64">
        <div className="w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
}