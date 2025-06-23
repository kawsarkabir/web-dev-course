import { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addToLS, getDataFromLS, removeFromLS } from './utils/ls';
import Cart from './Cart';

export default function Bottles({ bottlesPromise }) {
  const [cart, setCart] = useState([]);
  const data = use(bottlesPromise);

  useEffect(() => {
    const storedData = getDataFromLS('cart');
    const storedCart = [];
    for (const id of storedData) {
      const storedData = data.find((item) => item.id === id);
      if (storedData) {
        storedCart.push(storedData);
      }
    }
    setCart(storedCart);
  }, [data]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS('cart', bottle.id);
  };

  const handleRemoveCart = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
    removeFromLS('cart', id);
  };

  return (
    <>
      <h1>added to cart: {cart.length}</h1>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart} />
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
