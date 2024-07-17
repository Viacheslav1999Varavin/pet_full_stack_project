import Link from 'next/link'
import Image from 'next/image'
import google from './../../../public/b3.svg'
import facebook from './../../../public/b2.svg'
import twitter from './../../../public/b1.svg'
import star1 from './../../../public/long.svg'
import star2 from './../../../public/long1.svg'
import React from 'react'
import './signin.scss'

import { Cormorant } from "next/font/google"
const cormorant = Cormorant({ subsets: ["latin"], style: ['normal'], weight:['600']});

const SignIn = () => {

  return (
    <div className='pt-24 max-w-7xl mx-auto pb-20'>
      <div className='flex pt-2 text-center items-center'>
      <div className='my-16 bg-beige p-20 f order-2'>
        <div className='mb-10 uppercase text-3xl  '>
          <p className={cormorant.className}>Увійти</p>
        </div>
        <form action="/account" className='columns-md h-full'>
        <div>
        <input className='rounded-full p-4 px-40 mb-6 border pl-6' type="email" placeholder="Пошта" />
        </div>
        <div>
        <input className='rounded-full p-4 px-40 mb-6 border pl-6' type="password" placeholder="Пароль"/>
        </div>
        <div className='flex justify-between px-10 text-xs mb-6 '>
          <div className='flex'>
            <input className='hover:cursor-pointer' type="checkbox" id='message' defaultChecked/><label className="ml-1 hover:cursor-pointer hover:text-white" htmlFor="message">Запам’ятати мене</label>
          </div>
          <div className='text-xs hover:text-white'>
            <Link className='hover:cursor-pointer ' href="">Забули пароль?</Link>
          </div>
        </div>
          <input className="uppercase mb-16  bg-green inline-block rounded-full hover:cursor-pointer py-4 px-12 text-white" type="submit" value="Увійти" />
        </form>
        <div >
          <div className='mb-6'>Aбо</div>
          <div className='flex justify-center'>
            <div className='mr-3 hover:scale-125 transition-all duration-200'><Link href="#"><Image src={google} alt="" width={27} height={30}/></Link></div>
            <div className='mr-3 hover:scale-125 transition-all duration-200'><Link href="#"><Image src={facebook} alt="" width={15} height={30}/></Link></div>
            <div className='hover:scale-125 transition-all duration-200'><Link href="#"><Image src={twitter} alt="" width={30} height={30}/></Link></div>
          </div>
        </div>
      </div>
      <div className='mx-auto'>
        <div className='relative '>
        <Image width={40} height={30} className='absolute -top-4 -left-8 max-h-12 -rotate-12' src={star1} alt="" />
        <p className='text-3xl uppercase '><span className={cormorant.className}>Створити акаунт</span></p>
        <Image width={40} height={30} className='absolute -bottom-6 -right-8 max-h-12 rotate-12' src={star2} alt="" />
        </div>
        
        <div className='text-center'>
        <Link href="/auth/signup">
          <span className='inline-block mt-6 border rounded-full py-3 px-5 uppercase border-green w-fit'>
        реєстрація
        </span>
        </Link>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default SignIn
