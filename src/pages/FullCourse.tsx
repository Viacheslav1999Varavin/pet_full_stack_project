import React from 'react'
import { Cormorant } from "next/font/google"
import CartCourses from '@/components/CartCourses';
import arrowleft from './../../public/g1.svg'
import Link from 'next/link';
import Image from 'next/image';
import ScrollUp from '@/components/ScrollUp';
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});

const FullCourse = () => {
  return (
    <div className='mx-auto max-w-7xl flex pt-40 flex-col pb-20'>
      <ScrollUp/>
      <div className='mb-8 uppercase font-light text-6xl relative '><h1 className=" py-8 p-3 max-w-xl bg-[url('/e4.svg')] bg-left-top bg-[length:370px_120px] bg-no-repeat ">Здоров’я і <span className={`lowercase ${cormorantItalic.className} text-7xl text-green`}>спорт:</span> вступ</h1> </div>

      <div >
        <div className='grid-cols-3 grid  gap-x-6'>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text='Як правильно харчуватись?'/>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text="Назва уроку"/>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text="Значення фізичної активності для загального здоров'я і благополуччя"/>
      </div>
      <div className='grid-cols-3 grid  gap-x-6'>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text='Як правильно харчуватись?'/>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text="Назва уроку"/>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text="Значення фізичної активності для загального здоров'я і благополуччя"/>
      </div>
      <div className='grid-cols-3 grid gap-x-6'>
      <CartCourses img='/rc84.jpg' link='/account/full/lesson' text='Як правильно харчуватись?'/>
      
      </div>
      </div>
      <div className='flex justify-center items-center my-28'>
   <p className={`mr-5 text-xl max-w-48 text-right ${cormorantItalic.className}`}>повернутися до попереднього курсу</p>
      <Link href="" className='mr-6'><Image width={80} height={30} src={arrowleft} alt="" /></Link>  
      <Link href=""> <Image width={80} height={30} className='rotate-180' src={arrowleft} alt="" /></Link>
      <p className={`ml-5 text-xl max-w-48 text-left ${cormorantItalic.className}`}>перейти до наступного курсу</p> 
      </div>
    </div>
  )
}

export default FullCourse
