import React from 'react'
import Image from 'next/image'
import arr from './../../public/ar.svg'
import img1 from './../../public/leg.svg'
import star4 from './../../public/long3.svg'
import pen from './../../public/pen.svg'
import Link from 'next/link'
import CartCourses from '@/components/CartCourses'
import { Cormorant } from 'next/font/google'
import ScrollUp from '@/components/ScrollUp'
const cormorant = Cormorant({ subsets: ["latin"],weight:['600']});
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});
const AdminCourse = () => {
  return (
     <main className=' bg-bg1'>
            <ScrollUp/>
            <div className='mx-auto max-w-7xl pt-32'>
               <div className='mb-14 '>
                  <Link href="" className='inline-block'>
                  <Image className='cursor-pointer hover:scale-125 duration-300' width={30} height={30} src={arr} alt="" />
                  </Link>
               </div>
               <div className='mb-20'>
                  <Image width={1280} height={900} src={img1} alt="" />
               </div>
               <div>
                  <div className='flex justify-between mb-10'>
                     <div className='basis-1/2 '>
                        <h2 className='text-6xl uppercase max-w-md mb-5' >Здоров'я і спорт: Вступ</h2>
                        <p className='max-w-xl text-3xl leading-7'>Культовий курс про ваше здоров'я з новою програмою. Відео урок в якому ми заглибимося в базову необхідність тренувань і правильного харчування.</p>
                     </div>
                     <div>
                        <Image width={20} height={20} className="inline-block mr-6" src={star4} alt="" /><span className={`text-xl ${cormorantItalic.className}`}>Швидкий старт</span>
                     </div>
                  </div>
               </div>
               <div className='uppercase text-3xl mb-10'>
                  Уроки
               </div>
               <div className='grid grid-cols-3 gap-5 mb-20'>
            
                   <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text='Як правильно харчуватись?'/>
                   <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text="Назва уроку"/>
                   <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text="Значення фізичної активності для загального здоров'я і благополуччя"/>
            
                  <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text='Як правильно харчуватись?'/>
                  <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text="Назва уроку"/>
                  <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text="Значення фізичної активності для загального здоров'я і благополуччя"/>
            
                  <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text='Як правильно харчуватись?'/>
                  <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text="Назва уроку"/>
                  <CartCourses img='/rc84.jpg' link='/admin/admin-course/admin-lesson' text="Значення фізичної активності для загального здоров'я і благополуччя"/>
               
               </div>

               <div className=' flex flex-col  pb-20'>
      <Link href='/admin/admin-course-edit' className='mx-auto'>
   <div className=' rounded-full  bg-green p-5 '>
      <Image src={pen} width={35} height={35} alt=''/>
   </div>
</Link>
    <span className={`inline-block uppercase ${cormorant.className} text-xl text-center mt-2`}>Редагувати</span>
    </div>
            </div>
         </main>
  )
}

export default AdminCourse
