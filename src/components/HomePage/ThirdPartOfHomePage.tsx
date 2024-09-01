import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import ClientsDisplaySection from '../Sections/ClientsDisplaySection'
import LetsWorkTogetherSection from '../Sections/LetsWorkTogetherSection'

const ThirdPartOfHomePage = () => {
  return (
      <div className='grid xl:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>
          <ClientsDisplaySection />
          <LetsWorkTogetherSection/>
      </div>
  )
}

export default ThirdPartOfHomePage
