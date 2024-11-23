import React from 'react';
import { Menu, X, PawPrint, Bell, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PetWorld Hub
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#marketplace" className="text-gray-700 hover:text-purple-600 transition">Marketplace</a>
            <a href="#community" className="text-gray-700 hover:text-purple-600 transition">Community</a>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-purple-100 rounded-full transition">
                <Bell className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-purple-100 rounded-full transition">
                <ShoppingBag className="h-5 w-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-purple-100 rounded-full transition">
                <User className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-purple-100 rounded-md">Features</a>
            <a href="#marketplace" className="block px-3 py-2 text-gray-700 hover:bg-purple-100 rounded-md">Marketplace</a>
            <a href="#community" className="block px-3 py-2 text-gray-700 hover:bg-purple-100 rounded-md">Community</a>
          </div>
        </div>
      )}
    </nav>
  );
}