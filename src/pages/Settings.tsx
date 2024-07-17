import React from 'react'
import Image from 'next/image'
import img1 from './../../public/e11.svg'
import img2 from './../../public/CA.svg'
const Settings = () => {
  return (
    <main className='grow basis '>
    <h2 className='mb-10 uppercase text-xl'>Базова інформація</h2>
    <form action="/">
    <div className='flex bg-white p-8'>
      <div className='mr-20'>
      <div className='mb-5'>
        <Image width={150} height={150} src={img1} alt=''/>
      </div>
      <div className='flex relative '>
        <Image className='mr-2 cursor-pointer' width={30} height={30} src={img2} alt=''/>
        <input className=' opacity-0 absolute cursor-pointer top-0  w-32 mb-2' type="file" name="" id="file" />
        <span className='text-xl text-green'>Змінити</span>
      </div>
      </div>
      <div>
      <div className='flex flex-col mb-8'>
        <label className='text-green text-2xl mb-2'>Ім’я</label>
        <input className='p-2 border rounded-xl pl-4 pr-20' placeholder='Ім’я' type="text" name="" id="name" />
      </div>
      <div className='flex flex-col mb-8'>
        <label className='text-green text-2xl mb-2'>Пошта</label>
        <input className='p-2 border rounded-xl pl-4 pr-20' placeholder='Пошта' type="email" name="" id="email" />
      </div>
      <div className='flex flex-col'>
        <label className='text-green text-2xl mb-2'>Номер телефону</label>
        <input className='p-2 border rounded-xl pl-4 pr-20' placeholder='Номер телефону' type="text" id='number'/>
      </div>
      </div>
    </div>
    </form>
   </main>
  )
}

export default Settings
