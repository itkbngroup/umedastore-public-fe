'use client';  // This should be used only if you're working with a framework that supports SSR, like Next.js.

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Image from 'next/image';
import LogoUmeda from '@/assets/frontend/images/umeda-logo.png';
import ElectronicBanner1 from '@/assets/frontend/images/electronics-banner-1.jpg';

// Ensure correct imports
import { IonIcon } from '@ionic/react';
import { addOutline, bagHandleOutline, caretBackOutline, closeOutline, gridOutline, heartOutline, homeOutline, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, menuOutline, personOutline, removeOutline, searchOutline, star } from 'ionicons/icons';

export default function HeaderMain() {
  return (
    <div>


      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <Image src={LogoUmeda} alt="Umeda's logo" width="120" height="36" />
          </a>

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
            <button className="action-btn">
              <IonIcon icon={personOutline} />
            </button>

            <button className="action-btn">
              <IonIcon icon={bagHandleOutline} />
              <span className="count">0</span>
            </button>

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
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">Home</a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">Categories</a>
              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <Image src={ElectronicBanner1} alt="headphone collection" width="250" height="119" />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <Image src="./assets/images/mens-banner.jpg" alt="men's fashion" width="250" height="119" />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <Image src="./assets/images/womens-banner.jpg" alt="women's fashion" width="250" height="119" />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <Image src="./assets/images/electronics-banner-2.jpg" alt="mouse collection" width="250" height="119" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Other menu items go here */}
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

          <span className="count">0</span>
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
            <a href="#" className="menu-title">Home</a>
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
                <a href="#" className="submenu-title">Shirt</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Shorts & Jeans</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Safety Shoes</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Wallet</a>
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
                <a href="#" className="submenu-title">Dress & Frock</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Earrings</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Necklace</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Makeup Kit</a>
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
                <a href="#" className="submenu-title">Earrings</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Couple Rings</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Necklace</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Bracelets</a>
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
                <a href="#" className="submenu-title">Clothes Perfume</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Deodorant</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Flower Fragrance</a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">Air Freshener</a>
              </li>

            </ul>

          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">Blog</a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">Hot Offers</a>
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
                  <a href="#" className="submenu-title">English</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Espa&ntilde;ol</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">Fren&ccedil;h</a>
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
                  <a href="#" className="submenu-title">USD &dollar;</a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">EUR &euro;</a>
                </li>
              </ul>
            </li>

          </ul>

          <ul className="menu-social-container">

            <li>
              <a href="#" className="social-link">
                <IonIcon icon={logoFacebook} className="logo-facebook" />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IonIcon icon={logoTwitter} className="logo-twitter" />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IonIcon icon={logoInstagram} className="logo-instagram" />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <IonIcon icon={logoLinkedin} className="logo-linkedin" />
              </a>
            </li>

          </ul>

        </div>

      </nav>


    </div>
  );
}
