import React from 'react'
import Image from 'next/image'
import star4 from './../../public/long3.svg'
import pen from './../../public/pen.svg'
import adminCourses from '@/types/adminCourses'
import Link from 'next/link'
import { Cormorant } from 'next/font/google'
const cormorant = Cormorant({ subsets: ["latin"],weight:['600']});
const AdminCourse:React.FC<adminCourses> = ({image,count,header,link1,startext, bigtext, link2}) => {
  return (
   <div className="flex mb-14">
      
    <Link href={link1} className=' rounded-3xl border p-3 '>
   <div className='bg-beige rounded-3xl flex   p-2'>
      <div className='relative mr-20'>
      <div><Image width={550} height={300} className='' src={`${image}`} alt="" /></div>
   <div className='absolute top-4 bg-bg1 right-5 rounded-full p-1'>{count} матеріалів</div>
   </div>
   <div className='mr-4 '>
      <div className='flex mt-6 '>
         <Image width={20} height={20} className="inline-block mr-6" src={star4} alt="" />
      <h2>
         {startext}
      </h2>
      </div>
      <h3 className='mb-3 mt-6 text-3xl uppercase max-w-64'>
         {header}
      </h3>
      <div className='max-w-sm text-md leading-4'>
         {bigtext}
      </div>
   </div>

   </div>
   </Link>
   
   <div className='self-center flex flex-col  ml-20'>
      <Link href={link2} className='mx-auto'>
   <div className=' rounded-full  bg-green p-5 '>
      
      <Image src={pen} width={35} height={35} alt=''/>
      
     
   </div>
</Link>
    <span className={`inline-block uppercase ${cormorant.className} text-xl mt-2`}>Редагувати</span>
    </div>
   </div>
  )
}

export default AdminCourse
