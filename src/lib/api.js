import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // Your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fungsi untuk mengambil data kategori
export const fetchKategoriSecond = async () => {
  try {
    const response = await axiosInstance.get('/product-category-second'); // Endpoint API untuk kategori
    return response.data; // Mengembalikan data kategori
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching kategori:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error; // Menangani error jika API gagal
  }
};

// Fungsi untuk mengambil data product
export const fetchProduct = async () => {
  try {
    const response = await axiosInstance.get('/product'); // Endpoint API untuk product
    return response.data; // Mengembalikan data product
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching product:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error; // Menangani error jika API gagal
  }
};
