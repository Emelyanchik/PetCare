import React from 'react';
import { Tag, Heart } from 'lucide-react';

interface MarketplaceCardProps {
  name: string;
  price: string;
  image: string;
  rarity: string;
  likes: number;
}

export default function MarketplaceCard({ name, price, image, rarity, likes }: MarketplaceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
          {rarity}
        </span>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-purple-600">{price} PET</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Heart className="h-4 w-4 text-pink-500" />
            <span className="text-gray-600 text-sm">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}