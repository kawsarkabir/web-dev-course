import { useCoffees } from '@/hooks/useCoffees';
import CoffeeCard from './CoffeeCard';

export default function CoffeeList() {
  const { data: coffees = [], isLoading, isError, error } = useCoffees();

  if (isLoading) return <p className="text-center">☕ Loading...</p>;
  if (isError)
    return <p className="text-red-500 text-center">❌ {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl text-center font-bold text-sky-500 mb-6">
        All Coffees
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
