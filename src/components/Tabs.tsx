import tabsprops from '@/types/tabsprops';
import React from 'react';

const Tabs:React.FC<tabsprops>= ({ activeTab , setActiveTab ,arr}) => {
   
  return (
   <ul className='flex mb-20'>
   <div  className="w-sm  border-t-4 w-16 my-auto border-beige after:content-['.'] relative after:absolute after:-left-4 after:-top-20 after:text-beige after:text-8xl"></div>
{arr.map((item:number,index:number)=>{
 return (
   <>
     <div className='w-sm  border-t-4 w-16 my-auto border-beige'></div>
     <li key={index} className={`${activeTab === index ? 'rounded-full bg-beige text-white' : ''}`}>
<button  onClick={()=>{setActiveTab(index)}} className='px-10 py-4 border-4 rounded-full border-beige focus:bg-beige focus:text-white' type="button"><span className='  text-2xl font-medium '>{item}</span></button>
</li>
<div className='w-sm  border-t-4 w-16 my-auto border-beige'></div>
</>
 )
})}
<div className="w-sm  border-t-4 w-16 my-auto border-beige after:content-['.'] relative after:absolute after:-right-4 after:-top-20 after:text-beige after:text-8xl"></div>
</ul>
  );
};

export default Tabs;