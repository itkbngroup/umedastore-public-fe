"use client";

import axios from 'axios';
import Link from 'next/link'; // Import Link from next/link
import { useEffect, useState } from 'react';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Image from 'next/image';

import { IonIcon } from '@ionic/react';
import { addOutline, bagHandleOutline, caretBackOutline, closeOutline, gridOutline, heartOutline, homeOutline, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, menuOutline, removeOutline, searchOutline } from 'ionicons/icons';
import React from 'react';

export default function HeaderMain() {
  const [productCategories, setProductCategories] = useState<any[]>([]);

  useEffect(() => {
    // Mengambil data dari API
    axios.get('http://localhost:8000/api/v1/product-category')
      .then(response => {
        if (response.data.status === 'success') {
          setProductCategories(response.data.data); // Menyimpan data kategori produk
        }
      })
      .catch(error => {
        console.error('Error fetching product categories:', error);
      });
  }, []);

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

      <div className="header-main">
        <div className="container">
          <Link href="#" className="header-logo">
            <Image src="/assets/frontend/images/umeda-logo.png" alt="Umeda's logo" width="120" height="36" />
          </Link>

          <div className="header-search-container">
            <input
              type="search"
              className="search"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <IonIcon icon={searchOutline} />
            </button>
          </div>

          <div className="header-user-actions">

            <button
              data-modal-target="top-right-modal"
              data-modal-toggle="top-right-modal"
              className="action-btn"
              type="button"
            >
              <IonIcon icon={bagHandleOutline} />
              <span className="count">0</span>
            </button>

          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list"
          >
            <li className="menu-category">
              <Link href="/" className="menu-title">Home</Link>
            </li>

            <li className="menu-category">
              <Link href="#" className="menu-title">Produk</Link>
              <div className="dropdown-panel">
                {/* Looping melalui kategori produk */}
                <ul className="dropdown-panel-list">
                  <li className="menu-title ">
                    {/* Link ke kategori berdasarkan slug kategori */}
                    <Link href="#" className="!text-[#96694C] !font-bold !text-2xl">
                      Air Purifier
                    </Link>

                    {/* Dropdown submenu untuk subkategori */}
                    <ul>
                      {/* Looping produk dalam kategori tersebut */}
                      <li className="panel-list-item">
                        <Link href="#">
                          Air360
                          Hepa 13 Air Purifier
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Dehumidifier UDH1500
                          Smart Dehumidifier
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title ">
                    {/* Link ke kategori berdasarkan slug kategori */}
                    <Link href="#" className="!text-[#96694C] !font-bold !text-2xl">
                      Audio
                    </Link>

                    {/* Dropdown submenu untuk subkategori */}
                    <ul>
                      {/* Looping produk dalam kategori tersebut */}
                      <li className="panel-list-item">
                        <Link href="#">
                          Besu
                          Bluetooth Speaker Table
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    {/* Link ke kategori berdasarkan slug kategori */}
                    <Link href="#" className="!text-[#96694C] !font-bold !text-2xl">
                      Beauty & Care
                    </Link>

                    {/* Dropdown submenu untuk subkategori */}
                    <ul>
                      {/* Looping produk dalam kategori tersebut */}
                      <li className="panel-list-item">
                        <Link href="#">
                          UTH700
                          Travel Hair Dryer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    {/* Link ke kategori berdasarkan slug kategori */}
                    <Link href="#" className="!text-[#96694C] !font-bold !text-2xl">
                      Kitchen
                    </Link>

                    {/* Dropdown submenu untuk subkategori */}
                    <ul>
                      {/* Looping produk dalam kategori tersebut */}
                      <li className="panel-list-item">
                        <Link href="#">
                          Bru Multi Capsule Espresso Machine
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Genki Healthy Air Fryer
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Grind and Brew Coffee & Tea Maker
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Okome Low Carbo Rice Cooker
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Omuni Steam Oven Air Fryer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    {/* Link ke kategori berdasarkan slug kategori */}
                    <Link href="#" className="!text-[#96694C] !font-bold !text-2xl">
                      Robot Vacuum Cleaner
                    </Link>

                    {/* Dropdown submenu untuk subkategori */}
                    <ul>
                      {/* Looping produk dalam kategori tersebut */}
                      <li className="panel-list-item">
                        <Link href="#">
                          Tomo R2 Smart Robot Vacuum Cleaner
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Tomo R2 Smart Robot Vacuum Cleaner
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Tomo Zoom Laser Smart Robot Vacuum Cleaner
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    {/* Link ke kategori berdasarkan slug kategori */}
                    <Link href="#" className="!text-[#96694C] !font-bold !text-2xl">
                      Vacuum Cleaner
                    </Link>

                    {/* Dropdown submenu untuk subkategori */}
                    <ul>
                      {/* Looping produk dalam kategori tersebut */}
                      <li className="panel-list-item">
                        <Link href="#">
                          Air360
                          Hepa 13 Air Purifier
                        </Link>
                      </li>
                      <li className="panel-list-item">
                        <Link href="#">
                          Dehumidifier UDH1500
                          Smart Dehumidifier
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <Link href="/kategori-produk-2" className="menu-title">kategori 2</Link>
            </li>

            <li className="menu-category">
              <Link href="/katalog" className="menu-title">katalog</Link>
            </li>
            <li className="menu-category">
              <Link href="/garansi" className="menu-title">garansi</Link>
            </li>
            <li className="menu-category">
              <Link href="/tentang" className="menu-title">tentang</Link>
            </li>
            <li className="menu-category">
              <Link href="/kontak" className="menu-title">kontak</Link>
            </li>
            <li className="menu-category">
              <Link href="/faq" className="menu-title">faq</Link>
            </li>
            <li className="menu-category">
              <Link href="/artikel" className="menu-title">artikel</Link>
            </li>

          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-navigation">

        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon icon={menuOutline} className="menu-outline" />
        </button>

        {/* <!-- Tombol Cart --> */}
        <button data-modal-target="top-right-modal" data-modal-toggle="top-right-modal" className=" action-btn " type="button">
          <IonIcon icon={bagHandleOutline} />

          <span className="count">02</span>
        </button>



        <button className="action-btn">
          <IonIcon icon={homeOutline} />

        </button>

        <button className="action-btn">
          <IonIcon icon={heartOutline} />

          <span className="count">1</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon icon={gridOutline} className="grid-outline" />
        </button>

      </div>


      <nav className="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <IonIcon icon={closeOutline} />
          </button>
        </div>

        <ul className="mobile-menu-category-list">

          <li className="menu-category">
            <Link href="#" className="menu-title">Home</Link>
          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Men's</p>

              <div>
                <IonIcon icon={addOutline} className="add-icon" />
                <IonIcon icon={removeOutline} className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Shirt</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Shorts & Jeans</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Safety Shoes</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Wallet</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Women's</p>

              <div>

                <IonIcon icon={addOutline} className="add-icon" />
                <IonIcon icon={removeOutline} className="remove-icon" />

              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Dress & Frock</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Earrings</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Necklace</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Makeup Kit</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>

              <div>
                <IonIcon icon={addOutline} className="add-icon" />
                <IonIcon icon={removeOutline} className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Earrings</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Couple Rings</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Necklace</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Bracelets</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">

            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>

              <div>
                <IonIcon icon={addOutline} className="add-icon" />
                <IonIcon icon={removeOutline} className="remove-icon" />
              </div>
            </button>

            <ul className="submenu-category-list" data-accordion>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Clothes Perfume</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Deodorant</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Flower Fragrance</Link>
              </li>

              <li className="submenu-category">
                <Link href="#" className="submenu-title">Air Freshener</Link>
              </li>

            </ul>

          </li>

          <li className="menu-category">
            <Link href="#" className="menu-title">Blog</Link>
          </li>

          <li className="menu-category">
            <Link href="#" className="menu-title">Hot Offers</Link>
          </li>

        </ul>

        <div className="menu-bottom">

          <ul className="menu-category-list">

            <li className="menu-category">

              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>
                <IonIcon icon={caretBackOutline} className="caret-back-outline" />
              </button>

              <ul className="submenu-category-list" data-accordion>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">English</Link>
                </li>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">Espa&ntilde;ol</Link>
                </li>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">Fren&ccedil;h</Link>
                </li>

              </ul>

            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
                <IonIcon icon={caretBackOutline} className="caret-back-outline" />
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link href="#" className="submenu-title">USD &dollar;</Link>
                </li>

                <li className="submenu-category">
                  <Link href="#" className="submenu-title">EUR &euro;</Link>
                </li>
              </ul>
            </li>

          </ul>

          <ul className="menu-social-container">

            <li>
              <Link href="#" className="social-link">
                <IonIcon icon={logoFacebook} className="logo-facebook" />
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <IonIcon icon={logoTwitter} className="logo-twitter" />
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <IonIcon icon={logoInstagram} className="logo-instagram" />
              </Link>
            </li>

            <li>
              <Link href="#" className="social-link">
                <IonIcon icon={logoLinkedin} className="logo-linkedin" />
              </Link>
            </li>

          </ul>

        </div>

      </nav>

    </div>
  );
}
