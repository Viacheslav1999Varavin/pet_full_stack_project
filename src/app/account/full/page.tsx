import React from 'react'
import FullCourse from '@/pages/FullCourse'
import Layout from '@/layouts/Layout'

const page = () => {

  //фетч списка уроков и передаём через пропсы в FullCourse (Заголовок и объект с ссылками и названиями уроков)
  return (
    <>
      <Layout>
      <main>
         <FullCourse />
      </main>
      </Layout>
    </>
  )
}

export default page
