import DisplayCart from './DisplayCart';

export default function Cart({ cart, handleRemoveCart }) {
  return (
    <div>
      {cart.map((item) => (
        <DisplayCart
          key={item.id}
          item={item}
          handleRemoveCart={handleRemoveCart}
        />
      ))}
    </div>
  );
}
