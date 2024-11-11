'use client';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import HeaderMain from '@/components/HeaderMain';
import NavigationMain from '@/components/NavigationMain';
import ProductContainer from '@/components/ProductContainer';
import ProductFilter from '@/components/page/ProductFilter';
import ProductKategoriList from '@/components/page/product-category/ProductCategorySecondList';

export default function KategoriProduk2() {
  return (
    <div>

      <header>

        <HeaderMain />
        <NavigationMain />

      </header>
      <main>

        <h1>Kategori produk 2 Page</h1>
        <ProductKategoriList />

      </main>

    </div>
  );
}
