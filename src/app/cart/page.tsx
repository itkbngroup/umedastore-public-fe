
"use client";
import { useState } from 'react';

export default function Cart() {

  return (
    <div>
      <section>
        <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
              <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
              <hr className="border-gray-300 mt-4 mb-8" />

              <div className="space-y-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                      <img src='https://umedalife.jp/files/products/96fe6610e8a94014b083475474857734/displays/umeda-air-360-display-image-96fe679de16c4f5e846144eb186690ce.jpg' className="w-full h-full object-contain" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-800">Air360</h3>

                      <div className="flex gap-4 mt-4">
                        <div>
                          <button type="button"
                            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>

                            <span className="mx-2.5">1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                          </button>
                        </div>
                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <h4 className="text-base font-bold text-gray-800">Rp20.00</h4>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                      <img src='https://umedalife.jp/files/products/97245158e9df492d8f24747d375239f0/displays/umeda-besu-display-image-9724605665694ea58fdf4bda35b5c938.jpg' className="w-full h-full object-contain" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-800">Besu</h3>

                      <div className="flex gap-4 mt-4">


                        <div>
                          <button type="button"
                            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>

                            <span className="mx-2.5">1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                          </button>
                        </div>
                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <h4 className="text-base font-bold text-gray-800">Rp120.00</h4>
                  </div>
                </div>

                <div className="grid grid-cols-3 items-center gap-4">
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                      <img src='https://umedalife.jp/files/products/9874b806f02340e3a17d2892944d8d03/displays/umeda-bru-display-image-987cf0f10daf48f9acdcfeb52e7ce032.webp' className="w-full h-full object-contain" />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-800">Bru</h3>

                      <div className="flex gap-4 mt-4">
                        <div>
                          <button type="button"
                            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                            </svg>

                            <span className="mx-2.5">1</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                              <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                            </svg>
                          </button>
                        </div>
                        <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <h4 className="text-base font-bold text-gray-800">Rp50.00</h4>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
              <div className="flex border border-blue-600 overflow-hidden rounded-md">
                <input type="email" placeholder="Promo code"
                  className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                  Apply
                </button>
              </div>

              <ul className="text-gray-800 mt-8 space-y-4">
                <li className="flex flex-wrap gap-4 text-base text-sm">Discount <span className="ml-auto font-bold">Rp0.00</span></li>
                <li className="flex flex-wrap gap-4 text-base text-sm">Shipping <span className="ml-auto font-bold">Rp2.00</span></li>
                <li className="flex flex-wrap gap-4 text-base text-sm">Tax <span className="ml-auto font-bold">Rp4.00</span></li>
                <li className="flex flex-wrap gap-4 text-base font-bold text-sm">Total <span className="ml-auto">Rp52.00</span></li>
              </ul>
              <ul className="text-gray-800 mt-8 space-y-4">
                <div className="py-6">
                  <h2 className="text-sm font-semibold text-gray-700">
                    Informasi Shipping
                  </h2>
                  <div className="mb-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1 text-sm">First Name</label>
                        <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                      </div>
                      <div>
                        <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1 text-sm">Last Name</label>
                        <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="phone" className="mb-3 block text-sm text-base font-medium text-[#07074D]">
                      Phone Number
                    </label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                      className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="mb-3 text-sm block text-base font-medium text-[#07074D]">
                      Email Address
                    </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"
                      className="w-full text-sm rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>

                </div>
              </ul>

              <div className="mt-8 space-y-2">
                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button>
                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
