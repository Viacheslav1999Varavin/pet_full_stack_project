import Header from '@/components/Header'
import React from 'react'

import SignIn from '@/pages/SignIn/SignIn'

const page = () => {
  return (
   <>
   <Header />
   <main className='bg-bg1'>
     <SignIn />
   </main>
</>
  )
}

export default page
