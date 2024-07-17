import ScrollUp from '@/components/ScrollUp'
import Image from 'next/image'
import React from 'react'
import { Cormorant } from 'next/font/google';
import img1 from './../../public/book.svg'
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});
const Certificates = () => {
  return (
    <main>
       <div className='mx-auto max-w-7xl flex pt-40 flex-col '>
        <ScrollUp/>
      <div className='mb-10  font-light text-6xl relative '><h1 className=" py-8 p-3 max-w-xl  "> <span className={` ${cormorantItalic.className} text-8xl text-green bg-[url('/e4.svg')] bg-left-top bg-[length:400px_150px] bg-no-repeat p-4`}>Cертифікати</span></h1> </div>

      <div className='grid grid-cols-4 mb-10'>
            <Image className='mb-10 hover:scale-105 duration-300' width={300} height={200} src={img1} alt=''/>
            <Image className='mb-10 hover:scale-105 duration-300' width={300} height={200} src={img1} alt=''/>
            <Image className='mb-10 hover:scale-105 duration-300' width={300} height={200} src={img1} alt=''/>
            <Image className='mb-10 hover:scale-105 duration-300' width={300} height={200} src={img1} alt=''/>
      </div>
    </div>
    </main>
  )
}

export default Certificates
