export default function DisplayLSData({ cart, handleRemove }) {
    console.log(cart);
    return (
        <>
            <h1>this is displatLSData:{cart.length}</h1>
            {
                cart.map(item =>
                    <div key={item.id}>
                        <h1 className="bg-red-400">{item.brand}</h1>
                        <h1>{item.price}</h1>
                        <button className="bg-red-300 py-2 px-4 rounded-2xl text-white cursor-pointer" onClick={() => handleRemove(item.id)}>remove cart</button>
                    </div>
                )
            }

        </>
    );
}