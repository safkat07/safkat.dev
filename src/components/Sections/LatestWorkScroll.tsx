import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'
import Marquee from "react-fast-marquee";
const LatestWorkScroll = () => {
  return (
      <CardWrapper className='px-10 xl:py-0 py-3 flex justify-start items-center overflow-hidden'>
          <Marquee>
              <div className='flex gap-x-5'>
        <p>Latest works are Live</p>
        <p>Latest works are Live</p>
        <p>Latest works are Live</p>
        <p>Latest works are Live</p>
       </div>
        </Marquee>
   </CardWrapper>
  )
}

export default LatestWorkScroll
