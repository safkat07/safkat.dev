import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import Image from 'next/image'
import selfImage from '../../../public/self.jpeg'
import Link from 'next/link'
const ProfileSection = () => {
  return (
      <Link href='/profile'>
       <CardWrapper className='flex md:flex-row flex-col  gap-x-5  justify-center items-center px-10 py-12'>
          <div className='w-full'>
          <Image className='border xl:w-full lg:w-3/4  w-full border-white/15 rounded-ss-3xl rounded-ee-3xl object-cover' src={selfImage} alt='Safkat Sharif Sadli'/>
          </div>
          <div className='space-y-3.5 w-full'>
              <p className='uppercase text-gray-500 text-sm'>A front-end Developer</p>
              <h1 className='text-3xl  font-medium'>Safkat Sharif Sadli.</h1>
              <p className='text-sm text-gray-500'>I am a Front-End Developer based in Dhaka, Bangladesh.</p>
          </div>
   </CardWrapper>
      </Link>
  )
}

export default ProfileSection
