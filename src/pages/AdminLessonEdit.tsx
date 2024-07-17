import React from 'react'
import Layout from '@/layouts/Layout/Layout'
import Link from 'next/link'
import arr from './../../public/ar.svg'
import img1 from './../../public/rc84.jpg'
import pen from './../../public/pen.svg'
import Image from 'next/image'
import ScrollUp from '@/components/ScrollUp'
const AdminLessonEdit = () => {
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
                  Редагувати урок
               </div>
               <form action="/">
              <div className='flex justify-between mb-5'>
                <div className='basis-1/3 '>
                  <div className='mb-5 uppercase text-xl'>
                    Фото
                  </div>
                  <div className='relative inline-block mb-20 '>
                    <Image className=' duration-300' width={450} height={450} src={img1} alt="" />
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
                  <textarea className='max-w-full border rounded-3xl h-60 p-4' id='name'/>
                  <label className='uppercase text-xl mb-4 mt-6' htmlFor="mat">Текст</label>
                  <input className='max-w-full border rounded-full p-4' type="text" id='mat'/>
                  <label className='uppercase text-xl mb-4 mt-6' htmlFor="video">Посилання на відео</label>
                  <input className='max-w-full border rounded-full p-4' type="text" id='video'/>
                </div>
              </div>

<div className='flex justify-center items-center py-20'>
            <input className=' cursor-pointer uppercase bg-green inline-block rounded-full py-3 px-7 text-white' type="submit" value="ЗБЕРЕГТИ"/>
</div>
              </form>
            </div>
         </main>
  )
}

export default AdminLessonEdit
