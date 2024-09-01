import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TfiLinkedin } from "react-icons/tfi";

const SocialSections = () => {
  return (
      <CardWrapper className='min-h-52 p-7 flex flex-col justify-between items-start '>
          <div className=' bg-gradient-to-tr from-[#1F1F1F] to-[#131313] flex gap-x-3 text-5xl  justify-center items-center mx-auto rounded-3xl px-5 p-2.5'>
            <span className='rounded-full  p-1.5 hover:text-balance hover:text-black '><FaGithub/></span>
            <span className=' rounded-full   p-1.5 hover:text-black '><TfiLinkedin/></span>
          </div>
          <div className='mt-2.5'>
          <p className='uppercase text-gray-500 text-sm'>stay with me</p>
          <h1 className='text-white text-xl font-semibold.'>Profiles</h1>
        </div>
    </CardWrapper>
  )
}

export default SocialSections
