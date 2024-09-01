import React from 'react'
import CardWrapper from '../Reuseable/CardWrapper'

const StatCard = ({ number, label }) => {
    return (
      <div className="w-full flex flex-col justify-center items-center p-4 min-w-[100px] bg-gradient-to-t from-[#202020] to-[#161616] rounded-2xl">
        <h2 className="text-4xl font-bold">{number}</h2>
        <p className="text-sm text-gray-400 mt-2 sm:w-3/4 w-1/2 text-center mx-auto">{label}</p>
      </div>
    );
  };


const ClientsDisplaySection = () => {
  return (
      <CardWrapper className='min-h-52 m-auto flex md:flex-row flex-col p-2.5 justify-center items-center gap-5'>
        <StatCard number="+01" label="YEARS EXPERIENCE" />
      <StatCard number="+2" label="CLIENTS WORLDWIDE" />
      <StatCard number="+6" label="COMPLETED PROJECTS" />
   </CardWrapper>
  )
}

export default ClientsDisplaySection
