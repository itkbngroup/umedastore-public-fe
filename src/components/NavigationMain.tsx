'use client';  // This should be used only if you're working with a framework that supports SSR, like Next.js.

import React, { useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import useCartStore from '@/store/useCartStore';

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Image from 'next/image';


// Ensure correct imports
import { IonIcon } from '@ionic/react';
import { addOutline, bagHandleOutline, caretBackOutline, closeOutline, gridOutline, heartOutline, homeOutline, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, menuOutline, personOutline, removeOutline, searchOutline, star } from 'ionicons/icons';

export default function HeaderMain() {
  return (
    <div>

      <div className="mobile-bottom-navigation z-100">

        <button className="action-btn" data-mobile-menu-open-btn>
          <IonIcon icon={menuOutline} className="menu-outline" />
        </button>

        {/* <!-- Tombol Cart --> */}
        <button data-modal-target="top-right-modal" data-modal-toggle="top-right-modal" className=" action-btn " type="button">
          <IonIcon icon={bagHandleOutline} />

          <span className="count">01</span>
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
