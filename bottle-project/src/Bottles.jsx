import { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToLS, getDataFromLS } from './utils/ls';

export default function Bottles({ bottlesPromise }) {
  const data = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS('cart', bottle.id);
  };

  useEffect(() => {
    const addToCartData = getDataFromLS('cart');
    setCart(addToCartData);
  }, []);

  return (
    <>
      <h1>added to cart: {cart.length}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
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
