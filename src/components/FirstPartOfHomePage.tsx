import React from 'react'
import ProfileSection from './Sections/ProfileSection'
import LatestWorkScroll from './Sections/LatestWorkScroll'
import AboutMeSection from './Sections/AboutMeSection'
import MyWorksSection from './Sections/MyWorksSection'

const FirstPartOfHomePage = () => {
  return (
    <div className="xl:grid grid-cols-2 gap-x-5 xl:space-y-0 space-y-3">
              <ProfileSection />
              <div className="lg:grid  gap-y-5 lg:space-y-0 space-y-3">
                  <LatestWorkScroll/>
              <div className="md:grid grid-cols-2 flex flex-col  gap-x-5 lg:gap-y-0  gap-y-3 ">
                  <AboutMeSection/>
                  <MyWorksSection/>
              </div>
              </div>
         </div>
  )
}

export default FirstPartOfHomePage
