'use client';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import default Swiper styles
import 'swiper/css/navigation'; // Import navigation styles (if using navigation)
import 'swiper/css/pagination';


// Menggunakan modul-modul Swiper dalam komponen Swiper
export default function Home() {
  return (
    <div className="bg-[#f3eee9]">



      <div className="container-fluid">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide"> <Image src="/assets/frontend/images/banner-purple-1.png" width={1920} height={800} alt="" /> </div>
            <div className="swiper-slide"> <Image src="/assets/frontend/images/banner-purple-2.png" width={1920} height={800} alt="" /> </div>
            <div className="swiper-slide"> <Image src="/assets/frontend/images/banner-purple-3.png" width={1920} height={800} alt="" /> </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>

      <div className="container">
        <Image src="https://umedalife.jp/files/images/banners/banner-202411-02.webp" width={1920} height={960} alt="women's latest fashion sale" className="banner-img" />

        <div className="flex flex-wrap justify-center ">


          <div className="w-1/2 lg:w-1/3 p-2">
            <div className="border relative overflow-hidden rounded-lg  bg-white">
              <div className="relative">
                {/* <!-- Image Component --> */}
                <Image
                  src="/assets/frontend/images/umeda-air-360-display-image-96fe679de16c4f5e846144eb186690ce.jpg"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover z-10"
                  alt="Umeda's img1"
                />

                {/* <!-- Title over Image --> */}
                <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                  Umeda air 360
                </h3>

                <div className="py-10">
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent "></div>
                </div>
              </div>
            </div>
          </div>


          <div className="w-1/2 lg:w-1/3 p-2">
            <div className="border relative overflow-hidden rounded-lg  bg-white">
              <div className="relative">
                {/* <!-- Image Component --> */}
                <Image
                  src="/assets/frontend/images/umeda-uth700.png"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover z-10"
                  alt="Umeda's img1"
                />

                {/* <!-- Title over Image --> */}
                <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                  umeda uth700
                </h3>

                <div className="py-10">
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 p-2 ">
            <div className="border relative overflow-hidden rounded-lg bg-white">
              <div className="relative">
                {/* <!-- Image Component --> */}
                <Image
                  src="/assets/frontend/images/umeda-besu.png"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover z-10"
                  alt="Umeda's img1"
                />

                {/* <!-- Title over Image --> */}
                <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                  umeda besu
                </h3>

                <div className="py-10">
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent "></div>
                </div>

              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 p-2">
            <div className="border relative overflow-hidden rounded-lg  bg-white">
              <div className="relative">
                {/* <!-- Image Component --> */}
                <Image
                  src="/assets/frontend/images/umeda-bru.png"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover z-10"
                  alt="Umeda's img1"
                />

                {/* <!-- Title over Image --> */}
                <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                  umeda bru
                </h3>

                <div className="py-10">
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 p-2">
            <div className="border relative overflow-hidden rounded-lg bg-white">
              <div className="relative">
                {/* <!-- Image Component --> */}
                <Image
                  src="/assets/frontend/images/umeda-dx208e.png"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover z-10"
                  alt="Umeda's img1"
                />

                {/* <!-- Title over Image --> */}
                <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                  umeda dx208e
                </h3>

                <div className="py-10">
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 lg:w-1/3 p-2">
            <div className="border relative overflow-hidden rounded-lg">
              <div className="relative">
                {/* <!-- Image Component --> */}
                <Image
                  src="/assets/frontend/images/umeda-air-360-display-image-96fe679de16c4f5e846144eb186690ce.jpg"
                  width={900}
                  height={900}
                  className="w-full h-full object-cover z-10"
                  alt="Umeda's img1"
                />

                {/* <!-- Title over Image --> */}
                <h3 className="text-lg font-semibold text-white text-center absolute inset-x-0 bottom-5 z-20">
                  Card Title
                </h3>

                <div className="py-10">
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#b18a70] to-transparent "></div>
                </div>
              </div>
            </div>
          </div>


        </div>




      </div>

      <section className="py-12 my-6">
        <div className="container-fluid">
          <h2 className="text-4xl font-bold text-[#545454] bg-[#e7ddd3] text-center h-16 pt-4">
            Testimonials
          </h2>
        </div>
        <div className="container-fluid  bg-[#96694C] " >
          <div className="mx-6 ">
            <div className="mb-4 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
              <div className="py-1 ">
                <div className="flex items-center gap-8">
                  <button
                    id="slider-button-left"
                    className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                  >
                    <svg
                      className="h-6 w-6 text-indigo-600 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    id="slider-button-right"
                    className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600"
                  >
                    <svg
                      className="h-6 w-6 text-indigo-600 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              spaceBetween={28}
              loop={true}
              navigation={{
                prevEl: '#slider-button-left',
                nextEl: '#slider-button-right',
              }}
              pagination={{
                el: '.swiper-pagination',
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              <SwiperSlide>
                <div className="group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600">
                  <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                    {/* Stars */}
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                    Pagedone stands out as the most user-friendly and effective solution I've ever used.
                  </p>
                  <div className="flex items-center gap-5">
                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696230027.png" alt="avatar" />
                    <div className="grid gap-1">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600">
                        Alex K.
                      </h5>
                      <span className="text-sm leading-6 text-gray-500">Design Lead</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                  <div
                    className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <p
                    className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                    Pagedone is simply the best tool of investment in the market right now.
                  </p>
                  <div className="flex items-center gap-5">
                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png"
                      alt="avatar" />
                    <div className="grid gap-1">
                      <h5
                        className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                        Jane D</h5>
                      <span className="text-sm leading-6 text-gray-500">CEO </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
                  <div
                    className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <p
                    className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9  group-hover:text-gray-800">
                    I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my
                    expectations.
                  </p>
                  <div className="flex items-center gap-5">
                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229994.png"
                      alt="avatar" />
                    <div className="grid gap-1">
                      <h5
                        className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                        Harsh P.</h5>
                      <span className="text-sm leading-6 text-gray-500">Product Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 ">
                  <div
                    className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <p
                    className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
                    Pagedone stands out as the most user-friendly and effective solution I've ever used.
                  </p>
                  <div className="flex items-center gap-5">
                    <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696230027.png"
                      alt="avatar" />
                    <div className="grid gap-1">
                      <h5
                        className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                        Alex K.</h5>
                      <span className="text-sm leading-6 text-gray-500">Design Lead</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

    </div>
  );
}
