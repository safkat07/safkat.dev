import React from 'react'
import ProfileSection from '../Sections/ProfileSection'
import LetsWorkTogetherSection from '../Sections/LetsWorkTogetherSection'
import AboutMeSection from '../Sections/AboutMeSection'
import SocialSections from '../Sections/SocialSections'

const BottomCards = () => {
  return (
    <div className='md:grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5  w-full  md:space-y-0 space-y-3'>
    <SocialSections/>
    <div className='col-span-2 xl:block hidden'>
    <LetsWorkTogetherSection/>
    </div>
    <div className='md:col-span-1'>
    <AboutMeSection/>
    </div>
    <div className='col-span-2 xl:hidden block'>
   <LetsWorkTogetherSection/>
    </div>
</div>
  )
}

export default BottomCards
