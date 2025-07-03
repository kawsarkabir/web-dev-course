import { useParams } from 'react-router';
import { useCoffeeById } from '@/hooks/useCoffeeById';
import UpdateCoffee from './UpdateCoffeeForm';
 

export default function UpdateCoffeePage() {
  const { id } = useParams();
  const { data: coffee, isLoading, isError } = useCoffeeById(id);

  if (isLoading)
    return <p className="text-center mt-10">Loading coffee data...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load coffee.</p>
    );

  return <UpdateCoffee coffee={coffee} />;
}
