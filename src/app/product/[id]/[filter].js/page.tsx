'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ProdukDetail() {
  const [product, setProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { id } = router.query;  // Get the product ID from the URL

  useEffect(() => {
    if (id) {
      const fetchProductDetail = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v1/product/${id}`);

          if (response.data.status === 'success') {
            setProduct(response.data.data);  // Set the product data if found
          } else {
            setError('Product not found');
          }
        } catch (error: any) {
          setError('Error fetching product details');
        } finally {
          setLoading(false);
        }
      };

      fetchProductDetail();
    }
  }, [id]);  // Only run the effect when the `id` changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{product?.name}</h1>
      <p>Price: {product?.selling_price}</p>
      <p>{product?.description}</p>
      {product?.image_url && <img src={product.image_url} alt={product.name} width={200} height={200} />}
    </div>
  );
}
