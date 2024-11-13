'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ProductDetail {
  id: number;
  name: string;
  selling_price: string;
  description: string;
  image_url: string;
}

interface ProdukDetailProps {
  params: { id: string }; // Destructure id from params
}

export default function ProdukDetail({ params }: ProdukDetailProps) {
  const [produk, setProduk] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = params; // Get the product ID from the URL

  useEffect(() => {
    if (id) {
      const fetchProductDetail = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v1/product/${id}`);

          if (response.data.status === 'success') {
            setProduk(response.data.data); // Set the product data if found
          } else {
            setError('Produk tidak ditemukan');
          }
        } catch (error: any) {
          setError('Error fetching product details');
        } finally {
          setLoading(false);
        }
      };

      fetchProductDetail();
    }
  }, [id]); // Run the effect when `id` changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const changeImage = (src: string) => {
    const mainImage = document.getElementById('mainImage') as HTMLImageElement;
    if (mainImage) mainImage.src = src;
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={produk?.image_url || 'https://umedalife.jp/files/products/9abe2f86f0114a3fab3539c41a56ea9c/displays/umeda-tomo-r8-display-image-9abe352dfa94419ab5c404508670aaea.webp'}
              alt={produk?.name || 'Product'}
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {produk?.image_url && (
                <img
                  src={produk?.image_url || 'https://umedalife.jp/files/products/9abe2f86f0114a3fab3539c41a56ea9c/displays/umeda-tomo-r8-display-image-9abe352dfa94419ab5c404508670aaea.webp'}
                  alt="Thumbnail"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(produk.image_url)}
                />
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{produk?.name}</h2>
            <p className="text-gray-600 mb-4">SKU: {produk?.id}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${produk?.selling_price}</span>
              <span className="text-gray-500 line-through">${(parseFloat(produk?.selling_price || '0') * 1.2).toFixed(2)}</span>
            </div>
            <div className="flex items-center mb-4">
              {/* Star Ratings (dynamically rendering based on rating) */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={i < 4 ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.623l5.148 3.24-1.4-5.922L21 8.518l-6.22-.517L12 2 9.22 7.918 3 8.518l4.252 6.423-1.4 5.922L12 17.623z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{produk?.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>High quality material</li>
                <li>Durable and long-lasting</li>
                <li>Perfect for outdoor use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
