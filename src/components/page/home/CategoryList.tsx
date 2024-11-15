// components/CategoryList.tsx
'use client'; // Declare that this component should only run on the client side

import React, { useEffect } from 'react';
import { useProductStore } from '@/store/product-store'; // Import Zustand store

const CategoryList = () => {
  // Destructure state from Zustand store
  const { products, loading, error, fetchProducts } = useProductStore((state) => ({
    products: state.products,
    loading: state.loading,
    error: state.error,
    fetchProducts: state.fetchProducts,
  }));

  useEffect(() => {
    // Fetch products when the component mounts if products are empty
    if (products.length === 0 && !loading) {
      fetchProducts();
    }
  }, [products.length, loading, fetchProducts]);

  // Render loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Render products
  return (
    <div className="container">
      <h4 className="font-manrope text-left underline font-bold text-4xl text-[#b18a70] mb-11 mt-8">Produk</h4>
      <div className="flex flex-wrap justify-center">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="w-1/2 lg:w-1/3 p-2" key={item.id}>
              <div className="border relative overflow-hidden rounded-lg bg-white">
                <div className="relative">
                  {/* Product Image */}
                  {item.image_url && (
                    <img
                      src={item.image_url}
                      alt={`Image of ${item.name}`}
                      width={900}
                      height={900}
                      className="w-full h-full object-cover z-10"
                    />
                  )}

                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                    {item.name}
                  </h3>

                  {/* Product Category */}
                  {item.product_category_first?.product_category_second?.name && (
                    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent flex items-center justify-center">
                      <p className="text-white text-sm">{item.product_category_first.product_category_second.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
