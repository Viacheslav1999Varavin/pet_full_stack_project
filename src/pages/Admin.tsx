import React from 'react'
import AdminCourse from '@/components/AdminCourse'
import ScrollUp from '@/components/ScrollUp';
import Link from 'next/link';
import { Cormorant } from 'next/font/google';
const cormorant = Cormorant({ subsets: ["latin"],weight:['600']});
const cormorantItalic = Cormorant({ subsets: ["latin"],style:['italic'], weight:['600']});
const Admin = () => {
  return (
    <main className=' bg-bg1'>
          <ScrollUp/>
            <h2 className={`mx-auto max-w-7xl pt-40 mb-20 uppercase text-4xl ${cormorant.className}`}>Адмін Панель</h2>
            <div className='grid max-w-5xl mx-auto '>
            <h3 className='mb-10 uppercase text-xl'>Усі курси</h3>
            <AdminCourse link2='/admin/admin-course-edit' link1='/admin/admin-course' header="Здоров'я і спорт: Вступ" image='/r70.svg' count={10} startext="Швидкий старт" bigtext="Культовий курс про ваше здоров'я з новою програмою. Відео урок в якому ми заглибимося в базову необхідність тренувань і правильного харчування."/>
            <AdminCourse link2='/admin/admin-course-edit' link1='/admin/admin-course' header="Здоров'я та спорт: Розширено" image='/r70.svg' count={10} startext="Повний доступ" bigtext="Культовий курс про ваше здоров'я з новою програмою. Відео уроки з виписаними дієтами, науковими статтями і тд."/>
            </div>
            <div className='flex justify-center items-center flex-col pb-20'>
            <Link href="/admin/admin-add-course" className='bg-green rounded-full w-16 h-16 relative'> <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl '>+</span></Link>
            <p className={`${cormorantItalic.className} mt-4 uppercase text-xl`}>Додати курс</p>
            </div>
         </main>
  )
}

export default Admin
