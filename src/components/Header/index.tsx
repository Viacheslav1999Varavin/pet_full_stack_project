'use client'

import Image from 'next/image'
import inst from './../../../public/ins.svg'
import vec from './../../../public/Vector.svg'
import Link from 'next/link'
import React from 'react'

const authLi1 = <li className=' basis-full text-center pt-4 border-r my-2 '>
                  <Link href="/account/courses/full" className='inline-block hover:font-semibold transition-all pb-1 duration-200'>Моє Навчання</Link>
                  </li>;
const authLi2 =<li className='pt-4 basis-full text-center border-r my-2'>
                  <Link href="/account/courses" className="hover:font-semibold transition-all">Профіль</Link>
                  </li>
const li1 = <li className=' basis-full text-center pt-1 border-r my-2 '>
                  <Link href="" className='inline-block hover:scale-125 transition-all pb-1 mt-1 duration-200'><Image src={inst} width={40} height={30} alt="Y" /></Link>
                  </li>
const li2 = <li className='pt-4 basis-full text-center border-r my-2'>
                  <Link href="/auth/signin" className="hover:font-semibold transition-all">Особистий кабiнет</Link>
                  </li>

const index = () => {
  const [showHeader, setShowHeader] = React.useState('max-h-20');
  let a=0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > a) {
      setShowHeader('max-h-0');
    } else {
      setShowHeader('max-h-20 '); 
    }
    a= currentScrollY
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
  <header className={`${showHeader} border-y overflow-y-hidden bg-bg1 fixed w-full bg-beige z-20 duration-300 transition-all`}>
<nav className=" mx-auto w-full overflow-auto">
      <ul className={`  flex justify-between mx-auto max-w-7xl uppercase `}>
               <li className='  basis-full text-center  border-r border-l my-2'>
                <Link href="/" className='inline-block w-auto h-auto pb-1 hover:scale-125 transition-all pt-1 duration-200'><Image src={vec} width={48} height={30} alt="Y" /></Link>
                </li>
                <li className='pt-4 basis-full text-center border-r my-2'>
                  <Link href="/courses" className=" hover:font-semibold transition-all">Онлайн курси</Link>
                  </li>
                <li className='pt-4 basis-full text-center border-r my-2'>
                  <Link href="/literature" className="hover:font-semibold transition-all">Литература</Link>
                  </li>
                <li className='pt-4 basis-full text-center border-r my-2'>
                  <Link href="/about" className="hover:font-semibold transition-all">Про мене</Link>
                  </li>
                {true ? li1: authLi1}
                 {true ? li2: authLi2}
          </ul>
      </nav>
        </header>
      )
}

export default index