import React from 'react'
import BlogsSection from './Sections/BlogsSection'
import ServicesOfferingSections from './Sections/ServicesOfferingSections'
import SocialSections from './Sections/SocialSections'

const SecondPartOfHomePage = () => {
  return (
      <div className='grid grid-cols-3 justify-center items-center gap-5'>
          <BlogsSection />
          <ServicesOfferingSections/>
          <SocialSections/>
    </div>
  )
}

export default SecondPartOfHomePage
