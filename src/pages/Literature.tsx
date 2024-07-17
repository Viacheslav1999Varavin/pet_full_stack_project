import React from 'react'
import Image from 'next/image';
import { Cormorant } from 'next/font/google';
import ScrollUp from '@/components/ScrollUp';
import prisma from '@/lib/db';
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});

const Literature = async () => {
  const books = await prisma.book.findMany();
  return (
    <div className='mx-auto max-w-7xl flex pt-40 flex-col '>
      <ScrollUp/>
      <div className='mb-10 uppercase font-light text-6xl relative '><h1 className=" py-8 p-3 max-w-xl  ">Корисна <span className={`lowercase ${cormorantItalic.className} text-8xl text-green bg-[url('/e4.svg')] bg-left-top bg-[length:400px_150px] bg-no-repeat p-4`}>література</span></h1> </div>

      <div className='grid grid-cols-4 mb-10'>
        {books.map((e,i)=>{
          return(
            <>
            <Image key={i} className='mb-10 hover:scale-105 duration-300' width={300} height={200} src={e.image} alt='bookName'/>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Literature
