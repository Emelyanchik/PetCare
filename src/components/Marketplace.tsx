import React from 'react';
import MarketplaceCard from './MarketplaceCard';

const featuredPets = [
  {
    name: "Cosmic Dragon",
    price: "2,500",
    image: "https://images.unsplash.com/photo-1534322904425-1bced0bae4c1?auto=format&fit=crop&w=800&q=80",
    rarity: "Legendary",
    likes: 284
  },
  {
    name: "Rainbow Unicorn",
    price: "1,800",
    image: "https://images.unsplash.com/photo-1550747528-cdb45925b3f7?auto=format&fit=crop&w=800&q=80",
    rarity: "Epic",
    likes: 167
  },
  {
    name: "Crystal Fox",
    price: "1,200",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80",
    rarity: "Rare",
    likes: 142
  },
  {
    name: "Golden Phoenix",
    price: "2,200",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    rarity: "Legendary",
    likes: 235
  }
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured Pets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover and collect unique virtual pets from our NFT marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPets.map((pet, index) => (
            <MarketplaceCard key={index} {...pet} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary px-8 py-3">
            View All Pets
          </button>
        </div>
      </div>
    </section>
  );
}