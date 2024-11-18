'use client';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';

export default function Tentang() {
  return (
    <div>


      <style jsx>{`
                    /* @font-face {
          font-family: MontserratBold;
          src: url('/assets/fonts/Montserrat-Bold.woff');
        }

        @font-face {
          font-family: MontserratRegular.woff;
          src: url('/assets/fonts/Montserrat-Regular.woff');
        } */

            * {
              --swiper-navigation-color: #fff;
              --swiper-pagination-color: #fff;
              --swiper-navigation-size: 22px;
              color: #96694C;
              font-size: 16px;
              font-family: "Montserrat";
              letter-spacing: 1.5px;

              /* font-family: Arial, Helvetica, sans-serif; */
            }
      `}</style>

      <div className="container-fluid" style={{ overflowX: 'hidden' }}>
        <div className="about-section pt-4" >
          <div className="container">
            <div className="page-title">
              <h1 className="h1 text-center fw-bold">Tentang Umeda</h1>
              <hr />
            </div>

            <p className="text-center fw-bold mb-0">
              UMEDA, established in 2018.
            </p>

            <img
              className="img-fluid w-100"
              src="https://umedalife.jp/assets/images/about-banner.jpg"
              alt="Umeda Peralatan Rumah Tangga Terbaik"
            />

            <p className="mt-6">
              Rumahmu adalah istanamu. UMEDA mewujudkan impian rumah
              tangga yang bersih dan rapih dengan menghadirkan
              serangkaian produk-produk berkualitas dengan desain yang
              estetik. Produk UMEDA dirancang untuk meringankan
              pekerjaan rumah tangga serta membawakan perasaan bahagia
              kepada penggunanya.
            </p>

            <p className="mt-6">
              UMEDA akan terus berkembang dengan produk-produk
              smart cleaning home appliances seperti robot vacuum
              cleaner, vacuum cleaner, rice cooker, air purifier, dan
              masih banyak lagi. Kami memastikan excellence dalam
              pelayanan purna jual dan berkomitmen untuk memberikan
              best customer experience.
            </p>

            <p className="mt-6">
              UMEDA akan selalu hadir di setiap rumah tangga
              di Indonesia dan membantu menciptakan rumah
              yang bersih, sehat dan bahagia bagi keluarga Indonesia.
            </p>

            <p className="mt-6">
              UMEDA Sparks Joy in You.
              Love Life. Live Well.
            </p>

            <img
              className="img-fluid w-full"
              src="https://umedalife.jp/assets/images/about-banner-2.webp"
              alt="Umeda Vacuum Cleaner, Robotic Vacuum Cleaner, Rice Cooker, Air Purifier Terbaik"
            />
          </div>

        </div>
      </div>
    </div >
  );
}
