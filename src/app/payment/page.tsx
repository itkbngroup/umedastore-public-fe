"use client";

import { useState } from "react";

export default function Payment() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Steps Indicator */}
      <div className="flex items-center justify-between mb-8">
        {/* {["Informasi Pelanggan", "Shipping", "Payment Invoice"].map( */}
        {["Informasi Pelanggan", "Shipping"].map(
          (label, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${step >= index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
                  }`}
              >
                {index + 1}
              </div>
              <p className="text-center text-sm mt-2">{label}</p>
              {index < 2 && (
                <div
                  className={`flex-1 border-t-2 ${step > index + 1 ? "border-blue-500" : "border-gray-300"
                    }`}
                ></div>
              )}
            </div>
          )
        )}
      </div>

      {/* Step 1: Informasi Shipping */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Informasi Shipping
          </h2>
          <div className="mb-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1">First Name</label>
                <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input type="email" name="email" id="email" placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>

        </div>
      )}

      {/* Step 2: Invoice */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Shipping</h2>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat Pengiriman
            </label>
            <textarea
              id="address"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
      )}

      {/* Step 3: Payment Invoice */}
      {/* {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Payment Invoice
          </h2>
          <div>
            <label
              htmlFor="card-number"
              className="block text-sm font-medium text-gray-700"
            >
              Nomor Kartu
            </label>
            <input
              type="text"
              id="card-number"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="expiration"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Kadaluarsa
            </label>
            <input
              type="text"
              id="expiration"
              placeholder="MM/YY"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
      )} */}

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded disabled:opacity-50"
        >
          Sebelumnya
        </button>
        <button
          onClick={() => setStep(step + 1)}
          disabled={step === 2}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
