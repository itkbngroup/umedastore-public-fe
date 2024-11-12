"use client";

import React, { useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import useCartStore from '@/store/useCartStore';


import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';

import { IonIcon } from '@ionic/react';
import { logoFacebook, locationOutline, mailOutline, callOutline, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';

export default function Footer() {
  return (
    <div>

      <footer>

        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-1/2 md:w-1/5">
              <ul>
                <li className="footer-nav-item text-center">
                  <h2 className="text-white">Popular Categories</h2>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Fashion</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Electronic</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Cosmetic</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Health</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Watches</a>
                </li>

              </ul>
            </div>
            <div className="w-1/2 md:w-1/5">
              <ul>
                <li className="footer-nav-item text-center">
                  <h2 className="text-white">Products</h2>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Prices drop</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">New products</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Best sales</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Contact us</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Sitemap</a>
                </li>

              </ul>
            </div>
            <div className="w-1/2 md:w-1/5">
              <ul>
                <li className="footer-nav-item text-center">
                  <h2 className="text-white">Our Company</h2>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Delivery</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Legal Notice</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Terms and conditions</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">About us</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Secure payment</a>
                </li>

              </ul>
            </div>
            <div className="w-1/2 md:w-1/5">
              <ul>

                <li className="footer-nav-item text-center">
                  <h2 className="text-white">Services</h2>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Prices drop</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">New products</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Best sales</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Contact us</a>
                </li>

                <li className="footer-nav-item text-center">
                  <a href="#" className="footer-nav-link">Sitemap</a>
                </li>

              </ul>
            </div>
            <div className="w-1/2 md:w-1/5">
              <ul>
                <li className="footer-nav-item text-center">
                  <h2 className="text-white">Contact</h2>
                </li>
                <li className="footer-nav-item flex">
                  <div className="icon-box">
                    <IonIcon icon={locationOutline} />
                  </div>

                  <address className="content">
                    419 State 414 Rte
                    Jakarta, indonesia
                  </address>
                </li>

                <li className="footer-nav-item flex">
                  <div className="icon-box">
                    <IonIcon icon={callOutline} />
                  </div>
                  <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
                </li>

                <li className="footer-nav-item flex">
                  <div className="icon-box">
                    <IonIcon icon={mailOutline} />
                  </div>
                  <a href="mailto:sulaslansetiawan@gmail.com" className="footer-nav-link">sulaslansetiawan@gmail.com</a>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="footer-nav">

          <div className="container">

            <ul className="footer-nav-list">

              <li className="footer-nav-item text-center">
                <h2 className="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul className="social-link">

                  <li className="footer-nav-item text-center">
                    <a href="#" className="footer-nav-link">
                      <IonIcon icon={logoFacebook} />
                    </a>
                  </li>

                  <li className="footer-nav-item text-center">
                    <a href="#" className="footer-nav-link">
                      <IonIcon icon={logoTwitter} />
                    </a>
                  </li>

                  <li className="footer-nav-item text-center">
                    <a href="#" className="footer-nav-link">
                      <IonIcon icon={logoLinkedin} />
                    </a>
                  </li>

                  <li className="footer-nav-item text-center">
                    <a href="#" className="footer-nav-link">
                      <IonIcon icon={logoInstagram} />
                    </a>
                  </li>

                </ul>
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="container">

            <p className="copyright">
              Copyright &copy; <a href="#">Nebraska V2</a> all rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}
