import React, { useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import useProductStore from '@/store/useProductStore';
import useCartStore from '@/store/useCartStore';

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <h2 className="text-lg font-bold">
            <Link href={`/product/${product.slug}`} passHref>
              <a className="text-blue-500 hover:underline">{product.title}</a>
            </Link>
          </h2>
          <p className="text-gray-500">{product.slug}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
