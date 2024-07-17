import React from 'react'
import Button from '@/components/Button';
import img1 from './../../public/long3.svg'
import img2 from './../../public/long.svg'
import Image from 'next/image';
import { Cormorant } from 'next/font/google';
const cormorant = Cormorant({ subsets: ["latin"], style: ['normal'], weight:['600']});
const Account = () => {
  return (
    <main className='basis-3/5 '>
      <div className='ml-6'>
     <div className='relative w-72 pt-20 -left-10 '>
        <Image width={40} height={70} className=' absolute max-h-12 top-28 -left-1' src={img1} alt="" />
          <Image width={40} height={70} className=' absolute max-h-12 right-0 top-36' src={img2} alt="" />
      <p className="uppercase py-8 pl-10 max-w-lg bg-[url('/e4.svg')] bg-left-top bg-[length:280px_140px] bg-no-repeat text-3xl "><span className={cormorant.className} >У вас поки що немає курсів </span></p>
      </div>
  <Button text="Переглянути курси" link='/'/>
  </div>
  </main>
  )
}

export default Account
