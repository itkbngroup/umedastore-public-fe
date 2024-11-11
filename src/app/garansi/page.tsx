'use client';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import HeaderMain from '@/components/HeaderMain';
import NavigationMain from '@/components/NavigationMain';
import ProductContainer from '@/components/ProductContainer';
import ProductFilter from '@/components/page/ProductFilter';
export default function garansi() {
  return (
    <div>

      <header>

        <HeaderMain />
        <NavigationMain />

      </header>
      <main>

        <h1>Garansi Page</h1>

      </main>

    </div>
  );
}
