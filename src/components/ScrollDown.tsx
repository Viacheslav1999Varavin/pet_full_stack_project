'use client'
import React from 'react'
import { Cormorant } from "next/font/google"
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});
const ScrollDown = () => {
   const handlerDown = ()=>{
  const scroll:number = window.innerHeight;
  window.scrollTo({
	top: scroll,
	left: 0,
	behavior: 'smooth'
});
}
  return (
    <div onClick={handlerDown} className={`${cormorantItalic.className} mt-20 text-2xl cursor-pointer`}>гортай</div>
  )
}

export default ScrollDown
