import React from 'react'
import CourseBlock from './CourseBlock'
import Account from '@/pages/Account'

const Courses = () => {
   const courses = <div className='flex gap-7 flex-wrap grow'>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я і спорт: Вступ" image='/r70.svg' count={10}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   <CourseBlock textButton='text' link='/account/full' header="Здоров'я та спорт: Розширено" image='/r71.svg' count={12}/>
   </div>

  return (
    <>
    {true? courses : <Account/>}
    </>
  )
}

export default Courses
