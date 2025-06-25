import { createContext } from 'react';
import Grandpa from './Grandpa';
export const AssetContext = createContext('');

export default function FamilyTree() {
  const newAsset = 'gold';
  return (
    <div className="container mx-auto p-5 border-gray-30 border mt-10">
      <h1 className="text-center text-2xl text-blue-500 py-4">Family Tree</h1>
      <AssetContext.Provider value={newAsset}>
        <Grandpa />
      </AssetContext.Provider>
    </div>
  );
}
