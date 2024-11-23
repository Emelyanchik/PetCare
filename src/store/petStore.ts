import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Pet, PetTrait, Season } from '../types';

interface PetStore {
  pets: Pet[];
  activePetId: string | null;
  season: Season;
  addPet: (pet: Pet) => void;
  setActivePet: (id: string) => void;
  updatePetStats: (id: string, updates: Partial<Pet>) => void;
  breedPets: (pet1Id: string, pet2Id: string) => Pet;
  setSeason: (season: Season) => void;
}

// Initialize with default pet
const defaultPet: Pet = {
  id: 'default-pet',
  name: 'Buddy',
  species: 'dog',
  traits: ['friendly', 'playful'],
  stats: {
    happiness: 50,
    energy: 100,
    health: 75,
    exp: 0,
    level: 1
  },
  customization: {
    color: '#8B4513',
    accessories: []
  }
};

export const usePetStore = create<PetStore>()(
  devtools(
    persist(
      (set, get) => ({
        pets: [defaultPet],
        activePetId: defaultPet.id,
        season: 'spring',
        
        addPet: (pet) => set((state) => ({ 
          pets: [...state.pets, pet] 
        })),
        
        setActivePet: (id) => set({ 
          activePetId: id 
        }),
        
        updatePetStats: (id, updates) => set((state) => ({
          pets: state.pets.map(pet => 
            pet.id === id ? { ...pet, ...updates } : pet
          )
        })),
        
        breedPets: (pet1Id, pet2Id) => {
          const { pets } = get();
          const pet1 = pets.find(p => p.id === pet1Id);
          const pet2 = pets.find(p => p.id === pet2Id);
          
          if (!pet1 || !pet2) throw new Error('Pets not found');
          
          const traits = combineTraits(pet1.traits, pet2.traits);
          const newPet: Pet = {
            id: `pet-${Date.now()}`,
            name: `${pet1.name}-${pet2.name} Jr`,
            species: `${pet1.species}-${pet2.species}`,
            traits,
            stats: {
              happiness: 50,
              energy: 100,
              health: 75,
              exp: 0,
              level: 1
            },
            customization: {
              color: combineColors(pet1.customization.color, pet2.customization.color),
              accessories: []
            }
          };
          
          get().addPet(newPet);
          return newPet;
        },
        
        setSeason: (season) => set({ season })
      }),
      {
        name: 'pet-store',
        skipHydration: false,
      }
    )
  )
);

function combineTraits(traits1: PetTrait[], traits2: PetTrait[]): PetTrait[] {
  const allTraits = [...traits1, ...traits2];
  return [...new Set(allTraits)].slice(0, 3);
}

function combineColors(color1: string, color2: string): string {
  return color1;
}