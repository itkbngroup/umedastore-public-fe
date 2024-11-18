// src/store/product-category-store.tsx
import { create } from 'zustand';

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  is_activated: number;
}

interface ProductCategoryStore {
  productCategories: ProductCategory[];
  loading: boolean;
  error: string | null;

  setProductCategories: (data: ProductCategory[]) => void;
  setLoading: (status: boolean) => void;
  setError: (errorMessage: string) => void;
}

const useProductCategoryStore = create<ProductCategoryStore>((set) => ({
  productCategories: [],
  loading: true,
  error: null,

  setProductCategories: (data) => set({ productCategories: data, loading: false }),
  setLoading: (status) => set({ loading: status }),
  setError: (errorMessage) => set({ error: errorMessage, loading: false }),
}));

export default useProductCategoryStore;
