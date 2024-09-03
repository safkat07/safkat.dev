import Image from 'next/image'
import React from 'react'
import selfImg from '../../../public/self.jpeg'
import CardWrapper from '../Reuseable/CardWrapper'
import ExperienceCard from './ExperienceCard'
import EducationCard from './EducationCard'
const ViewProfilePage = () => {
  return (
      <div>
          <div className='w-full mx-auto lg:grid  xl:grid-cols-3 grid-cols-1 justify-center gap-5 mt-20 mb-5'>
          <CardWrapper className='xl:p-5 p-5 lg:py-10'>
          <Image className='mx-auto rounded-3xl  ' src={selfImg} alt='image'/>
          </CardWrapper>
          <div className='xl:col-span-2  flex flex-col justify-between '>
              <div>
              <h1 className='lg:text-7xl  text-3xl text-center xl:my-0 my-10 uppercase '>👋self-summary👋</h1>
              </div>
              <CardWrapper className='h-auto xl:p-10 p-7 '>
                  <div className='xl:pt-20 text-start'>
                  <h1 className='xl:text-4xl text-3xl '>Safkat Sharif Sadli</h1>
                  <p className="xl:text-lg lg:text-xl text-lg mt-2.5 xl:text-justify">
                  I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.
                  </p>
                  </div>
              </CardWrapper>
          </div>
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-5 justify-center items-center'>
              <ExperienceCard />
              <EducationCard/>
          </div>
      </div>
  )
}

export default ViewProfilePage
