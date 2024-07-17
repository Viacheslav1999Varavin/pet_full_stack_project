import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arr from './../../public/ar.svg'
import img1 from './../../public/zag1.svg'
import pen from './../../public/pen.svg'
import { Cormorant } from 'next/font/google'
import ScrollUp from '@/components/ScrollUp'
const cormorantItalic = Cormorant({ subsets: ["latin"],style:['italic'], weight:['600']});
const AdminAddCourse = () => {
  return (
    <main className=' bg-bg1'>
          <ScrollUp/>
            <div className='mx-auto max-w-7xl pt-40'>
<div className='mb-14 '>
                  <Link href="" className='inline-block'>
                  <Image className='cursor-pointer hover:scale-125 duration-300' width={30} height={30} src={arr} alt="" />
                  </Link>
                  
               </div>
               <div className='uppercase text-3xl mb-10'>
                  Створити курс
               </div>
               <form action="/">
              <div className='flex justify-between mb-5'>
                <div className='basis-1/3 '>
                  <div className='mb-5 uppercase text-xl'>
                    Фото
                  </div>
                  <div className='relative inline-block mb-20 '>
                    <Image className=' duration-300' width={425} height={300} src={img1} alt="" />
<div className='flex absolute bottom-5 right-5 cursor-pointer rounded-full overflow-hidden'>
        <div className='w-16 h-16    rounded-full  bg-green p-5 '>
                     <Image src={pen} width={35} height={35} alt=''/>
                   </div>
        <input className='opacity-0 text-7xl absolute top-1/2 left-1/4 cursor-pointer -translate-x-1/2 -translate-y-1/2  mb-2' type="file" name="" id="file" />
      </div>
                  </div>
                </div>

                <div  className='flex flex-col basis-2/3 ml-32'>
                <label className='uppercase text-xl mb-4' htmlFor="name">Назва</label>
                  <input className='max-w-full border rounded-full p-4' type="text" id='name'/>
                  <label className='uppercase text-xl mb-4 mt-6' htmlFor="text">опис</label>
                  <textarea className='max-w-full border rounded-3xl h-36 p-4' id='name'/>
                  <label className='uppercase text-xl mb-4 mt-6' htmlFor="mat">Кількість матеріалів</label>
                  <input className='max-w-full border rounded-full p-4' type="text" id='mat'/>
                </div>
              </div>
                  <div className='mb-5 uppercase text-xl'>
                    УРОКИ
                  </div>

                  <div className='grid grid-cols-3 gap-5 mb-20'>
            
                   {/* <CartCourses img='/rc84.jpg' link='/account/courses/full/lesson' text='Як правильно харчуватись?'/> */}
                   
               
               </div>

<div className='flex justify-center items-center flex-col mb-20'>
            <Link href="" className='bg-green rounded-full w-16 h-16 relative'> <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl '>+</span></Link>
            <p className={`${cormorantItalic.className} mt-4 uppercase text-xl`}>Додати урок</p>
            </div>

    <div className='flex justify-center items-center pb-20'>
            <input className=' cursor-pointer uppercase bg-green inline-block rounded-full py-3 px-7 text-white' type="submit" value="ЗБЕРЕГТИ"/>
</div>
              </form>
            </div>
         </main>
  )
}

export default AdminAddCourse
