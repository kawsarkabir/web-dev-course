export default function ProductForm({ handleAddProduct }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const productCollection = {
      name,
      price,
    };
    handleAddProduct(productCollection);
  };
  return (
    <>
      <h1>welcome to my shop, choices or add to cart</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="product name" />
        <input type="text" name="price" placeholder="product price" />
        <input type="submit" value="add to cart" />
      </form>
    </>
  );
}
