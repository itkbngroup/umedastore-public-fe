"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCategorySecondList = () => {
  const [kategori, setKategori] = useState<any[]>([]);  // Use type 'any[]' for the kategori array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/product-category-second');

        // Check if the response has the correct structure and data
        if (response.data.status === 'success' && Array.isArray(response.data.data)) {
          setKategori(response.data.data);  // Set the kategori data if it is an array
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error: any) {
        setError('Error fetching categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;



  return (
    <div>
      <h1>Daftar Kategori Produk</h1>
      <ul>
        {kategori.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            {item.image_url && <img src={item.image_url} alt={item.name} width={20} height={20} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategorySecondList;
