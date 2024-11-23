import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePetStore } from '../store/petStore';
import type { Pet } from '../types';

export default function PetBreeding() {
  const { pets, breedPets } = usePetStore();
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [isBreeding, setIsBreeding] = useState(false);

  const handlePetSelect = (petId: string) => {
    setSelectedPets(prev => {
      if (prev.includes(petId)) {
        return prev.filter(id => id !== petId);
      }
      if (prev.length < 2) {
        return [...prev, petId];
      }
      return prev;
    });
  };

  const handleBreed = async () => {
    if (selectedPets.length !== 2) return;
    
    setIsBreeding(true);
    try {
      const newPet = breedPets(selectedPets[0], selectedPets[1]);
      // Animation delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSelectedPets([]);
    } finally {
      setIsBreeding(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pet Breeding</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {pets.map((pet) => (
          <motion.div
            key={pet.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-lg cursor-pointer ${
              selectedPets.includes(pet.id)
                ? 'bg-purple-100 border-2 border-purple-500'
                : 'bg-white border-2 border-gray-200'
            }`}
            onClick={() => handlePetSelect(pet.id)}
          >
            <h3 className="font-semibold">{pet.name}</h3>
            <p className="text-sm text-gray-600">Species: {pet.species}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {pet.traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <button
        className="btn btn-primary w-full"
        disabled={selectedPets.length !== 2 || isBreeding}
        onClick={handleBreed}
      >
        {isBreeding ? (
          <span className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
            />
            Breeding...
          </span>
        ) : (
          'Breed Selected Pets'
        )}
      </button>
    </div>
  );
}