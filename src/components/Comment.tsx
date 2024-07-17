'use client'
import Image from 'next/image'
import arrowleft from './../../public/g1.svg'
import React from 'react';
import commentType from '@/types/comment';


 export default function Comment(props:any) {

  const [comments,setComments] = React.useState<commentType[]>(props.comments);

React.useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);
  const clickNext = () => {
    let arr = [...comments]
    let a:any = arr.shift()
    arr.push(a)
    setComments(...[arr])
  };
  const clickPrev = () => {
    let arr = [...comments];
    let a:any= arr.pop();
    arr.unshift(a)
    setComments(...[arr])
  };
  
  return (
    <>
    <div className='flex justify-between mb-14'>
      <div>
        <h3 className='text-4xl uppercase'>Відгуки</h3>
      </div>
      <div className='flex'>
      <button onClick={clickPrev}  className='mr-6 active:scale-125 transition-all duration-200'><Image width={80} height={30} src={arrowleft} alt="" /></button>  
      <button  onClick={clickNext} className='active:scale-125 transition-all duration-200'> <Image width={80} height={30} className='rotate-180' src={arrowleft} alt="" /></button> 
      </div>
    </div>
<ul className=' flex justify-between h-5xl mb-28 overflow-hidden '  >
        {comments.map((e,i)=>{
          return(
          <li key={i} className='basis-1/3 grow shrink-0'>
          <figure className="bg-pink max-h-full rounded-3xl w-96 h-96  pt-8 ">
      <picture>
      <Image width={60} height={30} className="my-14 mx-auto" src={e.avatar} alt="" />
      </picture>
      <div className='text-center mb-5'>
        {e.name}
      </div>
      <figcaption className="text-center px-6 mb-5">{e.text}</figcaption>
      <div className='text-center '>
        {e.rating}
      </div>
    </figure>
    </li>
    )
        })}
        </ul>
      </>
  )
}

