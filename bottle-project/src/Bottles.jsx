import { use, useState } from 'react';
import Bottle from './Bottle';

export default function Bottles({ bottlesPromise }) {
  const data = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    console.log('click product detials:', cart);
  };
  return (
    <>
      <h1>added to cart: {cart.length}</h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {data.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}
