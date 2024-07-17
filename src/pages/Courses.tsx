import ScrollUp from '@/components/ScrollUp'
import React from 'react'
import Image from 'next/image'
import CourseBlock from '@/components/CourseBlock'
import { Cormorant } from "next/font/google"
import prisma from '@/lib/db'
const cormorant = Cormorant({ subsets: ["latin"],weight:['600']});
const Courses = async () => {
  const courses = await prisma.course.findMany();
  return (
    <div className='bg-bg1'>
      <ScrollUp/>
   <div className='max-w-7xl mx-auto pt-40 pb-20 '>
<div className='relative w-72 mb-20 -left-10'>
        <Image width={40} height={70} className=' absolute max-h-12 top-12 -left-4' src="long.svg" alt="" />
          <Image width={40} height={70} className=' absolute max-h-12 right-3' src="long1.svg" alt="" />
      <p className="uppercase py-8 pl-10 max-w-lg bg-[url('/e4.svg')] bg-left-top bg-[length:250px_100px] bg-no-repeat text-5xl "><span className={cormorant.className} >Курси </span></p>
      </div>
   
    <div className='grid grid-cols-3  gap-7'>

      {courses.map((e,i)=>{
        return(
          <>
          <CourseBlock key={i} textButton={e.buttonText} link={e.link} header={e.header} image={e.image} count={e.count}/>
          </>
        )
      })}
      {/* <CourseBlock textButton='text' link='/account/full' header="Здоров'я і спорт: Вступ" image='/r70.svg' count={10}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я і спорт: Вступ" image='/r70.svg' count={10}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я і спорт: Вступ" image='/r70.svg' count={10}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я і спорт: Вступ" image='/r70.svg' count={10}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/> */}
    </div>
    </div>
    </div>
  )
}

export default Courses
