'use client';  // This should be used only if you're working with a framework that supports SSR, like Next.js.

import '@/app/globals.css';
import '@/assets/frontend/css/style-prefix.css';
import Image from 'next/image';

import React, { useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import useCartStore from '@/store/useCartStore';

// Ensure correct imports
import { IonIcon } from '@ionic/react';
import { addOutline, bagHandleOutline, caretBackOutline, closeOutline, gridOutline, heartOutline, homeOutline, logoFacebook, logoInstagram, logoLinkedin, logoTwitter, menuOutline, personOutline, removeOutline, searchOutline, star } from 'ionicons/icons';


export default function ProductContainer() {
  return (
    <div>

      <div className="product-container" hidden>

        <div className="container">


          {/* <!--
          - SIDEBAR
          --> */}

          <div className="sidebar  has-scrollbar" data-mobile-menu>

            <div className="sidebar-category">

              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>

                <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                  <IonIcon icon={closeOutline} className="close-outline" />
                </button>
              </div>

              <ul className="sidebar-menu-category-list">

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="/assets/frontend/images/products/2.jpg" alt="clothes" width={20} height={20} className="menu-title-img" />

                      <p className="menu-title">Clothes</p>
                    </div>

                    <div>
                      <IonIcon icon={addOutline} className="add-icon" />
                      <IonIcon icon={removeOutline} className="remove-icon" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Shirt</p>
                        <data value="300" className="stock" title="Available Stock">300</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">shorts & jeans</p>
                        <data value="60" className="stock" title="Available Stock">60</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">jacket</p>
                        <data value="50" className="stock" title="Available Stock">50</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">dress & frock</p>
                        <data value="87" className="stock" title="Available Stock">87</data>
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="./assets/images/icons/shoes.svg" alt="footwear" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Footwear</p>
                    </div>

                    <div>

                      <IonIcon icon={addOutline} className="add-outline" />
                      <IonIcon icon={removeOutline} className="remove-outline" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Sports</p>
                        <data value="45" className="stock" title="Available Stock">45</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Formal</p>
                        <data value="75" className="stock" title="Available Stock">75</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Casual</p>
                        <data value="35" className="stock" title="Available Stock">35</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Safety Shoes</p>
                        <data value="26" className="stock" title="Available Stock">26</data>
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="./assets/images/icons/jewelry.svg" alt="clothes" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Jewelry</p>
                    </div>

                    <div>
                      <IonIcon icon={addOutline} className="add-icon" />
                      <IonIcon icon={removeOutline} className="remove-icon" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Earrings</p>
                        <data value="46" className="stock" title="Available Stock">46</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Couple Rings</p>
                        <data value="73" className="stock" title="Available Stock">73</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Necklace</p>
                        <data value="61" className="stock" title="Available Stock">61</data>
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="./assets/images/icons/perfume.svg" alt="perfume" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Perfume</p>
                    </div>

                    <div>
                      <IonIcon icon={addOutline} className="add-icon" />
                      <IonIcon icon={removeOutline} className="remove-icon" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Clothes Perfume</p>
                        <data value="12" className="stock" title="Available Stock">12 pcs</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Deodorant</p>
                        <data value="60" className="stock" title="Available Stock">60 pcs</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">jacket</p>
                        <data value="50" className="stock" title="Available Stock">50 pcs</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">dress & frock</p>
                        <data value="87" className="stock" title="Available Stock">87 pcs</data>
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="./assets/images/icons/cosmetics.svg" alt="cosmetics" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Cosmetics</p>
                    </div>

                    <div>
                      <IonIcon icon={addOutline} className="add-icon" />
                      <IonIcon icon={removeOutline} className="remove-icon" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Shampoo</p>
                        <data value="68" className="stock" title="Available Stock">68</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Sunscreen</p>
                        <data value="46" className="stock" title="Available Stock">46</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Body Wash</p>
                        <data value="79" className="stock" title="Available Stock">79</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Makeup Kit</p>
                        <data value="23" className="stock" title="Available Stock">23</data>
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="./assets/images/icons/glasses.svg" alt="glasses" className="menu-title-img" width="20"
                        height="20" />

                      <p className="menu-title">Glasses</p>
                    </div>

                    <div>
                      <IonIcon icon={addOutline} className="add-icon" />
                      <IonIcon icon={removeOutline} className="remove-icon" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Sunglasses</p>
                        <data value="50" className="stock" title="Available Stock">50</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Lenses</p>
                        <data value="48" className="stock" title="Available Stock">48</data>
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="sidebar-menu-category">

                  <button className="sidebar-accordion-menu" data-accordion-btn>

                    <div className="menu-title-flex">
                      <Image src="./assets/images/icons/bag.svg" alt="bags" className="menu-title-img" width="20" height="20" />

                      <p className="menu-title">Bags</p>
                    </div>

                    <div>
                      <IonIcon icon={addOutline} className="add-icon" />
                      <IonIcon icon={removeOutline} className="remove-icon" />
                    </div>

                  </button>

                  <ul className="sidebar-submenu-category-list" data-accordion>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Shopping Bag</p>
                        <data value="62" className="stock" title="Available Stock">62</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Gym Backpack</p>
                        <data value="35" className="stock" title="Available Stock">35</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Purse</p>
                        <data value="80" className="stock" title="Available Stock">80</data>
                      </Link>
                    </li>

                    <li className="sidebar-submenu-category">
                      <Link href="#" className="sidebar-submenu-title">
                        <p className="product-name">Wallet</p>
                        <data value="75" className="stock" title="Available Stock">75</data>
                      </Link>
                    </li>

                  </ul>

                </li>

              </ul>

            </div>

            <div className="product-showcase">

              <h3 className="showcase-heading">best sellers</h3>

              <div className="showcase-wrapper">

                <div className="showcase-container">

                  <div className="showcase">

                    <Link href="#" className="showcase-img-box">
                      <Image src="/assets/frontend/images/products/1.jpg" alt="baby fabric shoes" width={75} height={75} className="showcase-img" />
                    </Link>

                    <div className="showcase-content">

                      <Link href="#">
                        <h4 className="showcase-title">baby fabric shoes</h4>
                      </Link>

                      <div className="showcase-rating">
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$4.00</p>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">

                    <Link href="#" className="showcase-img-box">
                      <Image src="/assets/images/products/2.jpg" alt="men's hoodies t-shirt" className="showcase-img" width={75} height={75} />
                    </Link>

                    <div className="showcase-content">

                      <Link href="#">
                        <h4 className="showcase-title">men's hoodies t-shirt</h4>
                      </Link>
                      <div className="showcase-rating">
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star-half-outline" className="caret-back-outline" />
                      </div>

                      <div className="price-box">
                        <del>$17.00</del>
                        <p className="price">$7.00</p>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">

                    <Link href="#" className="showcase-img-box">
                      <Image src="/assets/frontend/images/products/3.jpg" alt="girls t-shirt" className="showcase-img" width={75} height={75} />
                    </Link>

                    <div className="showcase-content">

                      <Link href="#">
                        <h4 className="showcase-title">girls t-shirt</h4>
                      </Link>
                      <div className="showcase-rating">
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star-half-outline" className="caret-back-outline" />
                      </div>

                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$3.00</p>
                      </div>

                    </div>

                  </div>

                  <div className="showcase">

                    <Link href="#" className="showcase-img-box">
                      <Image src="/assets/frontend/images/products/4.jpg" alt="woolen hat for men" className="showcase-img" width={75} height={75} />
                    </Link>

                    <div className="showcase-content">

                      <Link href="#">
                        <h4 className="showcase-title">woolen hat for men</h4>
                      </Link>
                      <div className="showcase-rating">
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                        <IonIcon icon={star} name="star" className="caret-back-outline" />
                      </div>

                      <div className="price-box">
                        <del>$15.00</del>
                        <p className="price">$12.00</p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>

    </div>
  );
}