import React from 'react'
import BlogsSection from '../Sections/BlogsSection'
import ServicesOfferingSections from '../Sections/ServicesOfferingSections'
import SocialSections from '../Sections/SocialSections'


const SecondPartOfHomePage = () => {
  return (
      <div className='md:grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center gap-5  w-full  md:space-y-0 space-y-3'>
          <div className='md:col-span-1'>
          <BlogsSection />
          </div>
          <div className='col-span-2 xl:block hidden'>
          <ServicesOfferingSections/>
          </div>
          <div className='md:col-span-1'>
          <SocialSections/>
          </div>
          <div className='col-span-2 xl:hidden block'>
          <ServicesOfferingSections/>
          </div>
    </div>
  )
}

export default SecondPartOfHomePage
