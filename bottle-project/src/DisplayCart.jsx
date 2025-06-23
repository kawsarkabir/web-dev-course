export default function DisplayCart({ item, handleRemoveCart }) {
  const { name, id } = item || {};
  console.log(item);
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => handleRemoveCart(id)}
        className="py-1 px-3 bg-red-300 rounded-2xl text-white"
      >
        X
      </button>
    </div>
  );
}
