import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'

const EducationCard = () => {
  return (
    <CardWrapper className="text-white lg:p10 p-5">
      <h2 className="text-lg font-semibold mb-4">EDUCATION</h2>
      <div className="mb-4">
        <p className="text-sm text-gray-400">2004 - 2007</p>
        <p className="text-lg font-medium">Bachelor Degree in Psychology</p>
        <p className="text-sm text-gray-400">University of California</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">2007 - 2009</p>
        <p className="text-lg font-medium">Master Degree in Designing</p>
        <p className="text-sm text-gray-400">University of Texas</p>
      </div>
    </CardWrapper>
  )
}

export default EducationCard
