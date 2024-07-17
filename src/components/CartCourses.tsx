import cartCoursesProps from '@/types/cartCoursesProps'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import img1 from './../../public/bp.svg'
import pen from './../../public/pen.svg'
const CartCourses:React.FC<cartCoursesProps> = ({link,text,img}) => {
const edit = <div className='flex absolute bottom-5 right-5 cursor-pointer rounded-full overflow-hidden'>
        <div className='w-16 h-16    rounded-full  bg-green p-5 '>
                     <Image src={pen} width={35} height={35} alt=''/>
                   </div>
        <input className='opacity-0 text-7xl absolute top-1/2 left-1/4 cursor-pointer -translate-x-1/2 -translate-y-1/2  mb-2' type="file" name="" id="file" />
      </div>

  return (
    <div className='mb-6 '>
      <div className='relative mb-4  rounded-3xl  '>
        <Link href={link}><Image src={img} width={450} height={200} alt='' /><Image className='absolute  top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 ' src={img1} width={80} height={80} alt=''/></Link>

      {false ? edit : ''}
      
      </div>
      <div className=' text-xl'>{text}</div>
    </div>
  )
}

export default CartCourses
