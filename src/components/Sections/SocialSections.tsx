import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const SocialSections = () => {
  return (
      <CardWrapper className='p-20 flex flex-col justify-between items-start'>
          <div className='bg-gradient-to-tr from-[#1F1F1F] to-[#131313] flex gap-x-3'>
            <span className='border border-white/20 rounded-full hover:bg-white hover:text-black'><FaGithub/></span>
            <span className='border border-white/20 rounded-full hover:bg-white hover:text-black'><CiLinkedin/></span>
          </div>
          <div>
          <p className='uppercase text-gray-500 text-sm'>stay with me</p>
          <h1 className='text-white text-xl font-semibold.'>Profiles</h1>
        </div>
    </CardWrapper>
  )
}

export default SocialSections
