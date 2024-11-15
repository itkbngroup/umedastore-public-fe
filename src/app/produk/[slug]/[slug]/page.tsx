'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { IonIcon } from '@ionic/react';
import { addOutline, hammerOutline, settingsOutline, buildOutline, ellipse, cogOutline, batteryHalfOutline, constructOutline, bagHandleOutline, caretBackOutline, closeOutline, gridOutline, heartOutline, homeOutline, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, menuOutline, personOutline, removeOutline, searchOutline, star } from 'ionicons/icons';

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

const ProductPage = () => {
  const { slug } = useParams(); // Access `slug` directly from `useParams`

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/v1/produk/${slug}/${slug}`);
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

      <style jsx>{`
                    .nav-for-slider .swiper-slide {
            height: auto;
            width: auto;
            cursor: pointer;
           
        }
        .swiper-wrapper{
            height: auto;
        }
        .nav-for-slider .swiper-slide img{
            border:2px solid transparent;
            border-radius: 10px;
           
        }
        .nav-for-slider .swiper-slide-thumb-active img{
           
            border-color: rgb(79 70 229 );
        }

      `}</style>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
              <div className=" nav-for-slider ">
                <div className="swiper-wrapper">
                  <div className="swiper-slide thumbs-slide">
                    <img src="https://pagedone.io/asset/uploads/1700472379.png"
                      alt="Summer Travel Bag image"
                      className="cursor-pointer rounded-xl transition-all duration-500 object-cover" />
                  </div>
                  <div className=" flex flex-row space-x-3">
                    <div className="swiper-slide thumbs-slide">
                      <img src="https://pagedone.io/asset/uploads/1700472430.png"
                        alt="Summer Travel Bag image"
                        className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover" />
                    </div>
                    <div className="swiper-slide thumbs-slide">
                      <img src="https://pagedone.io/asset/uploads/1700472416.png"
                        alt="Summer Travel Bag image"
                        className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover" />
                    </div>
                    <div className="swiper-slide thumbs-slide">
                      <img src="https://pagedone.io/asset/uploads/1700472446.png"
                        alt="Summer Travel Bag image"
                        className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover" />
                    </div>
                    <div className="swiper-slide thumbs-slide">
                      <img src="https://pagedone.io/asset/uploads/1700472467.png"
                        alt="Summer Travel Bag image"
                        className="cursor-pointer rounded-xl transition-all duration-500 border hover:border-indigo-600 object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">Yellow Summer
                      Travel
                      Bag
                    </h2>
                    <p className="text-sm font-medium text-gray-600 h4 bg-red"></p>

                  </div>
                  <button className="group transition-all duration-500 p-0.5">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
                        cx="30" cy="30" r="30"
                      />
                      <path
                        className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700"
                        d="M15 30H45M30 15V45"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </button>
                </div>
                <p className="w-100 h-1 border-2 border-red-500"></p>

                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <div className="flex items-center">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">Rp  199.00 </h5>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-2">White</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-2">Product Dimensions</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-2">40 x 40 x 66 cm</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-2">What's in the box</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg text-gray-900 mb-2">1 Unit AQ750</p>
                    <p className="font-medium text-lg text-gray-900 mb-2">1 Hepa13</p>
                    <p className="font-medium text-lg text-gray-900 mb-2">1 Manual Book</p>
                    <p className="font-medium text-lg text-gray-900 mb-2">1 Kartu Garansi</p>
                  </div>
                </div>

                <p className="font-medium text-lg text-gray-900 mb-2">Size (KG)</p>
                <div className="grid grid-cols-2 gap-3 mb-3 min-[400px]:mb-8">
                  {/* Item 1 */}
                  <div className="border-gray-200 grid grid-cols-2">
                    <div className="flex items-center justify-end mr-4 text-lg">
                      <IonIcon icon={hammerOutline} className="add-icon text-4xl" />
                    </div>
                    <div className="flex items-center justify-start text-sm">
                      <span>Nilai CADR 726 m/jam</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="border-gray-200 grid grid-cols-2">
                    <div className="flex items-center justify-end mr-4 text-lg">
                      <IonIcon icon={settingsOutline} className="add-icon text-4xl" />
                    </div>
                    <div className="flex items-center justify-start text-sm">
                      <span>Nilai CADR 726 m/jam</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="border-gray-200 grid grid-cols-2">
                    <div className="flex items-center justify-end mr-4 text-lg">
                      <IonIcon icon={buildOutline} className="add-icon text-4xl" />
                    </div>
                    <div className="flex items-center justify-start text-sm">
                      <span>Nilai CADR 726 m/jam</span>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="border-gray-200 grid grid-cols-2">
                    <div className="flex items-center justify-end mr-4 text-lg">
                      <IonIcon icon={cogOutline} className="add-icon text-4xl" />
                    </div>
                    <div className="flex items-center justify-start text-sm">
                      <span>Nilai CADR 726 m/jam</span>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div className="border-gray-200 grid grid-cols-2">
                    <div className="flex items-center justify-end mr-4 text-lg">
                      <IonIcon icon={batteryHalfOutline} className="add-icon text-4xl" />
                    </div>
                    <div className="flex items-center justify-start text-sm">
                      <span>Nilai CADR 726 m/jam</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                  <div className=" flex items-center justify-center border border-gray-400 rounded-full">
                    <button
                      className="group py-[14px] px-3 w-full border-r border-gray-400 rounded-l-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                      <svg className="stroke-black group-hover:stroke-black" width="22" height="22"
                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" stroke-linecap="round" />
                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" strokeWidth="1.6"
                          stroke-linecap="round" />
                        <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" strokeWidth="1.6"
                          stroke-linecap="round" />
                      </svg>
                    </button>
                    <input type="text"
                      className="font-semibold text-gray-900 text-lg py-3 px-2 w-full min-[400px]:min-w-[75px] h-full bg-transparent placeholder:text-gray-900 text-center hover:text-indigo-600 outline-0 hover:placeholder:text-indigo-600"
                      placeholder="1" />
                    <button
                      className="group py-[14px] px-3 w-full border-l border-gray-400 rounded-r-full h-full flex items-center justify-center bg-white shadow-sm shadow-transparent transition-all duration-300 hover:bg-gray-50 hover:shadow-gray-300">
                      <svg className="stroke-black group-hover:stroke-black" width="22" height="22"
                        viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#9CA3AF" strokeWidth="1.6"
                          stroke-linecap="round" />
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                          strokeWidth="1.6" stroke-linecap="round" />
                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="black" stroke-opacity="0.2"
                          strokeWidth="1.6" stroke-linecap="round" />
                      </svg>
                    </button>
                  </div>
                  <button
                    className="group py-3 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                    <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                      width="22" height="22" viewBox="0 0 22 22" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke="" strokeWidth="1.6" stroke-linecap="round" />
                    </svg>
                    Add to cart</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="w-full ">
          <div className="flex justify-center items-center">
            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
              <p className="font-medium text-lg text-gray-900 mb-2">Tentang Produk</p>
              <div className="grid grid-cols-2 gap-3 mb-3 min-[400px]:mb-8">
                {/* Item 1 */}
                <div className="border-gray-200 grid grid-cols-2">
                  <div className="flex items-center justify-end mr-4 text-lg">
                    <IonIcon icon={ellipse} className="add-icon " />
                  </div>
                  <div className="flex items-center justify-start text-sm">
                    <span>NIDEC Japanese DC Motor untuk konsumsi listrik rendah dan ketahanan umur pemakaian </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="border-gray-200 grid grid-cols-2">
                  <div className="flex items-center justify-end mr-4 text-lg">
                    <IonIcon icon={ellipse} className="add-icon " />
                  </div>
                  <div className="flex items-center justify-start text-sm">
                    <span>Dapat menambah minyak aromaterapi</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="border-gray-200 grid grid-cols-2">
                  <div className="flex items-center justify-end mr-4 text-lg">
                    <IonIcon icon={ellipse} className="add-icon " />
                  </div>
                  <div className="flex items-center justify-start text-sm">
                    <span>Lapisan H13 hepa filter menyaring partikel debu sampai dengan 0,1 mikron</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="border-gray-200 grid grid-cols-2">
                  <div className="flex items-center justify-end mr-4 text-lg">
                    <IonIcon icon={ellipse} className="add-icon " />
                  </div>
                  <div className="flex items-center justify-start text-sm">
                    <span>Memiliki 3 pilihan kecepatan </span>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="border-gray-200 grid grid-cols-2">
                  <div className="flex items-center justify-end mr-4 text-lg">
                    <IonIcon icon={ellipse} className="add-icon " />
                  </div>
                  <div className="flex items-center justify-start text-sm">
                    <span>Memiliki 3 pilihan waktu bekerja, 1-2 jam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
};

export default ProductPage;
