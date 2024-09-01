import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import Image from 'next/image'
import gfont from '../../../public/gfonts.png'
const BlogsSection = () => {
  return (
      <CardWrapper className='p-20 h-full flex flex-col justify-between items-start  '>
          <Image className=' mx-auto w-1/2 ' src={gfont} alt='gfonts' />
          <div>
          <p className='uppercase text-gray-500 text-sm'>blogs</p>
          <h1 className='text-white text-xl font-semibold.'>Stories</h1>
        </div>
  </CardWrapper>
  )
}

export default BlogsSection
