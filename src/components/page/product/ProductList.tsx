"use client"; // Tambahkan ini di bagian paling atas

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ProdukList() {
  const [kategori, setKategori] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/product');

        if (
          response.data.status === 'success' &&
          response.data.data &&
          Array.isArray(response.data.data.data)
        ) {
          setKategori(response.data.data.data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error: any) {
        setError('Error fetching ProductList');
      } finally {
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>




      <br />
      <hr />
      <h1>Daftar Produk list</h1>
      <ul>
        {kategori.length > 0 ? (
          kategori.map((item) => (
            <li key={item.id}>
              <h2
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                onClick={() => router.push(`/product/${item.id}`)}
              >
                {item.name}
              </h2>
              <h3>{item.selling_price}</h3>
              {item.image_url && <img src={item.image_url} alt={item.name} width={100} height={100} />}
            </li>
          ))
        ) : (
          <li>Tidak ada produk list yang ditemukan.</li>
        )}
      </ul>
    </div>
  );
}
