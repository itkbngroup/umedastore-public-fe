// src/store/useCartStore.js
import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) => set((state) => {
    // Check if product already exists in the cart
    const isProductInCart = state.cart.find((item) => item.id === product.id);
    if (!isProductInCart) {
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }

    // Increment quantity if the product already exists
    return {
      cart: state.cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  }),

  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
}));

export default useCartStore;