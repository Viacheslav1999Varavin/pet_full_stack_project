import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import courses from '@/types/courses'

const CourseBlock:React.FC<courses> = ({image,count,header,link, textButton}) => {
  return (
    <div className='flex rounded-3xl border p-4'>
   <div>
      <div className='relative'>
      <div ><Image width={379} height={256} className='rounded-3xl' src={`${image}`} alt="" /></div>
   <div className='absolute top-4 bg-bg1 right-5 rounded-full p-1'>{count} матеріалів</div>
   </div>
   <div>
      <h3 className='mb-8 mt-6 text-4xl uppercase max-w-64'>
         {header}
      </h3>
   </div>
   <div>
      <Button text={textButton} link={link}/>
   </div>
   </div>
   </div>
  )
}

export default CourseBlock
