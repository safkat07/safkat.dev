import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import Image from 'next/image'
import gfont from '../../../public/gfonts.png'
const BlogsSection = () => {
  return (
      <CardWrapper className='min-h-52 px-7 py-5  flex flex-col justify-between items-start  '>
          <Image className=' mx-auto ' src={gfont} alt='gfonts' />
          <div>
          <p className='uppercase text-gray-500 text-sm'>blogs</p>
          <h1 className='text-white text-xl font-semibold.'>Stories</h1>
        </div>
  </CardWrapper>
  )
}

export default BlogsSection
