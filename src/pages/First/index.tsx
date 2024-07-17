
import Button from '@/components/Button'
import Comment from '@/components/Comment'
import  './first.scss'
import Image from 'next/image'
import Link from 'next/link'
import face from './../../../public/image.svg'
import face2 from './../../../public/image.png'
import star1 from './../../../public/long.svg'
import star2 from './../../../public/long1.svg'
import arrow from './../../../public/g1.svg'
import circleface from './../../../public/e8.svg'
import star3 from './../../../public/longb.svg'
import star4 from './../../../public/long3.svg'
import { Cormorant } from "next/font/google"
import ScrollDown from '../../components/ScrollDown'
import ScrollUp from '../../components/ScrollUp'
import React from 'react'
import Player from '@/components/Player'
import prisma from '@/lib/db'
import commentType from '@/types/comment'
const cormorantItalic = Cormorant({ subsets: ["latin"], style: ['italic'],weight:['600']});


const index = async () => {
   
const comments:commentType[] = await prisma.comment.findMany();

  return (
    <>
    <div className='mx-auto max-w-7xl'>
      <ScrollUp/>
    <div className="flex justify-between mb-20 pt-40 h-screen">
      
      <div className='mt-10'>
        <div className='mb-8 uppercase text-7xl relative'><div className=''><h1 className="uppercase py-8 p-3 max-w-lg bg-[url('/e4.svg')] bg-left-top bg-[length:370px_120px] bg-no-repeat ">Унікальний</h1></div> <div className=' '><i className=' text-8xl lowercase text-beige italic font-normal'> <span className={cormorantItalic.className}>шлях</span> </i><span className='font-extralight'>до кращої </span></div><span className='font-extralight'>версії</span> <span className='text-green italic font-medium lowercase text-8xl'> <span className={cormorantItalic.className}>себе!</span></span></div>

      <Button text="Обрати тариф" link='#tariff'/>

      <ScrollDown/>
      </div>

      <div className=' relative  mr-16 p-4 border rounded-t-full mb-20'>
        <Image width={450} height={450} src={face} alt="" className='w-full h-full '/>
        <Image width={80} height={30} className='absolute top-0 left-0' src={star1} alt="" />
        <Image width={80} height={30} className='absolute -right-20 bottom-10 z-20 ' src={star2} alt="" />
        <div className= "absolute -bottom-16  -right-16 bg-pink rounded-full w-36 h-36 flex-wrap flex justify-center content-center text-2xl z-10" ><i className={cormorantItalic.className}>Катерина <br />Юденко</i></div>
        </div>
    </div>


<div className=' mb-8 flex'>
      <div className='bg-black rounded-r-full w-36 h-20 mt-6'></div>
      <div className='bg-black rounded-r-full w-36 h-20 mt-6 mr-20'></div>
      <div className='ml-10'>
      <li className='mb-4 uppercase text-lg lm lmn'>Про мене</li>
      <h2 className='mb-6 border-b pb-4 font-medium text-2xl'>Давайте познайомимось ближче</h2>
      <div className='grid grid-cols-2 gap-y-4 mb-6 text-lg columns-auto'>
      <p className='mr-10'>Всім привіт, мене звуть Катя, і я готова розділити разом з тобою шлях до красивого тіла! 
Спорт завжди приносив мені неймовірне задоволення, і я впевнена, що фокусування на своїх уподобаннях призведе до дивовижних результатів!
</p>
      <p>Мій спортивний шлях розпочався п’ять років тому, але виглядати так, як зараз, мені допомогла психологія та підтримка моїх близьких. Так так, тобі не здалось - саме психологія та підтримка стала моїм секретом успіху! </p>
      
      
      </div>
      <Link className=" inline-block text-lg uppercase" href="/about"><span className="border-b ">Читати далі</span> <Image width={40} height={70} className='inline-block rounded-full rotate-180' src={arrow} alt="" /></Link>
      </div>
    
    </div>
    <div className=''><Image width={2000} height={200} src={face2} alt="" /></div>

    <div className="text-3xl uppercase font-medium mt-28 mb-16">Мій підхід</div>
    <div className='flex mb-16'>
      <div className='border p-3 f mr-6'>
      <div className='w-96 h-96 bg-beige f relative'>
        <div className="absolute w-7/12 top-12 left-1/4">
        <Image width={30} height={30} className=" w-10 block mb-4 " src={star1} alt="" />
        <h4 className="text-3xl italic mb-4"><span className={cormorantItalic.className}> Турбота про ваше здоров’я  </span></h4>
        <p>я пропоную комлексну программу без шкоди для здоров’я  та всецільно підтримую вас </p>
        </div>
      </div>
      </div>
      <div className='border p-3 f mr-6'>
      <div className='w-96 h-96 bg-beige f relative'>
        <div className="absolute w-7/12 top-12 left-1/4">
        <Image width={30} height={30} className=" w-10 block mb-4 " src={star1} alt="" />
        <h4 className="text-3xl italic mb-4"><span className={cormorantItalic.className}> Турбота про ваше здоров’я  </span></h4>
        <p>я пропоную комлексну программу без шкоди для здоров’я  та всецільно підтримую вас </p>
        </div>
      </div>
      </div>
      <div className='border p-3 f '>
      <div className='w-96 h-96 bg-beige f relative'>
        <div className="absolute w-7/12 top-12 left-1/4">
        <Image width={30} height={30} className=" w-10 block mb-4 " src={star1} alt="" />
        <h4 className="text-3xl italic mb-4"><span className={cormorantItalic.className}> Турбота про ваше здоров’я  </span></h4>
        <p>я пропоную комлексну программу без шкоди для здоров’я  та всецільно підтримую вас </p>
        </div>
      </div>
      </div>
    </div>

    

    </div>
    <h4 className='text-center uppercase border-y italic text-3xl w py-6 font-medium'> <span className={cormorantItalic.className}>Моє призначення як тренера - надихати вас на зміни і допомагати вам набути впевненості у власних силах.</span></h4>
    
    <div className='mx-auto max-w-7xl'>


    <div className=" my-20 relative ">
      <div className="mt-10 " >
        <div className=' text-7xl '>
        Я - <span className={cormorantItalic.className}>Катерина Юденко</span>
        </div>
        
      <p className="mt-8 mb-8 max-w-96 bg-[url('/wide.svg')] bg-no-repeat bg-[length:30px_30px] bg-left pl-10">тренер - дієтолог зі стажем 5 років, та сотнями клієнтів з крутими результатами</p>

      <p className="uppercase py-8 pl-10 max-w-lg text-xl bg-[url('/e4.svg')] bg-left-top bg-[length:370px_120px] bg-no-repeat ">я знайшла підхід, який допоможе вам створити тіло твоєї мрії</p>
        

      </div>
    <div className="absolute right-4 top-24">
      <div className='content-end max-w-lg relative mr-16 p-3 border rounded-full '>
        <Image width={500} height={500} src={circleface} alt="" className='max-w-full rounded-full'/>
        <Image width={80} height={30} className='absolute max-h-24 top-5 left-5' src={star2} alt="" />
        <Image width={80} height={30} className='absolute max-h-24 right-8 bottom-2 z-20' src={star3} alt="" />
        
        </div>
        </div>

    </div>
    <h3 className=' text-6xl max-w-3xl font-extralight uppercase tracking-wide'>І <span className="font-normal ">запрошую</span> вас на <span className=" italic text-green text-7xl font-normal lowercase"><span className={cormorantItalic.className}>курси</span></span> вашого перевтілення та <span className={cormorantItalic.className}><span className="lowercase text-pink  text-7xl">кроку <br />у нове життя</span></span></h3> 

     <div className='flex mb-20 pt-30'>
      <div className="grow shrink" ></div>
      <div className="grow shrink bg-[url('/v1.svg')] bg-contain bg-no-repeat bg-right-top pt-20"> 
    
    </div>
    <div className='basis-1/2 flex flex-col pl-6'>
    <div className='grow'></div>
    <p className='shrink text-xl font-semibold pt-60'>Кожен онлайн курс проходить в особистому кабінеті на сайті. Займайтеся де і коли зручно, головне що б був інтернет і бажання. У кожній програмі тренування 1-2 рази на день з повним відео від розминки до розтяжки, рекомендації з харчування, завдання, які приведуть вас до мети, і особисті консультації від мене.</p>
    <div className='flex mt-10 shrink'>
    <Player/>
    </div>
      
    </div>
    </div>

    <div className="border rounded-full p-4 mb-28">
    <h2 className=' bg-green tracking-wider py-14 px-48 text-5xl italic rounded-full text-center uppercase text-white'><span className={cormorantItalic.className}>Тут ви <span className='text-pink'>не</span> скинете</span> <span className='text-beige not-italic font-medium text-4xl'>20 кг за місяць </span>
    <span className={cormorantItalic.className}> і потім наберете ще більше</span></h2></div>

    <h2 id='tariff' className=' uppercase font-medium text-5xl italic mb-16'><span className={cormorantItalic.className}>Оберіть свій тариф</span></h2>

    <div className='flex justify-evenly mb-28'>
      <div className=' border rounded-full p-4 max-w-sm shrink-0'>
      <div className='flex flex-col h-full bg-pink rounded-full px-6'>
        <div className='text-center mt-20 mb-8'>
          <Image width={20} height={20} className="inline-block mr-6" src={star4} alt="" /><span className={`text-xl ${cormorantItalic.className}`}>Швидкий старт</span>
          
        </div>
        <div className='text-center text-4xl uppercase mb-8'>
          <h3>Здоров'я і спорт: Вступ</h3>
        </div>
        <div className='text-center mb-8 leading-tight tracking-wider text-xl h-full'>
          <p>Культовий курс про ваше здоров'я з новою програмою.</p> <p>Відео урок в якому ми заглибимося в базову необхідність тренувань і правильного харчування</p> 
        </div>
        <div className='text-center mb-8 text-sm italic'>
          <p className={`text-xl ${cormorantItalic.className}`}>від 15 € / доступ назавжди</p>
        </div>
        <div className='text-center mb-24'>
          <Button text="Обрати тариф" link='/'/>
        </div>
        </div>
      </div>
      <div className=' border rounded-full p-4 max-w-sm ml-6  shrink-0'>
      <div className='flex flex-col h-full bg-pink rounded-full px-6'>
        <div className='text-center mt-20 mb-8'>
          <Image width={20} height={20} className="inline-block mr-6" src={star4} alt="" /><span className={`text-xl ${cormorantItalic.className}`}>Повний доступ</span>
        </div>
        <div className='text-center text-4xl uppercase mb-8 '>
          <h3>Здоров'я та спорт: Розширено</h3>
        </div>
        <div className='text-center mb-8 leading-tight tracking-wider text-xl text-clip h-full'>
          <p>Культовий курс про ваше здоров'я з новою програмою. Відео урок в якому ми заглибимося в базову необхідність тренувань і правильного харчування</p> 
        </div>
        <div className='text-center mb-8 text-sm italic'>
          <p className={`text-xl ${cormorantItalic.className}`}>від 55 € / доступ назавжди</p>
        </div>
        <div className='text-center mb-24'>
          <Button text="Обрати тариф" link='/'/>
        </div>
        </div>
      </div>
      <div className=' border rounded-full p-4 max-w-sm ml-6  shrink-0'>
      <div className='flex flex-col h-full bg-pink rounded-full px-6'>
        <div className='text-center mt-20 mb-8'>
          <Image width={20} height={20} className="inline-block mr-6" src={star4} alt="" /><span className={`text-xl ${cormorantItalic.className}`}>Підтримка</span>
          
        </div>
        <div className='text-center text-4xl uppercase mb-8'>
          <h3>Моя телеграм група</h3>
        </div>
        <div className='text-center mb-8 leading-tight tracking-wider text-xl'>
          <p>Наша телеграм-спільнота, у якій ви можете поставити мені будь-яке запитання й отримати зворотний зв'язок Наша телеграм-спільнота, у якій ви можете поставити мені будь-яке запитання й отримати зворотний зв'язок</p> 
        </div>
        <div className='text-center mb-8 text-sm italic'>
          <p className={`text-xl ${cormorantItalic.className}`}>від 102 € / місяць</p>
        </div>
        <div className='text-center mb-24'>
          <Button text="Обрати тариф" link='/'/>
        </div>
        </div>
      </div>
    </div>

    <div className='max-w-xl mb-20 '>
      <h3 className='text-6xl uppercase font-extralight leading-normal'>Вам <span className='font-normal'>підійде</span> цей <span className={`text-beige lowercase italic text-7xl ${cormorantItalic.className}`}>курс</span>, якщо:</h3>
    </div>

    <div className={`grid grid-cols-2 gap-6 mb-28 ${cormorantItalic.className}`}>
      <div className='bg-beige rounded-full p-7 flex'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>вам набридло ”вбивати” себе тренуваннями</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>хочете схуднути без шкоди для здоровʼя</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>постійно обмежуєте себе в їжі</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>не любите своє відображення у дзеркалі</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
        <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>проходите неефективні марафони</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>хочете перестати зациклюватись на їжі та відчути легкість</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>зриваєтесь і переїдаєте</p>
      </div>
      <div className='bg-beige rounded-full p-7 flex items-center'>
      <div><Image width={20} height={20} className='inline-block mr-2' src={star4} alt="" /></div>
        <p className='italic text-2xl'>не можете правильно займатись спортом</p>
      </div>
    </div>

    
    
    
    <Comment comments={comments}/>

    </div>
    </>
  )
}

export default index
