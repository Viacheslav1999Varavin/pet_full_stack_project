import React from 'react'
import { Cormorant } from 'next/font/google';
import Image from 'next/image'
import arrowleft from './../../public/g1.svg'
import Link from 'next/link'
import circleface from './../../public/e8.svg'
import star3 from './../../public/longb.svg'
import star2 from './../../public/long1.svg'
import ScrollUp from '@/components/ScrollUp';
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});
const AdminLesson = () => {
  return (
     <main>
         <ScrollUp/>
         <div className='mx-auto max-w-7xl flex pt-40 flex-col'>
      <div className='mb-8 uppercase font-light text-6xl relative '><h1 className=" py-8 p-3 max-w-xl  ">Як <span className={`lowercase ${cormorantItalic.className} text-8xl text-green bg-[url('/e4.svg')] bg-left-top bg-[length:400px_150px] bg-no-repeat p-4`}>правильно</span> харчуватись?</h1> </div>
   <div className='mb-6'>
      Які продукти корисні?
   </div>
   <div className='mb-6'>
      <video className='' width="1280" height="400" controls preload="none">
         <source src="/path/to/video.mp4" type="video/mp4" />
         </video>
   </div>
   <div className='mb-6'>
      У їжу потрібно вживати продукти багаті на...
   </div>
   <div className='flex justify-between'>
  <div className='content-end max-w-lg relative p-3 border rounded-full order-2 '>
        <Image width={500} height={500} src={circleface} alt="" className='max-w-full rounded-full'/>
        <Image width={80} height={30} className='absolute max-h-24 top-5 left-5' src={star2} alt="" />
        <Image width={80} height={30} className='absolute max-h-24 right-8 bottom-2 z-20' src={star3} alt="" />
        
        </div>
        <div className='flex mt-20 basis-1/2'>
        <div className='bg-black rounded-r-full  w-36 h-20 mt-6 '></div>
      <div className='bg-black rounded-r-full w-36 h-20 mt-6 mr-10'></div>
      
      <div className='flex justify-between mb-6 text-lg columns-auto'>
      <p className='mr-10'>Всім привіт, мене звуть Катя, і я готова розділити разом з тобою шлях до красивого тіла! 
Спорт завжди приносив мені неймовірне задоволення, і я впевнена, що фокусування на своїх уподобаннях призведе до дивовижних результатів!
</p>
      
      </div>
      </div>
      </div>

<div className='flex justify-center items-center my-28'>
   <p className={`mr-5 text-xl max-w-48 text-right ${cormorantItalic.className}`}>повернутися до попереднього уроку</p>
      <Link href="" className='mr-6'><Image width={80} height={30} src={arrowleft} alt="" /></Link>  
      <Link href=""> <Image width={80} height={30} className='rotate-180' src={arrowleft} alt="" /></Link>
      <p className={`ml-5 text-xl max-w-48 text-left ${cormorantItalic.className}`}>перейти до наступного уроку</p> 
      </div>

    </div>
      </main>
  )
}

export default AdminLesson
