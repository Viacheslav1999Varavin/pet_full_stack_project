'use client'
import { Cormorant } from 'next/font/google';
const cormorant = Cormorant({ subsets: ["latin"], style: ['normal'], weight:['600']});
import './AccountLayout.scss'
import React from 'react'
import Settings from '@/pages/Settings';
import Courses from '@/components/Courses';
 function AccountMain () {
 const handlerClass = (buttonNumber:number)=>{
    setC1(buttonNumber);
 }
  const [c1,setC1] = React.useState(1);
  return (
    <>
      <div className='bg-bg1'>
    <div className='pb-20  mx-auto max-w-7xl '>
    <div className=' flex justify-between  pt-40'>
    <aside className=' shrink basis-1/5 self-start mr-16'>
      <div className=''>
        <div className={`uppercase text-4xl ${cormorant.className}`}>Профіль</div>
        <div className='mt-20'>
        <div className='mb-8 text-2xl '><button  onClick={()=>{handlerClass(1)}} className={`py-2 pl-4 pr-16  ${c1===1 ? 'active-button ' : ''}  `} >Мої курси</button></div>
        <div className='text-2xl'><button   onClick={()=>{handlerClass(2)}} className={`py-2 pl-4 pr-5  rounded-2xl ${c1===2 ? 'active-button' : ''}`}>Налаштування</button></div>
        </div>
      </div>
    </aside>
    {c1 === 1 ? <Courses/> : <Settings/>}
    </div>
    </div>
    </div>
    </>
  );
};

export default  AccountMain