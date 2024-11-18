'use client';
import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import React, { useEffect, useState } from 'react';
import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import useProductCategoryStore from '@/store/product-category-store';
import axios from 'axios';
import Link from 'next/link';
import 'swiper/css'; // Import default Swiper styles
import 'swiper/css/navigation'; // Import navigation styles (if using navigation)
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function KategoriProduk2() {
  const { productCategories, loading, error, setProductCategories, setLoading, setError } = useProductCategoryStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = 'http://localhost:8000/api/v1/product-category'; // Pastikan URL ini valid
        console.log('Fetching data from URL:', url);  // Log URL
        const response = await axios.get(url);
        if (response.data.status === 'success') {
          setProductCategories(response.data.data);
        } else {
          setError('Failed to fetch product categories');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      }
    };

    fetchData();
  }, [setProductCategories, setLoading, setError]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Mengelompokkan kategori berdasarkan nama
  const groupedCategories = productCategories.reduce((acc: any, item: any) => {
    const categoryName = item.product_category_first.product_category_second.name;

    // Jika kategori sudah ada, gabungkan
    if (!acc[categoryName]) {
      acc[categoryName] = {
        name: categoryName,
        image_url: item.product_category_first.product_category_second.image_url,
        items: [],
        slug: item.product_category_first.product_category_second.slug, // Ambil slug
      };
    }
    acc[categoryName].items.push(item);
    return acc;
  }, {});

  const uniqueCategories = Object.values(groupedCategories);

  return (
    <div>

      <div className="container">

        <h4 className="font-manrope text-left underline font-bold text-4xl text-[#b18a70] mb-11 mt-8">Produk</h4>
        <div className="flex flex-wrap justify-center">
          {/* Menampilkan kategori yang unik */}
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((category) => (
              <div className="w-1/2 lg:w-1/3 p-2" key={category.name}>
                <Link href={`/product/${category.slug}`}>  {/* Gunakan slug di sini */}
                  <div className="border relative overflow-hidden rounded-lg bg-white">
                    <div className="relative">
                      {/* Gambar Produk */}
                      <Image
                        src={category.image_url && category.image_url.startsWith('http') ? category.image_url : '/default-image.png'}  // Fallback ke gambar default
                        alt={`Image of ${category.name}`}
                        width={900}
                        height={900}
                        className="w-full h-full object-cover py-24 z-19"
                      />

                      {/* Nama Kategori Produk */}
                      <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                        {category.name}
                      </h3>

                      {/* Gradient Overlay */}
                      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent z-5"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>Tidak ada produk kategori ditemukan.</div>
          )}
        </div>
      </div>






    </div >
  );
}
