export default function Bottle({ bottle, handleAddToCart }) {
  const { img, name, price, stock } = bottle || {};
  return (
    <>
      <div className="border border-gray-100">
        <div className="relative">
          <img src={img} alt="" />
          <p className="absolute top-5 right-5 w-13 h-13 rounded-full flex justify-center items-center bg-sky-200 text-xs">
            Stock: {stock}
          </p>
        </div>
        <div className="p-4 space-y-2">
          <h1 className="font-semibold">{name}</h1>
          <div className="flex items-center justify-between">
            <p>Prices: {price}$</p>
            <button
              onClick={() => handleAddToCart(bottle)}
              className="py-1 px-3 bg-sky-500 text-white rounded text-sm font-semibold hover:bg-transparent hover:text-sky-500 transition-all hover:border hover:border-sky-500 border cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
