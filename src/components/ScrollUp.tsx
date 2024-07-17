'use client'
import Image from 'next/image';
import React from 'react'
import arrow from './../../public/ar.svg'
import { Cormorant } from "next/font/google"
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});

const ScrollUp = () => {


  let [isScroll,setIsScroll]=React.useState(false);
  function b () {
    setIsScroll(Boolean(window.scrollY))
  }
  React.useEffect(()=>{
   window.addEventListener('scroll', b) 
  },[])

const handlerUp = ()=>{
const scroll:number = document.body.clientHeight;
  window.scrollTo({
	top: -scroll,
	left: 0,
	behavior: 'smooth'
   
})
}
const compUp = <div onClick={()=>{handlerUp()}}  className={`${cormorantItalic.className} mt-20  fixed bottom-20 right-20 rounded-full rotate-90`}><Image width={60} className='cursor-pointer' height={60} src={arrow} alt=''/></div>

  return (<>
   {isScroll ? compUp : ''}
    </>
  )
}

export default ScrollUp;