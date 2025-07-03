import { useParams } from 'react-router';
import { useCoffeeById } from '@/hooks/useCoffeeById';

export default function SingleCoffee() {
  const { id } = useParams();
  const { data: coffee, isLoading, isError, error } = useCoffeeById(id);

  if (isLoading) return <p className="text-center">☕ Loading...</p>;
  if (isError)
    return <p className="text-red-500 text-center">❌ {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-lg mx-auto bg-white rounded shadow p-6 space-y-4">
        <img
          src={coffee.photoURL}
          alt={coffee.name}
          className="w-full h-60 object-cover rounded"
        />
        <h1 className="text-3xl font-bold text-center text-sky-500">
          {coffee.name}
        </h1>
        <p>
          <strong>Chef:</strong> {coffee.chefName}
        </p>
        <p>
          <strong>Supplier:</strong> {coffee.supliyerName}
        </p>
        <p>
          <strong>Taste:</strong> {coffee.tasteName}
        </p>
        <p>
          <strong>Category:</strong> {coffee.category}
        </p>
      </div>
    </div>
  );
}
