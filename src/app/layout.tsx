import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import '@/assets/frontend/css/style-prefix.css';
import HeaderMain from '@/components/HeaderMain';
import NavigationMain from '@/components/NavigationMain';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "",
  icons: {
    icon: '/umeda-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <link rel="icon" href="/umeda-logo.png" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header>
          <HeaderMain />
          <NavigationMain />
        </header>

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
