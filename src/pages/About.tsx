"use client"
import React from 'react'
import Link from 'next/link'
import TabContent from '@/components/TabContent'
import Tabs from '@/components/Tabs'
import Image from 'next/image'
import tabsarr from '@/types/tabsarr'

import { Cormorant } from "next/font/google"
import ScrollUp from '@/components/ScrollUp' 
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],});
const cormorant = Cormorant({ subsets: ["latin"], style: ['normal'], weight:['600']});

const About: React.FC<tabsarr> = ({arr,tabs}) => {
  let [block,setBlock]= React.useState<number>(5);

  return (
    <div className='max-w-7xl mx-auto pt-40 '>
      <ScrollUp/>
      <div className="mb-6 relative ">
        
      <div className='relative w-72 mb-28 -left-10'>
        <Image width={40} height={70} className=' absolute max-h-12 top-12 -left-4' src="long.svg" alt="" />
          <Image width={40} height={70} className=' absolute max-h-12 right-3' src="long1.svg" alt="" />
      <p className="uppercase py-8 pl-10 max-w-lg bg-[url('/e4.svg')] bg-left-top bg-[length:250px_100px] bg-no-repeat text-3xl "><span className={cormorant.className} >Моя історія </span></p>
      </div>

      <div  >
        <div className=' text-7xl max-w-md'>
        Я - <span className="italic "><span className={`${cormorantItalic.className}`}>Катерина Юденко</span></span>
        </div>
        
      <p className="my-10 max-w-96 bg-[url('/wide.svg')] bg-no-repeat bg-[length:30px_30px] bg-left pl-10">тренер - дієтолог зі стажем 5 років, та сотнями клієнтів з крутими результатами</p>
      </div>

    <p className='text-3xl max-w-xl'>
    Всім привіт, мене звуть Катя, і я готова розділити разом з тобою шлях до красивого тіла! 
    </p>

    <div className="absolute right-10 top-28">
      <div className='content-end max-w-md relative mr-16 p-3 border rounded-full '>
        <Image width={500} height={500}  src="e8.svg" alt="" className='max-w-full rounded-full'/>
        <Image width={70} height={50} className='absolute  top-5 left-3' src="long1.svg" alt="" />
        <Image width={60} height={60} className='absolute max-h-24 right-4 bottom-4 z-10' src="longb.svg" alt="" />
        
        </div>
        </div>

    </div>
    <div className='flex text-2xl'>
        <Image width={50} height={50} className="max-h-30" src="long3.svg" alt="" />
        <p className='m-6 '>Спорт завжди приносив мені неймовірне задоволення, і я впевнена, що фокусування на своїх уподобаннях призведе до дивовижних результатів!
        </p>
      </div>


    <div className='text-2xl max-w-6xl mb-28'>
      
      <p className='mb-8'>Мій спортивний шлях розпочався п’ять років тому, але виглядати так, як зараз, мені допомогла психологія та підтримка моїх близьких. Так так, тобі не здалось - саме психологія та підтримка стала моїм секретом успіху! 
      </p>
      <p className='mb-8'>
      У моїй роботі з клієнтами я керуюся кількома принципами: уважно слухати, конкретно пояснювати (без фарб та надмірних фантазій) і акценті на здоров’ї. Ми разом будуємо свій шлях до успіху!
      </p>
      <p className='mb-8'>
      Минулого року я почала співпрацювати та допомагати іншим людям. Ми не просто займаємося спортом, бo «так треба», ми прагнемо стати кращими, крок за кроком.
      </p>
      <p className='mb-8'>
      Найголовніше - це здорове і адекватне ставлення до себе. Чіткий розум, гармонія в усьому (в їжі, тренуваннях, емоціях та психологічному стані) - ось наш ключ до успіху!
      </p>
      <p className='mb-8'>
      У спорті та здоровому способі життя я вірю в любов до себе, прийняття себе таким, який ти є, та усвідомлення реальності. За допомогою цього підходу ти досягнеш бажаного результату, не втрачаючи гармонії зі своїм організмом.
      </p>
    </div>
    <Tabs arr={arr} activeTab={block} setActiveTab={setBlock}/>
<TabContent img1={tabs[block].img1} img2={tabs[block].img2} text1 ={tabs[block].text1} text2={tabs[block].text2}/>

    <div className='border rounded-full mx-auto p-3 mb-20'>
        <div className='bg-green rounded-full p-10'>
          <p className='text-center max-w-3xl mx-auto text-3xl text-white'>
          Тому я, спираючись на свій досвід, вирішила цим ділитися з іншими. Допомагати. Наставляти. Зі мною ви зможете вийти з цього аду і полюбите себе. Я за здорове схуднення без обмежень!
          </p>
        </div>
      </div>

      
     <div className='text-center pb-28'>
      <Link href="/courses">
      <div className='uppercase bg-green inline-block rounded-full py-4 px-8 text-white '>
      Переглянути курси
      <Image width={30} height={30} className='inline-block ml-2 w-10' src="g2.svg" alt="" />
      </div>
      </Link>
      </div>
      
    </div>
  )
}

export default About
