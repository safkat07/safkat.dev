import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import Image from 'next/image'
import work from '../../../public/Macbook-Air-hunger-cafe-virid.vercel.app.png'


const MyWorksSection = () => {
  return (
      <CardWrapper className='p-7 flex justify-between  gap-y-2.5 flex-col relative'>
          <p className='xl:text-3xl lg:text-2xl md:text-4xl text-2xl uppercase font-bold text-center bg-gradient-to-t from-[#202020] to-[#4e4c4c] text-transparent bg-clip-text'>my works</p>
          <Image className='w-[60%] mx-auto' src={work} alt='hungerSite'/>
          <div>
          <div className='text-left'>
          <p className='uppercase text-gray-500 text-sm'>showcase</p>
          <h1 className='text-white text-xl font-semibold.'>Projects</h1>
        </div>
          </div>
  </CardWrapper>
  )
}

export default MyWorksSection
