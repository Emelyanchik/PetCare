import React from 'react';
import PetGame from './components/PetGame';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-teal-50">
      <div className="max-w-md mx-auto px-4 py-8">
        <PetGame />
      </div>
    </div>
  );
}

export default App;