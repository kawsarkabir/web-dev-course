export default function ProductTable({ products }) {
  console.log(products);
  return (
    <>
      <h1>product table: {products.length}</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product.price}>
                <td>{idx + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
