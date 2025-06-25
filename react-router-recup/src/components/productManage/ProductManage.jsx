import { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

export default function ProductManage() {
  const [products, setProduct] = useState([]);

  const handleAddProduct = (product) => {
    const newProduct = [...products, product];
    setProduct(newProduct);
  };

  return (
    <>
      <ProductForm handleAddProduct={handleAddProduct} />
      <ProductTable products={products} />
    </>
  );
}
