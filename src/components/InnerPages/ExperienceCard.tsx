import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'

const ExperienceCard = () => {
  return (
    <CardWrapper className="text-white lg:p10 p-5">
    <h2 className="text-lg font-semibold mb-4">EXPERIENCE</h2>
    <div className="mb-4">
      <p className="text-sm text-gray-400">2007 - 2017</p>
      <p className="text-lg font-medium">Framer Designer & Developer</p>
      <p className="text-sm text-gray-400">Bluebase Designs</p>
    </div>
    <div>
      <p className="text-sm text-gray-400">2017 - 2023</p>
      <p className="text-lg font-medium">Front-End Developer</p>
      <p className="text-sm text-gray-400">Larsen & Toubro</p>
    </div>
  </CardWrapper>
  )
}

export default ExperienceCard
