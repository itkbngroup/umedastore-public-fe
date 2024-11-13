'use client';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';


export default function Garansi() {
  return (
    <div>


      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Garansi Umeda</h1>
          <hr className="my-4" />
        </div>

        <div className="warranty-wrapper">
          <div className="warranty-content">
            <p className="text-center mb-6">
              Umeda memberikan garansi untuk barang-barang yang telah dibeli. <br />
              Daftarkan barang-barang umeda yang dimiliki pada form di bawah ini.
            </p>

            <form className="space-y-6">
              <div className="w-full md:w-1/2 mx-auto">
                <div className="border-t border-gray-300 pt-4">
                  <div className="text-xl font-semibold text-center">Info Produk</div>
                  <hr className="my-3" />

                  <div className="mb-4">
                    <label htmlFor="product_id" className="block text-sm font-semibold mb-2">
                      Produk <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="product_id"
                      name="product_id"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    >
                      <option>- Produk -</option>
                      <option value="96fe6610e8a94014b083475474857734">Umeda Air360</option>
                      <option value="97245158e9df492d8f24747d375239f0">Umeda Besu</option>
                      <option value="9874b806f02340e3a17d2892944d8d03">Umeda Bru</option>
                      <option value="9b5f0bbab3944b788cfeeabae024fe7d">Umeda Dehumidifier UDH1500</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="serial_number" className="block text-sm font-semibold mb-2">
                      No. Seri <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="serial_number"
                      name="serial_number"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="invoice_number" className="block text-sm font-semibold mb-2">
                      No. Invoice <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="invoice_number"
                      name="invoice_number"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="purchased_at" className="block text-sm font-semibold mb-2">
                      Tgl. Pembelian <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="purchased_at"
                      name="purchased_at"
                      className="w-full p-3 border border-gray-300 rounded-md flatpickr-date"
                    />
                  </div>

                  <hr className="my-4" />
                  <div className="text-xl font-semibold text-center">Info Pemilik</div>
                  <hr className="my-3" />

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Nama <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      No. Telp / HP <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-semibold mb-2">
                      Alamat <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>

                  <div className="text-sm text-center">
                    <small className="text-red-500">* Wajib diisi</small>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
