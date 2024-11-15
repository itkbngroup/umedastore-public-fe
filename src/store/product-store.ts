// store/product-store.ts
import { create } from 'zustand';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  selling_price: string;
  image_url: string;
  product_category_first: {
    product_category_second: {
      name: string;
    };
  };
}

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('http://localhost:8000/api/v1/product');
      if (response.data.status === 'success') {
        set({ products: response.data.data.data });
      } else {
        set({ error: 'Failed to fetch products' });
      }
    } catch (err) {
      set({ error: 'Error fetching products' });
    } finally {
      set({ loading: false });
    }
  },
}));
