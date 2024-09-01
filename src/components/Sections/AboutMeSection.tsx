import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import Image from 'next/image'
import signature from '../../../public/sign.png'
const AboutMeSection = () => {
  return (
      <CardWrapper className='p-7 flex flex-col justify-between items-start  '>
          <Image className='text-white mx-auto  w-3/4' src={signature} alt='signature' />
          <div>
          <p className='uppercase text-gray-500 text-sm'>more about me</p>
          <h1 className='text-white text-xl font-semibold.'>Credentials</h1>
        </div>
   </CardWrapper>
  )
}

export default AboutMeSection
