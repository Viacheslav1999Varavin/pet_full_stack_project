'use client'
import React from 'react'
import Image from 'next/image'
import button from './../../public/button.svg'
import { Cormorant } from "next/font/google"


const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});
const Player = () => {
   const audioRef = React.useRef<HTMLAudioElement>(null);

function handle() {
  console.log('play')
  audioRef.current?.play()
}
  return (
    <>
      <button onClick={handle} className='mr-4'>
      <Image width={80} height={30} src={button} alt="" />
    </button>
    <audio ref={audioRef} src="/track2.mp3"></audio>
    <p className='content-center text-2xl'> <span className={cormorantItalic.className}>як будуть проходити курси</span></p>
    </>
  )
}

export default Player
