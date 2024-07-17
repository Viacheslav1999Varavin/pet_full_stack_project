import Header from '@/components/Header'
import React from 'react'

import SignUp from '@/pages/SignUp/SignUp'

const page = () => {
  return (
   <>
   <Header/>
   <main className='bg-bg1'>
     <SignUp />
   </main>
</>
  )
}

export default page
