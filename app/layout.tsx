import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarMenu from './navbar';
import React from 'react';

// import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavbarMenu />
      <body className={inter.className}>{children}</body>
    </html>
  );
}