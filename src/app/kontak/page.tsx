'use client';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import HeaderMain from '@/components/HeaderMain';
import NavigationMain from '@/components/NavigationMain';
import ProductContainer from '@/components/ProductContainer';
import ProductFilter from '@/components/page/ProductFilter';
export default function kontak() {
  return (
    <div>

      <div className="container mx-auto p-5">
        <div className="page-title mb-5">
          <h1 className="text-3xl font-bold text-center">Kontak Umeda</h1>
          <hr className="my-4 border-gray-300" />
        </div>

        <div className="contact-wrapper bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="contact-content mb-8">
            <p className="text-center text-gray-700">
              Anda dapat menghubungi dan mengunjungi kantor kami jika memiliki pertanyaan mengenai produk-produk Umeda.
            </p>

            <h2 className="text-lg font-semibold text-center mt-6 mb-1">Alamat</h2>
            <p className="text-center text-gray-600">
              Jl. Terusan Bandengan, Komplek Ruko Air Baja 1 No. i28 & i29<br />
              Jakarta Utara, 14450<br />
              Senin - Jumat, 08:00 - 17:00 WIB
            </p>

            <h2 className="text-lg font-semibold text-center mt-6 mb-1">Telp</h2>
            <p className="text-center text-gray-600">(021) 6694950</p>

            <h2 className="text-lg font-semibold text-center mt-6 mb-1">Sales Marketing</h2>
            <p className="text-center text-gray-600">087788088000</p>

            <h2 className="text-lg font-semibold text-center mt-6 mb-1">Service Center</h2>
            <p className="text-center text-gray-600">081808288000</p>

            <h2 className="text-lg font-semibold text-center mt-6 mb-1">Email</h2>
            <p className="text-center text-gray-600">info@umedalife.com</p>
          </div>

          <div className="contact-map mb-8">
            <div className="contact-map-head text-center mb-4">
              <h2 className="text-2xl font-bold">Google Maps</h2>
            </div>
            <div className="contact-map-content">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9587502391673!2d106.78614261539161!3d-6.1362447618693645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dee8fc32165%3A0x7c642b96bd9314ec!2sPT%20MITRA%20NUSA%20RITEL!5e0!3m2!1sid!2sid!4v1660290398626!5m2!1sid!2sid"
                className="w-full h-96 rounded-lg shadow-lg" allowFullScreen
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
