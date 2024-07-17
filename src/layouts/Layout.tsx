'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import vec from './../../../public/Vector.svg'
import React from 'react'
import './layout.scss'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
    <Header/>
        {children}
    <Footer/>
    </>
  );
};
