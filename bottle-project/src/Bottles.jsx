import { use } from 'react';
import Bottle from './Bottle';

export default function Bottles({ bottlesPromise }) {
  const data = use(bottlesPromise);
  const handleAddToCart = (bottle)=>{
    console.log('click product detials:', bottle)
  }
  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      {data.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}
