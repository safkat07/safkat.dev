import React from 'react'
import BlogsSection from './Sections/BlogsSection'
import ServicesOfferingSections from './Sections/ServicesOfferingSections'
import SocialSections from './Sections/SocialSections'

const SecondPartOfHomePage = () => {
  return (
      <div className='grid grid-cols-4 justify-center items-center gap-5'>
          <div className='col-span-1'>
          <BlogsSection />
          </div>
          <div className='col-span-2'>
          <ServicesOfferingSections/>
          </div>
          <div className='col-span-1'>
          <SocialSections/>
          </div>
    </div>
  )
}

export default SecondPartOfHomePage
