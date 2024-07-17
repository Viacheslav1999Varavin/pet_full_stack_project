import Link from 'next/link'
import Image from 'next/image'
import inst from './../../../public/ins2.svg'
import face from './../../../public/face.svg'
import tele from './../../../public/tele.svg'
import vec from './../../../public/Vector2.svg'
import React from 'react'

const index = () => {
  return (
    <footer className='bg-green text-white ' >
      <div className='grid grid-cols-3 py-8 mx-auto max-w-3xl '>
      <div className='mt-10 '>
        <Link href="/courses" className='hover:font-semibold transition-all '>Курси</Link>
        </div>
      <div className='mt-10 ml-10'>
        Контакти:
        </div>
      <div className='mt-10 text-right mr-4'>
        <Link  href="" className='inline-block hover:scale-125 transition-all'><Image width={40} height={30} className='#' src={inst} alt="" /></Link>
        </div>
      <div className='mt-4'>
        <Link href="/certificates" className=' hover:font-semibold transition-all'>Сертифікати</Link>
        </div>
      <div className='mt-4 ml-10'>
        <Link href="#" className='hover:font-semibold transition-all '>хххххххххххххххх@gmail.com</Link>
        </div>
      <div className='mt-4 text-right mr-4'>
        <Link href="#" className='inline-block hover:scale-125 transition-all'><Image width={40} height={30} className='' src={face} alt="" /></Link>
        </div>
      <div className='mt-4'>
        <Link href="/about" className='hover:font-semibold transition-all'>Про мене</Link>
        </div>
      <div className='mt-4 ml-10'>
        <Link href="#" className='hover:font-semibold transition-all'>+380 (000) 000 000</Link>
        </div>
      <div className='mt-4 text-right mr-4'>
        <Link href="#" className='inline-block hover:scale-125 transition-all'><Image width={40} height={30} className='' src={tele} alt="" />
        </Link></div>
      <div className='my-16 col-span-3 w-auto h-auto grid-flow-row mx-auto hover:scale-125 duration-300 transition-all'>
        <Link href="/"><Image src={vec} width={60} height={30} alt="" /></Link>
        </div>
      </div>
    </footer>
  )
}

export default index
