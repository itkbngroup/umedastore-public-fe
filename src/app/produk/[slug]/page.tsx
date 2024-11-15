'use client'; // Make sure it's at the top

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Link from 'next/link'; // For navigation to product details
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import default Swiper styles
import 'swiper/css/navigation'; // Import navigation styles (if using navigation)
import 'swiper/css/pagination';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

interface ProductContent {
  id: string;
  product_id: string;
  title: string;
  slug: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  is_activated: number;
}

interface Product {
  id: string;
  product_category_first_id: string;
  name: string;
  selling_price: string;
  image_url: string;
  created_by: string | null;
  updated_by: string | null;
  created_at: string;
  updated_at: string;
  is_activated: number;
  product_content: ProductContent[];
}


export default function ProdukList() {

  const { slug } = useParams(); // Access `slug` directly from `useParams`

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v1/produk/${slug}`);
          if (response.data.status === 'success') {
            setProduct(response.data.data[0]);
            if (response.data.data[0]?.product_content?.length > 0) {
              setSelectedImage(response.data.data[0].product_content[0].image_url || null); // Set initial selected image
            }
          } else {
            setError('Product content not found.');
          }
        } catch (err) {
          setError('Failed to fetch product details.');
          console.error('Error fetching product:', err);
        }
      };

      fetchProduct();
    }
  }, [slug]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div>

      <div className="container">

        <Image src="https://umedalife.jp/files/images/banners/banner-202411-02.webp" width={1920} height={960} alt="women's latest fashion sale" className="banner-img" />

        <h4 className="font-manrope text-left underline font-bold text-4xl text-[#b18a70] mb-11 mt-8">Produk</h4>
        <div className="flex flex-wrap justify-center ">

          {/* {products.length > 0 ? (
            products.map((item) => ( */}
          <div className="w-1/2 lg:w-1/3 p-2 " >
            <div className="border relative overflow-hidden rounded-lg  bg-white">
              <div className="relative">

                {selectedImage && (
                  <Image src={selectedImage} alt={`Image of ${product.name}`} width={900} height={900} className="w-full h-full object-cover" />
                )}

                {product.product_content.map((content) => (
                  <Link href={`/produk`}>

                    <h3 className="text-lg font-semibold mt-6  text-[#96694C] text-center absolute inset-x-0 bottom-5 z-20"
                    >
                      {content.title}
                    </h3>
                  </Link>
                ))}

              </div>
            </div>
          </div>

          {/* ))
          ) : (
          <li>Tidak ada produk ditemukan.</li>
          )} */}



        </div>

      </div>


      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h4 className="font-manrope text-left underline font-bold text-4xl text-[#b18a70] mb-11">Customer Review</h4>

          <div className="grid grid-cols-1 gap-8">

            <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
              <div className="col-span-12 lg:col-span-10 ">
                <div className="sm:flex gap-12">
                  <img src="https://pagedone.io/asset/uploads/1704364459.png" alt="Robert image" className="w-32 h-32 rounded-full object-cover" />
                  <div className="text">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-2">Robert Karmazov</p>

                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-medium text-lg leading-8 text-gray-400 lg:text-left whitespace-nowrap">Nov 01,
                      2023</p>


                    <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.  </p>
                    <div className="flex items-center justify-between">
                      <div className="cursor-pointers flex items-center gap-2">

                        <div className="flex gap-2">
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pb-8 border-b border-gray-100 w-full"></div>
            <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
              <div className="col-span-12 lg:col-span-10 ">
                <div className="sm:flex gap-12">
                  <img src="https://pagedone.io/asset/uploads/1704364459.png" alt="Robert image" className="w-32 h-32 rounded-full object-cover" />
                  <div className="text">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-2">Robert Karmazov</p>

                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-medium text-lg leading-8 text-gray-400 lg:text-left whitespace-nowrap">Nov 01,
                      2023</p>


                    <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.  </p>
                    <div className="flex items-center justify-between">
                      <div className="cursor-pointers flex items-center gap-2">

                        <div className="flex gap-2">
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pb-8 border-b border-gray-100 w-full"></div>
            <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
              <div className="col-span-12 lg:col-span-10 ">
                <div className="sm:flex gap-12">
                  <img src="https://pagedone.io/asset/uploads/1704364459.png" alt="Robert image" className="w-32 h-32 rounded-full object-cover" />
                  <div className="text">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-2">Robert Karmazov</p>

                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-medium text-lg leading-8 text-gray-400 lg:text-left whitespace-nowrap">Nov 01,
                      2023</p>


                    <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.  </p>
                    <div className="flex items-center justify-between">
                      <div className="cursor-pointers flex items-center gap-2">

                        <div className="flex gap-2">
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pb-8 border-b border-gray-100 w-full"></div>
            <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
              <div className="col-span-12 lg:col-span-10 ">
                <div className="sm:flex gap-12">
                  <img src="https://pagedone.io/asset/uploads/1704364459.png" alt="Robert image" className="w-32 h-32 rounded-full object-cover" />
                  <div className="text">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-2">Robert Karmazov</p>

                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-medium text-lg leading-8 text-gray-400 lg:text-left whitespace-nowrap">Nov 01,
                      2023</p>


                    <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.  </p>
                    <div className="flex items-center justify-between">
                      <div className="cursor-pointers flex items-center gap-2">

                        <div className="flex gap-2">
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="pb-8 border-b border-gray-100 w-full"></div>
            <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
              <div className="col-span-12 lg:col-span-10 ">
                <div className="sm:flex gap-12">
                  <img src="https://pagedone.io/asset/uploads/1704364459.png" alt="Robert image" className="w-32 h-32 rounded-full object-cover" />
                  <div className="text">
                    <p className="font-medium text-lg leading-8 text-gray-900 mb-2">Robert Karmazov</p>

                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                        fill="none">
                        <g clip-path="url(#clip0_13624_2090)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24" />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2090">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <p className="font-medium text-lg leading-8 text-gray-400 lg:text-left whitespace-nowrap">Nov 01,
                      2023</p>


                    <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">One of the standout features of Pagedone is its intuitive and user-friendly interface. Navigating through the system feels natural, and the layout makes it easy to locate and utilize various design elements. This is particularly beneficial for designers looking to streamline their workflow.  </p>
                    <div className="flex items-center justify-between">
                      <div className="cursor-pointers flex items-center gap-2">

                        <div className="flex gap-2">
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-1.jpg" alt="" />
                          <img className="h-32 w-20 rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-photo-2.jpg" alt="" />
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div >
      </section >

    </div >
  );
}
