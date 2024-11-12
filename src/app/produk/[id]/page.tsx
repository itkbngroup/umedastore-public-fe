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
  params: { id: string };  // Destructure id from params
}

export default function ProdukDetail({ params }: ProdukDetailProps) {
  const [produk, setProduk] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = params;  // Get the product ID from the URL

  useEffect(() => {
    if (id) {
      const fetchProductDetail = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v1/product/${id}`);

          if (response.data.status === 'success') {
            setProduk(response.data.data);  // Set the product data if found
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

  return (
    <div>
      <h1>{produk?.name}</h1>
      <p>Harga: {produk?.selling_price}</p>
      <p>{produk?.description}</p>
      {produk?.image_url && <img src={produk.image_url} alt={produk.name} width={300} height={300} />}
    </div>
  );
}
