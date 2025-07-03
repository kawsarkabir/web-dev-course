'use client';

import { useCoffees } from '@/hooks/useCoffees';

export default function CoffeeList() {
  const { data: coffees = [], isLoading, isError, error } = useCoffees();

  if (isLoading) return <p className="text-center">☕ Loading coffees...</p>;
  if (isError)
    return <p className="text-red-500 text-center">❌ {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl text-center font-bold text-sky-500 mb-6">
        All Coffees
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <div
            key={coffee._id}
            className="border rounded-lg p-5 bg-white shadow-sm"
          >
            <img
              src={coffee.photoURL}
              alt={coffee.name}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{coffee.name}</h3>
            <p className="text-gray-500">👨‍🍳 Chef: {coffee.chefName}</p>
            <p className="text-gray-500">📦 Supplier: {coffee.supliyerName}</p>
            <p className="text-gray-500">👅 Taste: {coffee.tasteName}</p>
            <p className="text-gray-500">🏷 Category: {coffee.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
