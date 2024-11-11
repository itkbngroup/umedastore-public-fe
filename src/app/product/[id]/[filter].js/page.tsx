
'use client';
// pages/product/[id]/[filter].js

import { useRouter } from 'next/router';

const ProductFilterPage = () => {
  const router = useRouter();
  const { id, filter } = router.query;

  // Menampilkan loading jika id dan filter belum ada
  if (!id || !filter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Product ID: {id}</h1>
      <h2>Filter: {filter}</h2>
      {/* Tambahkan logika atau komponen lainnya */}
    </div>
  );
};

export default ProductFilterPage;
