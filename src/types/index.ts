export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Pet {
  id: string;
  name: string;
  species: string;
  traits: PetTrait[];
  stats: PetStats;
  customization: PetCustomization;
}

export type PetTrait = 
  | 'playful'
  | 'shy'
  | 'energetic'
  | 'lazy'
  | 'smart'
  | 'curious'
  | 'friendly'
  | 'protective';

export interface PetStats {
  happiness: number;
  energy: number;
  health: number;
  exp: number;
  level: number;
}

export interface PetCustomization {
  color: string;
  accessories: string[];
}