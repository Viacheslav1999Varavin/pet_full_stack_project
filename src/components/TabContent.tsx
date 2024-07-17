
import React from 'react';
import Image from 'next/image'
import tabs from '@/types/tabs';
const TabContent: React.FC<tabs>= ({img1,img2,text1,text2}) => {

  return <div className='mb-20' >
  <div className='flex'>
    <div className='max-w-lg'>
      <Image width={500} height={30} src={img1} alt="" />
    </div>
    <div className='ml-5'><p>{text1}</p>
    </div>
    <div></div>
  </div>
  <div className='flex mt-12'>
    <div className='basis-1/5'>
    </div>
    <div className=' shrink basis-3/6'>
      <p >{text2}</p>
    </div>
    <div className='grow  flex-auto max-w-lg'>
    <Image width={500} height={30} src={img2} className='' alt="" />
    </div>
  </div>
</div>
};

export default TabContent;